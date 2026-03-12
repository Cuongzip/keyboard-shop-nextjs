import fetcher from "@/lib/fetcher ";

export async function getProducts(queryString = "") {
    try {
        const { products } = await fetcher(`products?${queryString}`);
        return products;
    } catch (error) {
        console.log(error);
    }
}
export async function getProduct(slug) {
    try {
        const { product } = await fetcher(`/products/${slug}`);
        return product;
    } catch (error) {
        console.log(error);
    }
}
