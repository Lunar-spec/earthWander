import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import auth from '../middleware/auth.js'

import User from '../mongoDB/models/user.js'

dotenv.config();

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { username, email, fname, lname, password, gender, role } = req.body;

        if (!(username && email && fname && lname && password && gender && role)) {
            res.status(400).send("All the inputs required")
        }

        const existingUser = await User.findOne({ username })

        if (existingUser) {
            res.status(409).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            fname,
            lname,
            email: email.toLowerCase(),
            password: hashedPassword,
            gender,
            role,
        })

        const token = jwt.sign({
            user_id: newUser._id,
            email,
            username,
            role,
        },
            process.env.SECRET_KEY,
            {
                expiresIn: '2h',
            })

        newUser.token = token;

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const foundUser = await User.findOne({ username })

        if (foundUser) {
            const validPassword = await bcrypt.compare(
                password,
                foundUser.password
            );
            if (validPassword) {
                const token = jwt.sign({
                    username: foundUser.username,
                    role: foundUser.role,
                    
                },
                    process.env.SECRET_KEY, {
                    expiresIn: '2h'
                })

                foundUser.token = token

                res.status(201).json({ username: foundUser.username, token, user_id: foundUser._id })
            } else {
                res.status(400).json({ error: 'Invalid username or password' })
            }
        } else {
            res.status(400).json({ error: 'Invalid username or password' })
        }

    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' })
    }
})

router.delete('/:id', auth, async (req, res) => {
    const id = req.params.id;
    try {
        const userRole = req.body.role;

        if(userRole === 'superadmin'){
            await User.findByIdAndRemove(id).exec();
        } else {
            res.status(400).json({error: 'Only superadmin can perform these actions'})
        }
        
        res.status(201).json({ message: 'User deleted successfully' })
    } catch (error) {
        res.status(402).json({ error: 'Error in deleting the user' })
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const allusers = await User.find({}, '-password');

        res.status(201).json(allusers)
    } catch (error) {
        res.status(401).json({ error: 'Error fetching the user data' });
    }
})

export default router;



