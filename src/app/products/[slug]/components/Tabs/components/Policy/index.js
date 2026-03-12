import classNames from "classnames/bind";

import styles from "./Policy.module.css";

const cx = classNames.bind(styles);
export default function Policy() {
    return <div className={cx("tab", "policyTab")}>policy tab</div>;
}
