import dbConnect from "@/lib/mongodb";
import { Product } from "@/models";

export async function GET() {
    try {
        await dbConnect();
        const products = await Product.find({});
        return Response.json({ products }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ message: "Server error" }, { status: 500 });
    }
}
