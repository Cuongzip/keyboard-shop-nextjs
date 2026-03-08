import { getBanners, getProducts } from "@/services";
export default async function Home() {
    const banners = await getBanners();
    const products = await getProducts();

    console.log(products);
    return <>Home</>;
}
