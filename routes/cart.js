import express from 'express';

import { getPosts, getPost, createPost,   deletePost } from '../controllers/cart.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.delete('/:id',  deletePost);
router.get('/:id', getPost);
router.get('/', getPosts);
router.post('/', createPost);



export default router;