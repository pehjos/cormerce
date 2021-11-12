
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    product_name: String,
    product_desc: String,
    product_brand: String,
    product_title: String,
    product_price: String,
    product_percentage: String,
    product_fees: String,
    product_stock: String,
    product_userId: String,
    image: String,
    ptoduct__id: String,
    createdAt: {
    type: Date,
    default: new Date(),
    },
 
})
var Cart = mongoose.model('Cart', postSchema);
export default Cart;
