"use client";
import classNames from "classnames/bind";

import styles from "./FilterHead.module.css";
import { Reveal, WrapSidebar } from "@/components";
import Sidebar from "../Sidebar";

const cx = classNames.bind(styles);

export default function FilterHead() {
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
                        <button
                            className={cx(
                                "button",
                                "buttonOutline",
                                "sort",
                                "sortActive",
                            )}
                        >
                            <i className="fi fi-rr-star"></i>
                            <span>Phổ biến</span>
                        </button>

                        <button
                            className={cx("button", "buttonOutline", "sort")}
                        >
                            <i className="fi fi-rr-megaphone"></i>
                            <span>Khuyến mãi</span>
                        </button>

                        <button
                            className={cx("button", "buttonOutline", "sort")}
                        >
                            <i className="fi fi-br-sort-amount-up-alt"></i>
                            <span>Giá Thấp - Cao</span>
                        </button>

                        <button
                            className={cx("button", "buttonOutline", "sort")}
                        >
                            <i className="fi fi-br-sort-amount-down-alt"></i>
                            <span>Giá Cao - Thấp</span>
                        </button>

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
