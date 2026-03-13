import classNames from "classnames/bind";

import styles from "./products.module.css";
import { Reveal, Product, WrapSidebar } from "@/components";
import { Pagination, FilterHead } from "./components";
import { getProducts } from "@/services";

const cx = classNames.bind(styles);

export const dynamic = "force-dynamic";

export default async function Products() {
    const products = await getProducts();
    return (
        <>
            <Reveal>
                <h1 className={cx("title", "my-3")}>Keyboard</h1>
            </Reveal>

            <section className={cx("products")}>
                <FilterHead />

                <div className={cx("box", "mt-3")}>
                    {products.map((product, index) => {
                        return <Product key={index} data={product} />;
                    })}
                </div>
                <Pagination />
            </section>
        </>
    );
}
