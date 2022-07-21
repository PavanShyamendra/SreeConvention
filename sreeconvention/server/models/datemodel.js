import mongoose from 'mongoose'
import express from 'express'


const dateSchema = mongoose.Schema({
    booked : String
})

const DateModel = mongoose.model('DateModel', dateSchema)

export default DateModel