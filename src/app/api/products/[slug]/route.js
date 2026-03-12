import dbConnect from "@/lib/mongodb";
import { Product } from "@/models";

export async function GET(req, { params }) {
    try {
        await dbConnect();

        const { slug } = await params;

        const product = (await Product.findOne({ slug }).lean()) || [];
        return Response.json({ product }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ message: "Server error" }, { status: 500 });
    }
}
