import dbConnect from "@/lib/mongodb";
import { Banner } from "@/models";

export async function GET() {
    try {
        await dbConnect();
        const banners = await Banner.find({});
        return Response.json({ banners }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ message: "Server error" }, { status: 500 });
    }
}
