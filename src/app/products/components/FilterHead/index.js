"use client";
import classNames from "classnames/bind";
import Link from "next/link";

import styles from "./FilterHead.module.css";
import { useSearchParams } from "next/navigation";
import { Reveal, WrapSidebar } from "@/components";
import Sidebar from "../Sidebar";

const cx = classNames.bind(styles);

export default function FilterHead({}) {
    const searchParams = useSearchParams();
    const featured = searchParams.get("featured");
    const promotion = searchParams.get("promotion");
    const sort = searchParams.get("sort");

    const createHref = (prop) => {
        const params = new URLSearchParams(searchParams.toString());
        const [key, value] = prop;

        if (params.get(key) === value) {
            params.delete(key);
        } else {
            params.set(key, value);
        }

        return `/products?${params.toString()}`;
    };

    return (
        <Reveal>
            <div className={cx("head")}>
                <WrapSidebar>
                    <WrapSidebar.Trigger>
                        <button className={cx("filterTrigger")}>
                            <i className="fi fi-rr-settings-sliders"></i>
                            <span>Bộ lọc</span>
                        </button>
                    </WrapSidebar.Trigger>

                    <WrapSidebar.Sidebar>
                        <Sidebar />
                    </WrapSidebar.Sidebar>
                    <div className={cx("sorts")}>
                        <Link
                            href={createHref(["featured", "true"])}
                            className={cx("sort", {
                                sortActive: featured,
                            })}
                        >
                            <i className="fi fi-rr-star"></i>
                            <span>Phổ biến</span>
                        </Link>

                        <Link
                            href={createHref(["promotion", "true"])}
                            className={cx("sort", {
                                sortActive: promotion,
                            })}
                        >
                            <i className="fi fi-rr-megaphone"></i>
                            <span>Khuyến mãi</span>
                        </Link>

                        <Link
                            href={createHref(["sort", "price_asc"])}
                            className={cx("sort", {
                                sortActive: sort === "price_asc",
                            })}
                        >
                            <i className="fi fi-br-sort-amount-up-alt"></i>
                            <span>Giá Thấp - Cao</span>
                        </Link>

                        <Link
                            href={createHref(["sort", "price_desc"])}
                            className={cx("sort", {
                                sortActive: sort === "price_desc",
                            })}
                        >
                            <i className="fi fi-br-sort-amount-down-alt"></i>
                            <span>Giá Cao - Thấp</span>
                        </Link>

                        <Link
                            href={createHref(["featured", "true"])}
                            className={cx("sortMobile", {
                                sortMobileActive: featured,
                            })}
                        >
                            Phổ biến
                        </Link>
                        <Link
                            href={createHref(["promotion", "true"])}
                            className={cx("sortMobile", {
                                sortMobileActive: promotion,
                            })}
                        >
                            <i className="fi fi-rr-"></i>
                            <span>Khuyến mãi</span>
                        </Link>

                        <Link
                            href={createHref([
                                "sort",
                                sort === "price_asc"
                                    ? "price_desc"
                                    : "price_asc",
                            ])}
                            className={cx("sortMobile", {
                                sortMobileActive:
                                    sort === "price_asc" ||
                                    sort === "price_desc",
                            })}
                        >
                            <span>Giá</span>
                            <div className={cx("sortIcon")}>
                                <i
                                    className={cx("fi fi-br-angle-small-up", {
                                        iconActive: sort === "price_asc",
                                    })}
                                ></i>
                                <i
                                    className={cx("fi fi-br-angle-small-down", {
                                        iconActive: sort === "price_desc",
                                    })}
                                ></i>
                            </div>
                        </Link>

                        <WrapSidebar.Trigger>
                            <button className={cx("sortMobile")}>
                                Bộ lọc
                                <i className="fi fi-sr-filter"></i>
                            </button>
                        </WrapSidebar.Trigger>
                    </div>
                </WrapSidebar>
            </div>
        </Reveal>
    );
}
