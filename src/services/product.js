import fetcher from "@/lib/fetcher ";
import objectToQueryString from "@/lib/objectToQueryString";

export async function getProducts(params = {}) {
    const queryString = objectToQueryString(params);
    const data = await fetcher(`products?${queryString}`);
    return data;
}
export async function getProduct(slug) {
    const { product } = await fetcher(`/products/${slug}`);
    return product;
}
