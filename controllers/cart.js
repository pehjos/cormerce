import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/cart.js';

const router = express.Router();

export const getPosts = async (req, res) => {
    const { page } = req.query;
    
    try {
        const LIMIT = 1000;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await PostMessage.countDocuments({});
        const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}



export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const {
        
        product_name,
        product_desc,
        product_brand,
        product_title,
        product_price,
        product_percentage,
        product_fees,
        product_stock,
        product_userId,
        image,
        ptoduct__id,
     } = req.body;

    const newPostMessage = new PostMessage({ 
        product_name,
        product_desc,
        product_brand,
        product_title,
        product_price,
        product_percentage,
        product_fees,
        product_stock,
        product_userId,
        image,
        ptoduct__id })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}




export default router;