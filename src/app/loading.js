"use client";

import classNames from "classnames/bind";
import styles from "./loading.module.css";

const cx = classNames.bind(styles);

export default function Loading() {
    return (
        <div className={cx("wrapper")}>
            <svg viewBox="0 0 240 240" className={cx("pl")}>
                <circle
                    cx={120}
                    cy={120}
                    r={105}
                    className={cx("ring", "ringA")}
                />

                <circle
                    cx={120}
                    cy={120}
                    r={35}
                    className={cx("ring", "ringB")}
                />

                <circle
                    cx={85}
                    cy={120}
                    r={70}
                    className={cx("ring", "ringC")}
                />

                <circle
                    cx={155}
                    cy={120}
                    r={70}
                    className={cx("ring", "ringD")}
                />
            </svg>
        </div>
    );
}
