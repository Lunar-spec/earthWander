import express from 'express'
import Lodging from '../mongoDB/models/lodging.js'
import auth from '../middleware/auth.js'
import upload from '../config/multerConfig.js';

const router = express.Router();

router.post('/add', auth, upload.array('images', 5), async (req, res) => {
    try {
        const {
            title,
            description,
            price,
            rating,
            reviews,
            numRooms,
            isBooked,
            roomDimensions,
            additionalInfo,
            latitude,
            longitude,
        } = req.body
        console.log(req.body)

        const images = req.files.map((file) => file.path)

        const newLodging = new Lodging({
            title,
            description,
            price,
            rating,
            image: req.files[0].path,
            reviews,
            numRooms,
            isBooked,
            roomDimensions,
            additionalInfo,
            latitude,
            longitude,
            images,
        });

        await newLodging.save();
        // console.log(newLodging)

        res.status(201).json(newLodging)
    } catch (error) {
        res.status(500).json({ error: 'Error adding the data' })
    }
})

router.delete('/:id', auth, async (req, res) => {
    const id = req.params.id;
    try {
        const foundLodging = await Lodging.findByIdAndRemove(id).exec();
        res.status(201).json({ message: 'Successfully deleted the lodging' })
    } catch (error) {
        res.status(500).json({ error: 'Error in deleting the lodging' })
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const allLodgings = await Lodging.find();

        res.status(201).json(allLodgings)
    } catch (error) {
        res.status(401).json({ error: 'Error fetching all the data' })
    }
})

router.put('/edit/:id', auth, async (req, res) => {
    try {
        const {
            id,
            price,
            rating,
            reviews,
            isBooked,
            additionalInfo,
        } = req.body

        const foundLodging = Lodging.findById(id)

        if (!foundLodging){
            return res.status(404).json({error: 'No such Lodging with Id'})
        }

        foundLodging.rating = rating;

        foundLodging.isBooked = isBooked;
        
        foundLodging.reviews = reviews;

        foundLodging.price = price;

        foundLodging.additionalInfo = additionalInfo;

        await foundLodging.save();

        return res.status(201).json({message: 'Lodging data is updated'})
    } catch (error) {
        res.status(401).json({error: 'Error in updating the file'})
    }
})





export default router;