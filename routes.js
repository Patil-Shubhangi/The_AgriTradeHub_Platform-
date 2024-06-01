// const { Product, Orders, Users } = require("./db");
// const bcrypt = require("bcrypt");

// module.exports = function(app) {
//     app.get("/", async(req, res) => {
//         try {
//             const products = await Product.find();
//             res.json(products);
//         } catch (err) {
//             res.status(500).json({ error: err.message });
//         }
//     });

//     app.post("/", async(req, res) => {
//         const {
//             image,
//             name,
//             price,
//             high,
//             low,
//             description,
//             rating,
//             reviews,
//             availability,
//             sowingmonths,
//             yield,
//             // shippingInformation,
//         } = req.body;

//         const newProduct = new Product({
//             image,
//             name,
//             price,
//             high,
//             low,
//             description,
//             rating,
//             reviews,
//             availability,
//             sowingmonths,
//             yield,
//             // shippingInformation,
//         });

//         try {
//             const savedProduct = await newProduct.save();
//             res.json(savedProduct);
//         } catch (err) {
//             res.status(500).send("Error : " + err);
//         }
//     });

//     app.post("/signUp", async(req, res) => {
//         try {
//             const { firstName, lastName, email, password } = req.body;
//             const existingUser = await Users.findOne({ email });
//             if (existingUser) {
//                 return res
//                     .status(400)
//                     .json({ message: "User with this email already exists" });
//             }
//             console.log("hello");

//             const hashedPassword = await bcrypt.hash(password, 10);

//             const newUser = new Users({
//                 firstName,
//                 lastName,
//                 email,
//                 password: hashedPassword,
//                 confirmPassword,
//             });

//             await newUser.save();
//             res.status(200).json({ message: "User registered successfully" });
//         } catch (error) {
//             res
//                 .status(500)
//                 .json({ message: "Failed to register user", error: error.message });
//         }
//     });

//     app.post("/login", async(req, res) => {
//         try {
//             const { email, password } = req.body;
//             const user = await Users.findOne({ email });
//             if (!user) {
//                 return res.status(401).json({ message: "Invalid email or password" });
//             }
//             const passwordMatch = await bcrypt.compare(password, user.password);

//             if (!passwordMatch) {
//                 return res.status(401).json({ message: "Invalid email or password" });
//             }

//             res.status(200).json({ message: "User logged in successfully" });
//         } catch (error) {
//             res
//                 .status(500)
//                 .json({ message: "Failed to login user", error: error.message });
//         }
//     });

//     // Function to send notification
//     async function sendNotification(orderDetails) {
//         try {
//             const messageBody = New `order received:\n\nProduct: ${orderDetails.productName}\nQuantity: ${orderDetails.quantity}\nQuality: ${orderDetails.quality}\nShipping Address: ${orderDetails.shippingAddress}\nPhone Number: ${orderDetails.phoneNumber}\nDelivery Date: ${orderDetails.deliveryDate}`;
//             await client.messages.create({
//                 body: messageBody,
//                 from: twilioPhoneNumber,
//                 to: [
//                     "+916360661034",
//                     "+918088802427",
//                     "+918867660168",
//                     "+919421455234",
//                 ],
//             });
//             console.log("Notification sent successfully");
//         } catch (error) {
//             console.error("Error sending notification:", error);
//         }
//     }

//     app.post("/submitOrder", async(req, res) => {
//         try {
//             const {
//                 productName,
//                 quantity,
//                 quality,
//                 shippingAddress,
//                 phoneNumber,
//                 deliveryDate,
//             } = req.body;

//             // Create a new order document
//             const newOrder = new Orders({
//                 productName,
//                 quantity,
//                 quality,
//                 shippingAddress,
//                 phoneNumber,
//                 deliveryDate,
//             });

//             // Save the order to the database
//             await newOrder.save();

//             // Send notification
//             await sendNotification(req.body);

//             // Respond with a success message
//             res.status(200).json({ message: "Order submitted successfully" });
//         } catch (error) {
//             // Handle errors
//             console.error("Error:", error);
//             res
//                 .status(500)
//                 .json({ message: "Failed to submit order", error: error.message });
//         }
//     });

