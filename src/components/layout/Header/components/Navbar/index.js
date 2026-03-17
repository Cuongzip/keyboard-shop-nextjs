import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";
import { CATEGORIES } from "@/lib/constants";

const cx = classNames.bind(styles);

export default function Navbar({ className }) {
    return (
        <nav className={cx(className, "nav")}>
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
                                        className={cx("productDropdownLink")}
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
    );
}
