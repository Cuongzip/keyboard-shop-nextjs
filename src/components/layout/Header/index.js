"use client";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./Header.module.css";
import { Search, Sidebar, Navbar, Actions } from "./components";

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
            <Navbar className={cx("nav")} />

            <Search className={cx("search")} />

            <Actions />
        </header>
    );
}
