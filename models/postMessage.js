
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
product_name: String,
product_desc: String,
product_brand: String,
product_title: String,
product_price: String,
product_percentage: String,
product_cancelprice: String,
product_status: String,
product_fees: String,
product_warranty: String,
product_stock: String,
product_size_variation:String,
product_cart: [String],
product_dimention: String,
product_weight: String,
product_seller: String,
product_seller_id: String,
product_customer: String,
product_seller_email: String,
product_counrty:String,
product_color:String,
product_seller_phone: String,
product_seller_comments: [String],
product_seller_adress: String,
tags: String,
image: String,
video: String,
category:String,
image:"",
image1:String,
image2:String,
image3:String,
image4:String,
ratings: {
type: Number,
default: 0,
},
createdAt: {
type: Date,
default: new Date(),
},
})
var PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;
