import { getBanners, getProducts } from "@/services";

import { Banner } from "./components";
export default async function Home() {
    const banners = await getBanners();
    return (
        <>
            <Banner data={banners} />
        </>
    );
}
