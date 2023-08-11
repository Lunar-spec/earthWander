import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();


const app = express();
app.use(cors());
app.use(express(json));

const PORT = process.env.PORT || 5000


const startServer = () => {
    app.listen(PORT, json.send('Thunderbolt struck the earth ⚡'))
}

startServer();