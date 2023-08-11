import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import connectDb from './mongoDB/connect.js'
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/', async (req, res) => {
    res.send('The lighting has started ⚡')
})

const startServer = async () => {
    try {
        connectDb(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`⚡Thunderbolt struck the earth on http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error)
    }
}

startServer();