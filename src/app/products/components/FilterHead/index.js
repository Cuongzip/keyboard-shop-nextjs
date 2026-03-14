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
                            className={cx("button", "buttonOutline", "sort", {
                                sortActive: featured,
                            })}
                        >
                            <i className="fi fi-rr-star"></i>
                            <span>Phổ biến</span>
                        </Link>

                        <Link
                            href={createHref(["promotion", "true"])}
                            className={cx("button", "buttonOutline", "sort", {
                                sortActive: promotion,
                            })}
                        >
                            <i className="fi fi-rr-megaphone"></i>
                            <span>Khuyến mãi</span>
                        </Link>

                        <Link
                            href={createHref(["sort", "price_asc"])}
                            className={cx("button", "buttonOutline", "sort", {
                                sortActive: sort === "price_asc",
                            })}
                        >
                            <i className="fi fi-br-sort-amount-up-alt"></i>
                            <span>Giá Thấp - Cao</span>
                        </Link>

                        <Link
                            href={createHref(["sort", "price_desc"])}
                            className={cx("button", "buttonOutline", "sort", {
                                sortActive: sort === "price_desc",
                            })}
                        >
                            <i className="fi fi-br-sort-amount-down-alt"></i>
                            <span>Giá Cao - Thấp</span>
                        </Link>

                        <button className={cx("sortMobile", "sortActive")}>
                            Phổ biến
                        </button>

                        <button className={cx("sortMobile")}>Khuyến mãi</button>

                        <button className={cx("sortMobile")}>
                            <span>Giá</span>
                            <div className={cx("sortIcon")}>
                                <i className="fi fi-br-angle-small-up"></i>
                                <i className="fi fi-br-angle-small-down"></i>
                            </div>
                        </button>
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
