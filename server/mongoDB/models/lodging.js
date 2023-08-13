import mongoose from "mongoose";
import '../../config/multerConfig.js'

const lodgingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    reviews: {
        type: [String],
        required: true,
    },
    numRooms: {
        type: Number,
        required: true,
    },
    roomDimensions: {
        type: String,
        required: true,
    },
    additionalInfo: String,
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
},
    {
        timestamps: true,
    });

const Lodging = mongoose.model('Lodging', lodgingSchema);

export default Lodging;
