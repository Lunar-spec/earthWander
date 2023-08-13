import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary'
import * as dotenv from 'dotenv'

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET_KEY,
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'EarthWander',
        allowed_formats: ['jpg', 'jpeg', 'png'],
    }
})

const upload = multer({ storage })

export default upload;