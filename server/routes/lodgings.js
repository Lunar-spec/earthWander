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
            roomDimensions,
            additionalInfo,
            latitude,
            longitude,
        } = req.body
        console.log(req.body)
        const images = req.files.map((file) => file.path)

        const newLodging = await Lodging.create({
            title,
            description,
            price,
            rating,
            image: images[0],
            reviews,
            numRooms,
            roomDimensions,
            additionalInfo,
            latitude,
            longitude,
            images,
        });
        // console.log(newLodging)

        res.status(201).json(newLodging)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:id', auth, async (req, res) => {
    const id = req.params.id;
    try {
        const foundLodging = await Lodging.findByIdAndRemove(id).exec();
        res.status(201).json({message : 'Successfully deleted the lodging'})
    } catch (error) {
        res.status(500).json({error: 'Error in deleting the lodging'})
    }
})



export default router;