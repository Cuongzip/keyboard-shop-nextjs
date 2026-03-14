import classNames from "classnames/bind";

import styles from "./products.module.css";
import { Reveal, Product } from "@/components";
import { Pagination, FilterHead, EmptyProduct } from "./components";
import { getProducts } from "@/services";
import { CATEGORIES } from "@/lib/constants";

const cx = classNames.bind(styles);

export const dynamic = "force-dynamic";

export default async function Products({ searchParams }) {
    const params = await searchParams;
    const { products, totalPages, page } = await getProducts(params);
    const type = params.type || "";
    const title =
        CATEGORIES.find((category) => type === category.name)?.label ||
        "Sản phẩm";

    return (
        <>
            {products.length > 0 ? (
                <>
                    <Reveal>
                        <h1 className={cx("title", "my-3")}>{title}</h1>
                    </Reveal>
                    <section className={cx("products")}>
                        <FilterHead />

                        <div className={cx("box", "mt-3")}>
                            {products.map((product, index) => {
                                return (
                                    <Reveal key={index}>
                                        <Product data={product} />
                                    </Reveal>
                                );
                            })}
                        </div>
                        <Pagination totalPages={totalPages} page={page} />
                    </section>
                </>
            ) : (
                <EmptyProduct />
            )}
        </>
    );
}
