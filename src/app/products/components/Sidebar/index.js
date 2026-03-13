"use client";
import classNames from "classnames/bind";

import styles from "./Sidebar.module.css";
import { Checkbox } from "@/components";
import PriceFilter from "../PriceFilter";

const cx = classNames.bind(styles);

const availabilityList = [
    { label: "Còn hàng", value: "in-stock", count: 13 },
    { label: "Hết hàng", value: "out-of-stock", count: 2 },
    { label: "Đặt trước", value: "pre-order", count: 12 },
];

const layoutList = [
    { label: "Fullsize (100%)", value: 100, count: 20 },
    { label: "TKL (80%)", value: 80, count: 2 },
    { label: "65%", value: 65, count: 30 },
    { label: "40%", value: 40, count: 15 },
];

const connectionList = [
    { label: "Có dây", value: "wired", count: 50 },
    { label: "Không dây 2.4G", value: "wireless-24g", count: 20 },
    { label: "Bluetooth", value: "bluetooth", count: 30 },
    { label: "3 chế độ (Tri-Mode)", value: "tri-mode", count: 15 },
];

export default function Sidebar() {
    return (
        <form className={cx("filter")}>
            <div className={cx("head")}>
                <h3 className={cx("title")}>Bộ lọc</h3>
            </div>

            <div className={cx("body")}>
                <details className={cx("details")} open>
                    <summary className={cx("trigger")}>
                        <span>Khoảng giá</span>
                        <i className="fi fi-rr-plus-small" />
                    </summary>

                    <div className={cx("content")}>
                        <PriceFilter max={1500} />
                    </div>
                </details>
                <details className={cx("details")} open>
                    <summary className={cx("trigger")}>
                        <span>Tình trạng</span>
                        <i className="fi fi-rr-plus-small"></i>
                    </summary>

                    <div className={cx("content")}>
                        <ul className={cx("items")}>
                            {availabilityList.map((item) => (
                                <li key={item.value} className={cx("item")}>
                                    <Checkbox
                                        name="availability[]"
                                        value={item.value}
                                    >
                                        <div className={cx("label")}>
                                            <span>{item.label}</span>
                                            <span>({item.count})</span>
                                        </div>
                                    </Checkbox>
                                </li>
                            ))}
                        </ul>
                    </div>
                </details>

                <details className={cx("details")} open>
                    <summary className={cx("trigger")}>
                        <span>Kích thước</span>
                        <i className="fi fi-rr-plus-small"></i>
                    </summary>

                    <div className={cx("content")}>
                        <ul className={cx("items")}>
                            {layoutList.map((item) => (
                                <li key={item.value} className={cx("item")}>
                                    <Checkbox
                                        name="layout[]"
                                        value={item.value}
                                    >
                                        <div className={cx("label")}>
                                            <span>{item.label}</span>
                                            <span>({item.count})</span>
                                        </div>
                                    </Checkbox>
                                </li>
                            ))}
                        </ul>
                    </div>
                </details>

                <details className={cx("details")} open>
                    <summary className={cx("trigger")}>
                        <span>Kết nối</span>
                        <i className="fi fi-rr-plus-small"></i>
                    </summary>

                    <div className={cx("content")}>
                        <ul className={cx("items")}>
                            {connectionList.map((item) => (
                                <li key={item.value} className={cx("item")}>
                                    <Checkbox
                                        name="connection[]"
                                        value={item.value}
                                    >
                                        <div className={cx("label")}>
                                            <span>{item.label}</span>
                                            <span>({item.count})</span>
                                        </div>
                                    </Checkbox>
                                </li>
                            ))}
                        </ul>
                    </div>
                </details>
            </div>

            <div className={cx("tail")}>
                <button type="button" className={cx("button", "buttonOutline")}>
                    Xóa hết
                </button>

                <button className={cx("button")}>Xem kết quả</button>
            </div>
        </form>
    );
}
