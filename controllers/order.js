import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/order.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
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
        customer_delivery_option,
        product_title,
        product_price,
        customer_region,
        customer_district,
        customer_adress,
        customer_pnone,
        product_fees,
        product_stock,
        product_userId,
        image,
        userId,
    userName,
    userEmail,
        ptoduct__id,
     } = req.body;

    const newPostMessage = new PostMessage({ 
        product_name,
        product_desc,
        customer_delivery_option,
        product_title,
        product_price,
        customer_region,
        product_fees,
        product_stock,
        product_userId,
        image,
        customer_district,
        customer_adress,
        customer_pnone,
        userId,
    userName,
    userEmail,
        ptoduct__id, })

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