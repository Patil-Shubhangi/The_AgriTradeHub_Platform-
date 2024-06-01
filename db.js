const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/farmer_data");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function() {
    console.log("Connected to MongoDB database");
});

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number, // <-- Change to Number type
        required: true,
        min: 0,
        max: 5,
    },
    reviews: {
        type: Number,
        required: true,
    },
    availability: {
        type: String,
        enum: ["In Stock", "Out of Stock"],
        default: "In Stock",
        required: true,
    },
    high: {
        type: Number,
        required: true,
    },
    low: {
        type: Number,
        required: true,
    },
    sowingmonths: {
        type: String,
        required: true,
    },
    yield: {
        type: String,
        required: true,
    },
});
const Product = mongoose.model("Product", productSchema);

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmpassword: String,
});
const Users = mongoose.model("Users", userSchema);

const orderSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    quantity: { type: String, required: true },
    quality: { type: String, required: true },
    shippingAddress: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    deliveryDate: { type: String, required: true },
});
const Orders = mongoose.model("Orders", orderSchema);

module.exports = {
    Product: Product,
    Users: Users,
    Orders: Orders,
};