import classNames from "classnames/bind";

import styles from "./Checkbox.module.css";

const cx = classNames.bind(styles);

export default function Checkbox({ name, label }) {
    return (
        <label htmlFor="checkbox" className={cx("checkbox")}>
            <input
                id="checkbox"
                name={name}
                type="checkbox"
                className={cx("checkboxInput")}
            />

            <span className={cx("checkboxTile")}>
                <i className={cx("checkboxIcon", "fi fi-br-check")} />
            </span>

            <div className={cx("checkboxLabel")}>{label}</div>
        </label>
    );
}
