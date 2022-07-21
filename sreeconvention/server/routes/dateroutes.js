import express from 'express'
import {getDates} from '../controllers/date.js'


//, createDate, updateDate, deleteDate
const router = express.Router()
router.get('/', getDates)
// router.post('/', createDate)
// router.patch('/:id', updateDate)
// router.delete('/:id', deleteDate)

export default router