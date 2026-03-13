"use client";

import { useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./PriceFilter.module.css";

const cx = classNames.bind(styles);

export default function PriceFilter({ max, min = 0 }) {
    const rangeRef = useRef(null);

    const [minPercent, setMinPercent] = useState(0);
    const [maxPercent, setMaxPercent] = useState(100);

    const [dragging, setDragging] = useState(null);

    const format = (v) => Math.floor(v).toLocaleString("de-DE");

    const percentToValue = (p) => (max * p) / 100;

    const handlePointerDown = (type) => (e) => {
        setDragging(type);
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
        if (!dragging) return;

        const rect = rangeRef.current.getBoundingClientRect();

        let percent = ((e.clientX - rect.left) / rect.width) * 100;

        if (percent < 0) percent = 0;
        if (percent > 100) percent = 100;

        if (dragging === "min") return setMinPercent(percent);
        setMaxPercent(percent);
    };

    const handlePointerUp = (e) => {
        setDragging(null);
        e.currentTarget.releasePointerCapture?.(e.pointerId);
    };

    const handleInput = (type) => (e) => {
        let raw = e.target.value.replace(/\D/g, "");
        if (!raw) return;

        let value = Number(raw);

        if (value > max) value = max;
        if (value < min) value = min;

        const percent = (value / max) * 100;

        if (type === "min") return setMinPercent(percent);
        setMaxPercent(percent);
    };

    const realMin = Math.min(minPercent, maxPercent);
    const realMax = Math.max(minPercent, maxPercent);

    return (
        <div className={cx("priceFilter")}>
            <div className={cx("priceInputs")}>
                <div className={cx("priceInput")}>
                    <input
                        value={format(percentToValue(realMin))}
                        onChange={handleInput("min")}
                    />
                    <span>.000đ</span>
                </div>

                <div className="mx-1">-</div>

                <div className={cx("priceInput")}>
                    <input
                        value={format(percentToValue(realMax))}
                        onChange={handleInput("max")}
                    />
                    <span>.000đ</span>
                </div>
            </div>

            <div
                ref={rangeRef}
                className={cx("range", "mt-3")}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
            >
                <div
                    className={cx("rangeProcess")}
                    style={{
                        left: `${realMin}%`,
                        width: `${realMax - realMin}%`,
                    }}
                />

                <div
                    className={cx("rangeDot")}
                    style={{ left: `${minPercent}%` }}
                    onPointerDown={handlePointerDown("min")}
                />

                <div
                    className={cx("rangeDot")}
                    style={{ left: `${maxPercent}%` }}
                    onPointerDown={handlePointerDown("max")}
                />
            </div>
        </div>
    );
}
