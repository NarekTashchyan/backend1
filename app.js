import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config();

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('get')
})

app.post('/', (req, res) => {
    res.send('post')
})

app.listen(process.env.PORT, () => {
    console.log(`server running at http://localhost:${process.env.PORT}`)
})