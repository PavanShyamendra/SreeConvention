import express from 'express'
import {getDates, createDate, updateDate, deleteDate, getDatesByUser} from '../controllers/date.js'

const router = express.Router()

router.get('/', getDates)
router.get('/user', getDatesByUser);
router.post('/', createDate)
router.patch('/:id', updateDate)
router.delete('/:id', deleteDate)

export default router