import classNames from "classnames/bind";
import Link from "next/link";

import styles from "./not-found.module.css";
const cx = classNames.bind(styles);

export default function NotFound() {
    return (
        <div className={cx("wrapper")}>
            <h1 className={cx("code")}>404</h1>
            <h2 className={cx("title")}>Không tìm thấy trang</h2>
            <p className={cx("desc")}>
                Trang bạn yêu cầu không tồn tại hoặc đã bị xóa.
            </p>

            <Link href="/" className={cx("button")}>
                Về trang chủ
            </Link>
        </div>
    );
}
