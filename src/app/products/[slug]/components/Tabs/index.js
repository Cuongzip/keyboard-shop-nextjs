"use client";
import classNames from "classnames/bind";
import { useState, useRef } from "react";

import { Reveal } from "@/components";
import { Description, Policy, Evaluate } from "./components";

import styles from "./Tabs.module.css";

const cx = classNames.bind(styles);

const tabs = [
    {
        label: " Thông tin sản phẩm",
        component: <Description />,
    },
    { label: "  Chính sách", component: <Policy /> },
    { label: "Đánh giá", component: <Evaluate /> },
];
export default function Tabs() {
    const [activeTab, setActiveTab] = useState(0);
    const [isSeeMore, setIsSeeMore] = useState(false);
    const topRef = useRef(null);
    return (
        <section className={cx("tabs")}>
            <div ref={topRef} className={cx("top")}></div>
            <Reveal>
                <nav className={cx("nav")}>
                    <ul className={cx("navList")}>
                        {tabs.map((tab, index) => (
                            <li
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={cx("navItem", {
                                    navItemActive: activeTab === index,
                                })}
                            >
                                {tab.label}
                            </li>
                        ))}
                    </ul>
                </nav>
            </Reveal>

            <div
                className={cx("tab", {
                    seeMore: isSeeMore,
                })}
            >
                {tabs[activeTab].component}

                <div className="center">
                    {isSeeMore ? (
                        <button
                            onClick={() => {
                                setIsSeeMore(false);
                                topRef.current.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                            className={cx(
                                "button",
                                "buttonOutline",
                                "summaryBtn",
                            )}
                        >
                            Thu gọn
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsSeeMore(true)}
                            className={cx(
                                "button",
                                "buttonOutline",
                                "seeMoreBtn",
                            )}
                        >
                            Xem thêm
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
