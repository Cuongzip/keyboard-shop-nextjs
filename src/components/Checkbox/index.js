import classNames from "classnames/bind";

import styles from "./Checkbox.module.css";

const cx = classNames.bind(styles);

export default function Checkbox({ name, value, children, checked, onChange }) {
    return (
        <label htmlFor={`checkbox-${value}`} className={cx("checkbox")}>
            <input
                id={`checkbox-${value}`}
                name={name}
                value={value}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className={cx("checkboxInput")}
            />

            <span className={cx("checkboxTile")}>
                <i className={cx("checkboxIcon", "fi fi-br-check")} />
            </span>

            <div className={cx("checkboxLabel")}>{children}</div>
        </label>
    );
}
