import express from 'express'
import Lodging from '../mongoDB/models/lodging.js'
import auth from '../middleware/auth.js'
import upload from '../config/multerConfig.js';

const router = express.Router();

router.post('/add', auth,upload.array('images', 5), async (req, res) => {
    try {
        const {} = req.body

        }
    } catch (error) {
        res.status(500).json({error: 'Error in storing the data'})
    }
})



export default router;