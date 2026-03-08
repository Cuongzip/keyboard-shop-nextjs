import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        label: {
            type: String,
            required: true,
        },
        subTitle: {
            type: String,
        },
        src: {
            type: String,
            required: true,
        },
        order: {
            type: Number,
            default: 0,
        },
        active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.models.Banner || mongoose.model("Banner", bannerSchema);
