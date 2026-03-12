"use client";
import classNames from "classnames/bind";

import styles from "./Quantity.module.css";
import { useRef } from "react";

const cx = classNames.bind(styles);

export default function Quantity({ name }) {
    const inputRef = useRef(null);
    const handleIncrease = () => {
        const inputEl = inputRef.current;
        let value = Number(inputEl.value) + 1;
        if (value > 999) value = 1;
        inputEl.value = value;
    };
    const handleDecrease = () => {
        const inputEl = inputRef.current;

        let value = Number(inputEl.value) - 1;
        if (value < 1) value = 1;
        inputEl.value = value;
    };
    const handleInput = (e) => {
        inputEl.value = inputEl.value.replace(/\D/g, "");
    };

    return (
        <div className={cx("quantity")}>
            <button
                type="button"
                onClick={handleDecrease}
                className={cx("quantityBtn", "quantityBtnDecrease")}
            >
                -
            </button>

            <input
                ref={inputRef}
                onInput={(e) => handleInput}
                className={cx("quantityInput")}
                defaultValue="1"
                type="text"
                maxLength="3"
                name={name}
            />

            <button
                type="button"
                onClick={handleIncrease}
                className={cx("quantityBtn", "quantityBtnIncrease")}
            >
                +
            </button>
        </div>
    );
}
