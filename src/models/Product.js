import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        type: {
            type: String,
            required: true,
            enum: ["keyboard", "keycap", "switch", "accessory"],
        },
        subtitle: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
        },
        originalPrice: {
            type: Number,
        },
        featured: {
            type: Boolean,
            default: false,
        },
        stock: {
            type: Number,
            default: 0,
        },
        images: [
            {
                type: String,
            },
        ],
    },
    {
        timestamps: true,
    },
);

export default mongoose.models.Product ||
    mongoose.model("Product", ProductSchema);
