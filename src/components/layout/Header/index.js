"use client";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./Header.module.css";
import { WrapSidebar } from "@/components";
import { Search } from "./components";
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
            <WrapSidebar>
                <WrapSidebar.Trigger>
                    <button className={cx("triggerSidebar")}>
                        <i className="fi fi-br-menu-burger"></i>
                    </button>
                </WrapSidebar.Trigger>
                <WrapSidebar.Sidebar>
                    <div className={cx("sidebar")}>
                        <div className={cx("sidebarSearch")}>
                            <label htmlFor="search">
                                <i className="fi fi-br-search"></i>
                            </label>
                            <input
                                id="search"
                                name="search"
                                placeholder="Tìm kiếm sản phẩm"
                            />
                        </div>

                        <nav className={cx("sidebarNav", "mt-2")}>
                            <ul className={cx("sidebarNavList")}>
                                <li>
                                    <details className={cx("sidebarDetails")}>
                                        <summary
                                            className={cx(
                                                "sidebarDetailsTrigger",
                                            )}
                                        >
                                            <span>Sản phẩm</span>

                                            <i
                                                className={cx(
                                                    "angelDown",
                                                    "angle-down fi fi-br-angle-small-down",
                                                )}
                                            ></i>
                                            <i
                                                className={cx(
                                                    "angelUp",
                                                    "angle-up fi fi-br-angle-small-up",
                                                )}
                                            ></i>
                                        </summary>
                                        <ul
                                            className={cx(
                                                "sidebarDetailsContent",
                                            )}
                                        >
                                            {CATEGORIES.map(
                                                (category, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Link
                                                                className={cx(
                                                                    "sidebarLink",
                                                                )}
                                                                href={`/products?type=${category.name}`}
                                                            >
                                                                {category.label}
                                                            </Link>
                                                        </li>
                                                    );
                                                },
                                            )}
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <Link
                                        className={cx("sidebarLink")}
                                        href="/"
                                    >
                                        Bộ sưu tập
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={cx("sidebarLink")}
                                        href="/"
                                    >
                                        Hướng dẫn
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <Link className={cx("sidebarTail")} href="/sign-up">
                            <div className={cx("sidebarUser")}>
                                <i className="fi fi-rr-circle-user"></i>
                                <span>Đăng ký / Đăng nhập</span>
                            </div>
                            <div className={cx("sidebarSetting")}>
                                <i className="fi fi-sr-settings"></i>
                            </div>
                        </Link>
                    </div>
                </WrapSidebar.Sidebar>
            </WrapSidebar>

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
                    <li className={cx("navItem")}>
                        <div className={cx("navLink", "dropdownWrap")}>
                            <span>Sản phẩm</span>
                            <i className="fi fi-br-angle-small-down"></i>
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
                        </div>
                    </li>
                    <li className={cx("navItem")}>
                        <Link className={cx("navLink")} href="/">
                            Bộ sưu tập
                        </Link>
                    </li>
                    <li className={cx("navItem")}>
                        <Link className={cx("navLink")} href="/">
                            Hướng dẫn
                        </Link>
                    </li>
                </ul>
            </nav>

            <Search />

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
                            <div>
                                <Link
                                    className={cx("cartDropdownLink")}
                                    href="/"
                                >
                                    <div className={cx("productSmall")}>
                                        <div className={cx("productSmallLeft")}>
                                            <div
                                                className={cx(
                                                    "productSmallImage",
                                                )}
                                            >
                                                <Image
                                                    src="/images/keyboards/AM-RGB-65-R1.5/1.webp"
                                                    alt="keyboard"
                                                    fill
                                                />
                                            </div>
                                            <span
                                                className={cx(
                                                    "productSmallName",
                                                )}
                                            >
                                                AM RGB 65 R1.5
                                            </span>
                                        </div>
                                        <span
                                            className={cx("productSmallPrice")}
                                        >
                                            1.000.000đ
                                        </span>
                                    </div>
                                </Link>
                            </div>
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
                    <Link href="/sign-up" className={cx("actionIcon")}>
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
