import fetcher from "@/lib/fetcher ";

export async function getBanners() {
    try {
        const { banners } = await fetcher("banners");
        return banners;
    } catch (error) {
        console.log(error);
    }
}
