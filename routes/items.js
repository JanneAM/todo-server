import express from 'express';

import { getItems, createItem, checkItemDone, deleteItem } from '../controllers/items.js';

const router = express.Router();

router.get('/', getItems);
router.post('/', createItem);
router.patch('/:id', checkItemDone);
router.delete('/:id', deleteItem);

export default router;
