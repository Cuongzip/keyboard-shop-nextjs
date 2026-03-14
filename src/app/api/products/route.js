import dbConnect from "@/lib/mongodb";
import { Product } from "@/models";

export async function GET(req) {
    try {
        await dbConnect();

        const { searchParams } = new URL(req.url);

        const featured = searchParams.get("featured") || "";
        const type = searchParams.get("type") || "";
        const keyword = searchParams.get("keyword") || "";
        const page = Number(searchParams.get("page")) || 1;
        const limit = Number(searchParams.get("limit")) || 10;
        const sort = searchParams.get("sort") || "";

        const skip = (page - 1) * limit;
        let filter = {};
        let sortOption = {};

        if (type) {
            filter.type = type;
        }

        if (keyword) {
            filter.name = { $regex: keyword, $options: "i" };
        }
        if (featured) {
            filter.featured = featured === "true";
        }
        switch (sort) {
            case "price_asc":
                sortOption.price = 1;
                break;
            case "price_desc":
                sortOption.price = -1;
                break;
            default:
                sortOption.createdAt = -1;
        }
        const total = await Product.countDocuments(filter);

        const products = await Product.find(filter)
            .sort(sortOption)
            .skip(skip)
            .limit(limit)
            .lean();

        return Response.json(
            { products, total, totalPages: Math.ceil(total / limit), page },
            { status: 200 },
        );
    } catch (error) {
        console.error(error);
        return Response.json({ message: "Server error" }, { status: 500 });
    }
}