//     app.get("/orders", async(req, res) => {
//         try {
//             const orders = await Orders.find();
//             res.status(200).json(orders);
//         } catch (error) {
//             console.error("error:", error);
//             res.status(404),
//                 json({ message: "failed to fetch the orders", error: error.message });
//         }
//     });
// };

// module.exports = function(app) {
//     app.get("/", async(req, res) => {
//         try {
//             const products = await Product.find();
//             res.json(products);
//         } catch (err) {
//             res.status(500).json({ error: err.message });
//         }
//     });

//     app.post("/", async(req, res) => {
//         const {
//             image,
//             name,
//             price,
//             high,
//             low,
//             description,
//             rating,
//             reviews,
//             availability,
//             sowingmonths,
//             yield,
//             // shippingInformation,
//         } = req.body;

//         const newProduct = new Product({
//             image,
//             name,
//             price,
//             high,
//             low,
//             description,
//             rating,
//             reviews,
//             availability,
//             sowingmonths,
//             yield,
//             // shippingInformation,
//         });

//         try {
//             const savedProduct = await newProduct.save();
//             res.json(savedProduct);
//         } catch (err) {
//             res.status(500).send("Error : " + err);
//         }
//     });

//     app.post("/signUp", async(req, res) => {
//         try {
//             const { firstName, lastName, email, password, confirmPassword } =
//             req.body;
//             const existingUser = await Users.findOne({ email });
//             if (existingUser) {
//                 return res
//                     .status(400)
//                     .json({ message: "User with this email already exists" });
//             }
//             console.log("hello");

//             const hashedPassword = await bcrypt.hash(password, 10);

//             const newUser = new Users({
//                 firstName,
//                 lastName,
//                 email,
//                 password: hashedPassword,
//                 confirmPassword,
//             });

//             await newUser.save();
//             res.status(200).json({ message: "User registered successfully" });
//         } catch (error) {
//             res
//                 .status(500)
//                 .json({ message: "Failed to register user", error: error.message });
//         }
//     });

//     app.post("/login", async(req, res) => {
//         try {
//             const { email, password } = req.body;
//             const user = await Users.findOne({ email });
//             if (!user) {
//                 return res.status(401).json({ message: "Invalid email or password" });
//             }
//             const passwordMatch = await bcrypt.compare(password, user.password);

//             if (!passwordMatch) {
//                 return res.status(401).json({ message: "Invalid email or password" });
//             }

//             res.status(200).json({ message: "User logged in successfully" });
//         } catch (error) {
//             res
//                 .status(500)
//                 .json({ message: "Failed to login user", error: error.message });
//         }
//     });

//     // Function to send notification
//     async function sendNotification(orderDetails) {
//         try {
//             const messageBody = New `order received:\n\nProduct: ${orderDetails.productName}\nQuantity: ${orderDetails.quantity}\nQuality: ${orderDetails.quality}\nShipping Address: ${orderDetails.shippingAddress}\nPhone Number: ${orderDetails.phoneNumber}\nDelivery Date: ${orderDetails.deliveryDate}`;
//             await client.messages.create({
//                 body: messageBody,
//                 from: twilioPhoneNumber,
//                 to: [
//                     "+916360661034",
//                     "+918088802427",
//                     "+918867660168",
//                     "+919421455234",
//                 ],
//             });
//             console.log("Notification sent successfully");
//         } catch (error) {
//             console.error("Error sending notification:", error);
//         }
//     }

//     app.post("/submitOrder", async(req, res) => {
//         try {
//             const {
//                 productName,
//                 quantity,
//                 quality,
//                 shippingAddress,
//                 phoneNumber,
//                 deliveryDate,
//             } = req.body;

//             // Create a new order document
//             const newOrder = new Orders({
//                 productName,
//                 quantity,
//                 quality,
//                 shippingAddress,
//                 phoneNumber,
//                 deliveryDate,
//             });

//             // Save the order to the database
//             await newOrder.save();

//             // Send notification
//             await sendNotification(req.body);

//             // Respond with a success message
//             res.status(200).json({ message: "Order submitted successfully" });
//         } catch (error) {
//             // Handle errors
//             console.error("Error:", error);
//             res
//                 .status(500)
//                 .json({ message: "Failed to submit order", error: error.message });
//         }
//     });

