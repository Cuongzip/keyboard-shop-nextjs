import classNames from "classnames/bind";
import Link from "next/link";

import styles from "./Sidebar.module.css";
import { WrapSidebar } from "@/components";
import Search from "../Search";
import { CATEGORIES } from "@/lib/constants";

const cx = classNames.bind(styles);

export default function Sidebar() {
    return (
        <WrapSidebar>
            <WrapSidebar.Trigger>
                <button className={cx("trigger")}>
                    <i className="fi fi-br-menu-burger"></i>
                </button>
            </WrapSidebar.Trigger>
            <WrapSidebar.Sidebar>
                <div className={cx("sidebar")}>
                    <Search Link={WrapSidebar.Link} />

                    <nav className={cx("nav", "mt-2")}>
                        <ul className={cx("navList")}>
                            <li className={cx("navItem")}>
                                <WrapSidebar.Link
                                    href="/products"
                                    className={cx("link")}
                                >
                                    <span>Sản phẩm</span>
                                    <i className="angle-down fi fi-br-angle-small-down"></i>
                                </WrapSidebar.Link>

                                <ul className={cx("menu")}>
                                    {CATEGORIES.map((category, index) => {
                                        return (
                                            <li key={index}>
                                                <WrapSidebar.Link
                                                    className={cx("link")}
                                                    href={`/products?type=${category.name}`}
                                                >
                                                    {category.label}
                                                </WrapSidebar.Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                            <li>
                                <WrapSidebar.Link
                                    className={cx("link")}
                                    href="/album"
                                >
                                    Bộ sưu tập
                                </WrapSidebar.Link>
                            </li>
                            <li>
                                <WrapSidebar.Link
                                    className={cx("link")}
                                    href="/tutorial"
                                >
                                    Hướng dẫn
                                </WrapSidebar.Link>
                            </li>
                        </ul>
                    </nav>
                    <Link className={cx("tail")} href="/sign-up">
                        <div className={cx("user")}>
                            <i className="fi fi-rr-circle-user"></i>
                            <span>Đăng ký / Đăng nhập</span>
                        </div>
                        <div className={cx("setting")}>
                            <i className="fi fi-sr-settings"></i>
                        </div>
                    </Link>
                </div>
            </WrapSidebar.Sidebar>
        </WrapSidebar>
    );
}
