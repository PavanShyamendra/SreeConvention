import express from 'express'
import mongoose from 'mongoose'

import router from './routes/dateroutes.js'
import cors from 'cors'
'Access-Control-Allow-Origin', '*'
'Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT'

const app = express()
app.use((express.json({ limit: "30mb", extended: true})))
app.use((express.urlencoded({ limit: "30mb", extended: true})))
app.use((cors()))

app.use('/dates',router)





const PORT = process.env.PORT || 5000
mongoose.connect('mongodb://localhost/sreeconvention')
    .then( () => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)) )
    .catch(err =>console.error('Could not connect',err));

    
