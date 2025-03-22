const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        products: [
            {
                productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
                quantity: { type: Number, required: true },
            },
        ],
        totalAmount: { type: Number, required: true },
        customerName: { type: String, required: true },
        customerEmail: { type: String, required: true },
        customerAddress: { type: String, required: true },
        status: { type: String, enum: ["pending", "completed", "cancelled"], default: "pending" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
