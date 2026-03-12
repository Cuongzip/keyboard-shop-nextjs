import classNames from "classnames/bind";

import styles from "./Evaluate.module.css";

const cx = classNames.bind(styles);
export default function Evaluate() {
    return <div className={cx("tab", "evaluateTab")}>evaluate tab</div>;
}
