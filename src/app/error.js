"use client";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import styles from "./error.module.css";

const cx = classNames.bind(styles);
export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("card")}>
                <Image
                    src="/images/icons/error.png"
                    alt="error icon"
                    height={200}
                    width={200}
                />

                <h2 className={cx("title")}>Đã xảy ra lỗi</h2>

                <p className={cx("desc")}>
                    {error?.message ||
                        "Hệ thống đang bận, vui lòng thử lại sau."}
                </p>

                <div className={cx("actions")}>
                    <button className={cx("button")} onClick={() => reset()}>
                        Thử lại
                    </button>

                    <Link href="/" className={cx("button", "buttonOutline")}>
                        Về trang chủ
                    </Link>
                </div>
            </div>
        </div>
    );
}