const { Product, Orders, Users } = require("./db");
const bcrypt = require("bcrypt");
const twilio = require("twilio");

const accountSid = "AC8d8a7ddf73027f2f1636b54aafc3d423";
const authToken = "06163bf6c97330fb05b9f77ce1ab8c29";
const twilioPhoneNumber = "+19715992579";
const leaderPhoneNumber = "+918088802427";

const client = twilio(accountSid, authToken);

async function sendNotification(orderDetails) {
    try {
        const messageBody = `New order received:\n\nProduct: ${orderDetails.productName}\nQuantity: ${orderDetails.quantity}\nQuality: ${orderDetails.quality}\nShipping Address: ${orderDetails.shippingAddress}\nPhone Number: ${orderDetails.phoneNumber}\nDelivery Date: ${orderDetails.deliveryDate}`;

        await client.messages.create({
            body: messageBody,
            from: twilioPhoneNumber,
            to: leaderPhoneNumber,
        });

        console.log("Notification sent successfully");
    } catch (error) {
        console.error("Error sending notification:", error);
    }
}

module.exports = function(app) {
    app.get("/", async(req, res) => {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    app.post("/", async(req, res) => {
        const {
            image,
            name,
            price,
            high,
            low,
            description,
            rating,
            reviews,
            availability,
            sowingmonths,
            yield,
        } = req.body;

        const newProduct = new Product({
            image,
            name,
            price,
            high,
            low,
            description,
            rating,
            reviews,
            availability,
            sowingmonths,
            yield,
        });

        try {
            const savedProduct = await newProduct.save();
            res.json(savedProduct);
        } catch (err) {
            res.status(500).send("Error : " + err);
        }
    });

    app.post("/signUp", async(req, res) => {
        try {
            const { firstName, lastName, email, password } = req.body;
            const existingUser = await Users.findOne({ email });
            if (existingUser) {
                return res
                    .status(400)
                    .json({ message: "User with this email already exists" });
            }
            console.log("hello");

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new Users({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                confirmPassword: hashedPassword,
            });

            await newUser.save();
            res.status(200).json({ message: "User registered successfully" });
        } catch (error) {
            res
                .status(500)
                .json({ message: "Failed to register user", error: error.message });
        }
    });

    app.post("/login", async(req, res) => {
        try {
            const { email, password } = req.body;
            const user = await Users.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: "Invalid email or password" });
            }
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ message: "Invalid email or password" });
            }

            res.status(200).json({ message: "User logged in successfully" });
        } catch (error) {
            res
                .status(500)
                .json({ message: "Failed to login user", error: error.message });
        }
    });

    app.post("/submitOrder", async(req, res) => {
        const {
            productName,
            quantity,
            quality,
            shippingAddress,
            phoneNumber,
            deliveryDate,
        } = req.body;

        if (!productName ||
            !quantity ||
            !quality ||
            !shippingAddress ||
            !phoneNumber ||
            !deliveryDate
        ) {
            return res.status(400).json({
                message: "All fields are required",
                errors: {
                    productName: !productName ? "Product name is required" : undefined,
                    quantity: !quantity ? "Quantity is required" : undefined,
                    quality: !quality ? "Quality is required" : undefined,
                    shippingAddress: !shippingAddress ?
                        "Shipping address is required" :
                        undefined,
                    phoneNumber: !phoneNumber ? "Phone number is required" : undefined,
                    deliveryDate: !deliveryDate ? "Delivery date is required" : undefined,
                },
            });
        }

        try {
            const newOrder = new Orders({
                productName,
                quantity,
                quality,
                shippingAddress,
                phoneNumber,
                deliveryDate,
            });

            await newOrder.save();

            await sendNotification(req.body);

            res.status(200).json({ message: "Order submitted successfully" });
        } catch (error) {
            console.error("Error:", error);
            res
                .status(500)
                .json({ message: "Failed to submit order", error: error.message });
        }
    });

    app.get("/orders", async(req, res) => {
        try {
            const orders = await Orders.find();
            res.status(200).json(orders);
        } catch (error) {
            console.error("Error:", error);
            res
                .status(404)
                .json({ message: "Failed to fetch the orders", error: error.message });
        }
    });
};