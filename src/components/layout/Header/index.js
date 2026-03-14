"use client";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./Header.module.css";
import { Search, Sidebar } from "./components";
import { CATEGORIES } from "@/lib/constants";

const cx = classNames.bind(styles);

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) return setIsScrolled(true);
            setIsScrolled(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    return (
        <header
            className={cx("container", "header", {
                boxShadow: isScrolled,
            })}
        >
            <Sidebar />
            <Link href="/">
                <Image
                    className={cx("logo")}
                    src="/images/logos/light-mode-no-label.webp"
                    alt="logo"
                    width={372}
                    height={272}
                />
            </Link>
            <nav className={cx("nav")}>
                <ul className={cx("navList")}>
                    <li className={cx("navItem", "dropdownWrap")}>
                        <Link className={cx("navLink")} href="/products">
                            <span>Sản phẩm</span>
                            <i className="fi fi-br-angle-small-down"></i>
                        </Link>
                        <ul className={cx("dropdown", "productDropdown")}>
                            {CATEGORIES.map((category, index) => {
                                return (
                                    <li key={index}>
                                        <Link
                                            className={cx(
                                                "productDropdownLink",
                                            )}
                                            href={`products?type=${category.name}`}
                                        >
                                            <Image
                                                src={`/images/icons/${category.name}.png`}
                                                alt="icon"
                                                width={30}
                                                height={30}
                                            />
                                            <span>{category.label}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                    <li className={cx("navItem")}>
                        <Link className={cx("navLink")} href="/album">
                            Bộ sưu tập
                        </Link>
                    </li>
                    <li className={cx("navItem")}>
                        <Link className={cx("navLink")} href="/tutorial">
                            Hướng dẫn
                        </Link>
                    </li>
                </ul>
            </nav>

            <Search className={cx("search")} />

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
                                        <div
                                            className={cx("productSmallImage")}
                                        >
                                            <Image
                                                src="/images/keyboards/am-rgb-65-r1-5/1.webp"
                                                alt="keyboard"
                                                fill
                                            />
                                        </div>
                                        <span
                                            className={cx("productSmallName")}
                                        >
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
                                        <div
                                            className={cx("productSmallImage")}
                                        >
                                            <Image
                                                src="/images/keyboards/am-rgb-65-r1-5/1.webp"
                                                alt="keyboard"
                                                fill
                                            />
                                        </div>
                                        <span
                                            className={cx("productSmallName")}
                                        >
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
                                        <div
                                            className={cx("productSmallImage")}
                                        >
                                            <Image
                                                src="/images/keyboards/am-rgb-65-r1-5/1.webp"
                                                alt="keyboard"
                                                fill
                                            />
                                        </div>
                                        <span
                                            className={cx("productSmallName")}
                                        >
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
                            <Link
                                className={cx("userDropdownLink")}
                                href="/logout"
                            >
                                Đăng xuất
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
