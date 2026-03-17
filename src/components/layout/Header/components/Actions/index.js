import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

import styles from "./Actions.module.css";

const cx = classNames.bind(styles);

export default function Actions() {
    return (
        <div className={cx("actions")}>
            <div className={cx("action", "dropdownWrap")}>
                <Link href="/cart" className={cx("actionIcon")}>
                    <span className={cx("actionBadge", "center")}>2</span>
                    <i className="fi fi-rr-shopping-cart"></i>
                </Link>
                <div className={cx("dropdown", "cartDropdown")}>
                    <h3 className={cx("cartDropdownHead")}>
                        Sản phẩm mới thêm
                    </h3>
                    <div className={cx("cartDropdownList")}>
                        <Link
                            className={cx("cartDropdownLink")}
                            href="/products"
                        >
                            <div className={cx("productSmall")}>
                                <div className={cx("productSmallLeft")}>
                                    <div className={cx("productSmallImage")}>
                                        <Image
                                            src="/images/keyboards/am-rgb-65-r1-5/1.webp"
                                            alt="keyboard"
                                            fill
                                        />
                                    </div>
                                    <span className={cx("productSmallName")}>
                                        AM RGB 65 R1.5
                                    </span>
                                </div>
                                <span className={cx("productSmallPrice")}>
                                    1.000.000đ
                                </span>
                            </div>
                        </Link>
                        <Link
                            className={cx("cartDropdownLink")}
                            href="/products"
                        >
                            <div className={cx("productSmall")}>
                                <div className={cx("productSmallLeft")}>
                                    <div className={cx("productSmallImage")}>
                                        <Image
                                            src="/images/keyboards/am-rgb-65-r1-5/1.webp"
                                            alt="keyboard"
                                            fill
                                        />
                                    </div>
                                    <span className={cx("productSmallName")}>
                                        AM RGB 65 R1.5
                                    </span>
                                </div>
                                <span className={cx("productSmallPrice")}>
                                    1.000.000đ
                                </span>
                            </div>
                        </Link>
                        <Link
                            className={cx("cartDropdownLink")}
                            href="/products"
                        >
                            <div className={cx("productSmall")}>
                                <div className={cx("productSmallLeft")}>
                                    <div className={cx("productSmallImage")}>
                                        <Image
                                            src="/images/keyboards/am-rgb-65-r1-5/1.webp"
                                            alt="keyboard"
                                            fill
                                        />
                                    </div>
                                    <span className={cx("productSmallName")}>
                                        AM RGB 65 R1.5
                                    </span>
                                </div>
                                <span className={cx("productSmallPrice")}>
                                    1.000.000đ
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className={cx("cartDropdownTail")}>
                        <span>Tổng 4 sản phẩm</span>
                        <Link href="/cart">
                            <button className={cx("button")}>
                                <span>Giỏ hàng</span>
                                <i className="fi fi-rr-cart-shopping-fast"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cx("action", "actionUser", "dropdownWrap")}>
                <Link href="/auth/sign-up" className={cx("actionIcon")}>
                    <i className="fi fi-rr-circle-user"></i>
                </Link>
                <ul className={cx("dropdown", "userDropdown")}>
                    <li className={cx("userDropdownHead")}>
                        <i className="fi fi-rr-circle-user"></i>
                        <span className="ms-1">user@gmail.com</span>
                    </li>
                    <div className={cx("userDropdownLine")}></div>
                    <li>
                        <Link
                            className={cx("userDropdownLink")}
                            href="/profile"
                        >
                            Hồ sơ
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={cx("userDropdownLink")}
                            href="/setting"
                        >
                            Cài đặt
                        </Link>
                    </li>
                    <li>
                        <Link className={cx("userDropdownLink")} href="/logout">
                            Đăng xuất
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
