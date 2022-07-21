import express from 'express'
import mongoose from 'mongoose'

import DateModel from '../models/datemodel.js'


export const getDates = async (req, res) => {
    
    try {
        const Dates = await DateModel.find().select({booked :1});
        res.json(Dates);
        console.log(Dates)
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}