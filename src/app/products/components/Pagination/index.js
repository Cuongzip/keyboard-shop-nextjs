import classNames from "classnames/bind";
import Link from "next/link";

import styles from "./Pagination.module.css";

const cx = classNames.bind(styles);

export default function Pagination() {
    return (
        <div className={cx("pagination")}>
            <button className={cx("btn", "prev")}>
                <i className="fi fi-br-angle-small-left"></i>
            </button>

            <ul className={cx("list")}>
                <li>
                    <Link href="" className={cx("link", "active")}>
                        1
                    </Link>
                </li>

                <li>
                    <Link href="" className={cx("link")}>
                        2
                    </Link>
                </li>

                <li>
                    <span className={cx("link")}>...</span>
                </li>

                <li>
                    <Link href="" className={cx("link")}>
                        10
                    </Link>
                </li>
            </ul>

            <button className={cx("btn", "next")}>
                <i className="fi fi-sr-angle-small-right"></i>
            </button>
        </div>
    );
}
