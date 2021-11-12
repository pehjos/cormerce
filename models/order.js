
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    product_name: [String],
    product_desc: String,
    customer_delivery_option: String,
    product_title: String,
    product_price: [String],
    product_percentage: String,
    product_fees: String,
    customer_region: String,
    product_userId: String,
    image: String,
    customer_district: String,
    customer_adress: String,
    customer_pnone: String,
    userId: String,
    userName: String,
    userEmail: String,
    ptoduct__id: String,
    createdAt: {
    type: Date,
    default: new Date(),
    },
})
var Order = mongoose.model('Order', postSchema);
export default Order;
