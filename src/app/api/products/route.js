import dbConnect from "@/lib/mongodb";
import { Product } from "@/models";

export async function GET(req) {
    try {
        await dbConnect();

        const { searchParams } = new URL(req.url);

        const featured = searchParams.get("featured");
        const type = searchParams.get("type");
        const keyword = searchParams.get("keyword");

        let filter = {};

        if (type) {
            filter.type = type;
        }

        if (keyword) {
            filter.name = { $regex: keyword, $options: "i" };
        }
        if (featured) {
            filter.featured = featured === "true";
        }

        const products = await Product.find(filter).lean();

        return Response.json({ products }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ message: "Server error" }, { status: 500 });
    }
}
