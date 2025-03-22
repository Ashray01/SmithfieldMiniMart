const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Get all orders (admin only)
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find().populate("products.productId");
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Place an order (guest checkout)
router.post("/", async (req, res) => {
    try {
        const { products, totalAmount, customerName, customerEmail, customerAddress } = req.body;
        const newOrder = new Order({ products, totalAmount, customerName, customerEmail, customerAddress });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update order status (admin only)
router.put("/:id", async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
