import fetcher from "@/lib/fetcher ";

export async function getBanners() {
    const { banners } = await fetcher("banners");
    return banners;
}
