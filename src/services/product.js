import fetcher from "@/lib/fetcher ";

export async function getProducts() {
    try {
        const { products } = await fetcher("products");
        return products;
    } catch (error) {
        console.log(error);
    }
}
