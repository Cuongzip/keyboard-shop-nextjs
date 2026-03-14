import Image from "next/image";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./EmptyProduct.module.css";

const cx = classNames.bind(styles);

export default function EmptyProduct() {
    return (
        <div className={cx("wrapper")}>
            <Image
                src="/images/icons/empty-product.png"
                alt="keyboard"
                width={420}
                height={220}
                className={cx("img")}
            />

            <h1 className={cx("title")}>Không có sản phẩm nào</h1>

            <p className={cx("desc")}>
                Danh mục này hiện chưa có sản phẩm. Xem tất cả sản phẩm .
            </p>

            <Link href="/products" className={cx("button")}>
                Xem tất cả
            </Link>
        </div>
    );
}
