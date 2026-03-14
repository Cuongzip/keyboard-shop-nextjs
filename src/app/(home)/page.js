import classNames from "classnames/bind";
import Link from "next/link";

import { getBanners, getProducts } from "@/services";
import { Banner, Gallery, Benefits, Articles } from "./components";
import { Carousel, Reveal } from "@/components";
import styles from "./Home.module.css";
import Loading from "../loading";

export const dynamic = "force-dynamic";

const cx = classNames.bind(styles);

export default async function Home() {
    const banners = await getBanners();
    const { products: keycaps } = await getProducts({
        type: "keycap",
    });
    const { products: switches } = await getProducts({
        type: "switch",
    });
    const { products: featured } = await getProducts({
        featured: "true",
    });
    console.log(switches);
    return (
        <>
            <Banner data={banners} />
            <section className={cx("keycaps")}>
                <Reveal>
                    <div className={cx("keycapsHead", "mb-2")}>
                        <h2 className={cx("title")}>Keycaps</h2>
                        <Link
                            className={cx("center")}
                            href="/products?type=keycap"
                        >
                            <span>Xem thêm</span>
                            <i className="fi fi-rr-arrow-small-right"></i>
                        </Link>
                    </div>
                </Reveal>
                <Carousel data={keycaps} />
            </section>
            <section className={cx("switches", "mt-3")}>
                <Reveal>
                    <div className={cx("switchesHead", "mb-2")}>
                        <h2 className={cx("title")}>Switches</h2>
                        <Link
                            className={cx("center")}
                            href="/products?type=switch"
                        >
                            <span>Xem thêm</span>
                            <i className="fi fi-rr-arrow-small-right"></i>
                        </Link>
                    </div>
                </Reveal>
                <Carousel data={switches} />
            </section>
            <section className={cx("featuredProducts")}>
                <div className={cx("mb-3 text-center")}>
                    <Reveal>
                        <h2 className={cx("title mb-3")}>Sản phẩm nổi bật</h2>
                    </Reveal>
                    <Reveal>
                        <span className={cx("featuredProductsSubtitle")}>
                            Tuyển chọn những sản phẩm được yêu thích nhất
                        </span>
                    </Reveal>
                </div>
                <Carousel data={featured} />
            </section>
            <Benefits />
            <Articles />

            <Gallery />
        </>
    );
}
