import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

import styles from "./Product.module.css";
import formattedPrice from "@/lib/formatPrice";

const cx = classNames.bind(styles);

export default function Product({ data, width = "auto" }) {
    return (
        <div className={cx("product")} style={{ width }}>
            <Link href={`/products/${data.slug}`}>
                <div className={cx("images")}>
                    <Image
                        src={data.images[0]}
                        alt="product 1"
                        width={300}
                        height={300}
                    />
                    <Image
                        src={data.images[1]}
                        alt="product 2"
                        width={300}
                        height={300}
                    />
                </div>
                <div className={cx("badge")}>
                    <i className="fi fi-rs-heart"></i>
                </div>
                <h3 className={cx("title")}>{data.name}</h3>
            </Link>
            <span className={cx("subtitle")}>{data.subtitle}</span>
            <div className={cx("price")}>
                <span className={cx("sale-price", "me-1")}>
                    {formattedPrice(data.price)}
                </span>
                <span className={cx("origin-price")}>
                    {formattedPrice(data.originalPrice)}
                </span>
            </div>
            <Link href={`/products/${data.slug}`}>
                <button className={cx("button")}>
                    <i className="fi fi-rr-arrow-small-right"></i>
                </button>
            </Link>
        </div>
    );
}
