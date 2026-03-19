import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getProduct, getProducts } from "@/services";
import { Reveal, Quantity, Carousel } from "@/components";
import { Tabs, Gallery } from "./components";
import formattedPrice from "@/lib/formatPrice";
import { CATEGORIES } from "@/lib/constants";
import styles from "./Detail.module.css";

const cx = classNames.bind(styles);

export default async function Detail({ params }) {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        notFound();
    }

    const { products } = await getProducts({ featured: "true" });
    const category = CATEGORIES.find(
        (category) => product.type === category.name,
    )?.label;

    return (
        <>
            <Reveal>
                <section className={cx("breadcrumb")}>
                    <Link href="/">Trang chủ</Link> /{" "}
                    <Link href={`/products?type=${product.type}`}>
                        {category}
                    </Link>{" "}
                    / <span>{product.name}</span>
                </section>
            </Reveal>
            <Reveal>
                <section className={cx("productDetail")}>
                    <Gallery data={product.images} />

                    <form className={cx("productDetailInfo")}>
                        <h3 className={cx("productName", "mb-1")}>
                            {product.name}
                        </h3>

                        <div className={cx("productStateBar", "mb-2")}>
                            <div className={cx("productEvaluate")}>
                                <div className={cx("productStars")}>
                                    <i className="fi fi-rs-star" />
                                    <i className="fi fi-ss-star" />
                                    <i className="fi fi-ss-star" />
                                    <i className="fi fi-ss-star" />
                                    <i className="fi fi-ss-star" />
                                </div>

                                <span>4.0</span>
                            </div>

                            <span className={cx("productSeparate", "mx-1")} />

                            <span className={cx("productReview")}>
                                2 reviews
                            </span>
                        </div>

                        <div
                            className={cx(
                                "productPrice",
                                "productPriceDetail",
                                "my-2",
                            )}
                        >
                            <span className={cx("productSalePrice", "me-1")}>
                                {formattedPrice(product.price)}
                            </span>

                            <span className={cx("productOriginPrice")}>
                                {formattedPrice(product.originalPrice)}
                            </span>
                        </div>
                        <div className={cx("productGroup", "my-2")}>
                            <div className={cx("productLabel")}>
                                <span>Chế độ kết nối :</span>{" "}
                                <span>3 mode</span>
                            </div>

                            <div
                                className={cx(
                                    "productOptions",
                                    "productOptionsBtn",
                                )}
                            >
                                <div className={cx("productOption", "center")}>
                                    <input
                                        id="3-mode"
                                        name="connect-mode"
                                        value="3-mode"
                                        data-option="3 mode"
                                        type="radio"
                                        defaultChecked
                                    />
                                    <label htmlFor="3-mode">3 mode</label>
                                </div>

                                <div className={cx("productOption", "center")}>
                                    <input
                                        id="1-mode"
                                        name="connect-mode"
                                        value="1-mode"
                                        data-option="1 mode"
                                        type="radio"
                                    />
                                    <label htmlFor="1-mode">1 mode</label>
                                </div>
                            </div>
                        </div>

                        <div className={cx("productGroup", "my-2")}>
                            <div className={cx("productLabel")}>
                                <span>Màu :</span> <span>Hồng</span>
                            </div>

                            <div
                                className={cx(
                                    "productOptions",
                                    "productOptionsColor",
                                )}
                            >
                                <div className={cx("productOption", "center")}>
                                    <input
                                        id="pink-color"
                                        name="color"
                                        value="pink"
                                        data-option="Hồng"
                                        data-index="1"
                                        type="radio"
                                        defaultChecked
                                    />

                                    <label htmlFor="pink-color">
                                        <Image
                                            src="/images/keyboards/80retros-gb65/pink.webp"
                                            alt="80Retros-GB65 pink"
                                            width={40}
                                            height={40}
                                        />
                                    </label>
                                </div>

                                <div className={cx("productOption", "center")}>
                                    <input
                                        id="warm-gray-color"
                                        name="color"
                                        value="warm-gray"
                                        data-option="Warm gray"
                                        data-index="0"
                                        type="radio"
                                    />

                                    <label htmlFor="warm-gray-color">
                                        <Image
                                            src="/images/keyboards/80retros-gb65/warm-gray.webp"
                                            alt="80Retros-GB65 warm gray"
                                            width={40}
                                            height={40}
                                        />
                                    </label>
                                </div>

                                <div className={cx("productOption", "center")}>
                                    <input
                                        id="cool-grey-color"
                                        name="color"
                                        value="cool-grey"
                                        data-option="Cool grey"
                                        data-index="3"
                                        type="radio"
                                    />

                                    <label htmlFor="cool-grey-color">
                                        <Image
                                            src="/images/keyboards/80retros-gb65/cool-grey.webp"
                                            alt="80Retros-GB65 cool grey"
                                            width={40}
                                            height={40}
                                        />
                                    </label>
                                </div>

                                <div className={cx("productOption", "center")}>
                                    <input
                                        id="black-color"
                                        name="color"
                                        value="black"
                                        data-option="Đen"
                                        data-index="4"
                                        type="radio"
                                    />

                                    <label htmlFor="black-color">
                                        <Image
                                            src="/images/keyboards/80retros-gb65/black.webp"
                                            alt="80Retros-GB65 black"
                                            width={40}
                                            height={40}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className={cx("productGroup", "my-2")}>
                            <div className={cx("productLabel")}>
                                <span>Tình trạng giao hàng:</span>{" "}
                                <span>In stock</span>
                            </div>

                            <div
                                className={cx(
                                    "productOptions",
                                    "productOptionsBtn",
                                )}
                            >
                                <div className={cx("productOption", "center")}>
                                    <input
                                        id="in-stock"
                                        name="shipping-status"
                                        value="in-stock"
                                        data-option="In stock"
                                        type="radio"
                                        defaultChecked
                                    />
                                    <label htmlFor="in-stock">In stock</label>
                                </div>

                                <div className={cx("productOption", "center")}>
                                    <input
                                        id="pre-order"
                                        name="shipping-status"
                                        value="pre-order"
                                        data-option="Pre-order"
                                        type="radio"
                                    />
                                    <label htmlFor="pre-order">Pre-order</label>
                                </div>
                            </div>
                        </div>

                        <div className={cx("productGroup", "productGroupRow")}>
                            <Quantity name="quantity" />
                            <button
                                className={cx(
                                    "addToCartBtn",
                                    "button",
                                    "buttonOutline",
                                )}
                            >
                                <span>Thêm vào giỏ hàng</span>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>

                        <button className={cx("buyNowBtn", "button", "mt-2")}>
                            <span>Mua ngay</span>
                            <i className="fa-solid fa-money-bill"></i>
                        </button>
                    </form>
                </section>
            </Reveal>
            <Tabs />
            <div className={cx("mt-3")}>
                <Reveal>
                    <h3 className={cx("title", "mb-3")}>SẢN PHẨM LIÊN QUAN</h3>
                </Reveal>
                <Carousel data={products} />
            </div>
        </>
    );
}
