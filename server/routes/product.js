import express from 'express'
import { create, list, listBy, remove, searchFilter, update  } from '../controllers/product.controller.js'

const router = express.Router()

router.post('/product', create)
router.get('/products/:count', list)
router.put('/product/:id', update)
router.delete('/product/:id', remove)
router.post('/productby', listBy)
router.post('/search/filter', searchFilter)


export default router