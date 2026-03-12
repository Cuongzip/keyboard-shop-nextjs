import classNames from "classnames/bind";

import styles from "./Benefits.module.css";
import { Reveal } from "@/components";

const cx = classNames.bind(styles);

export default function Benefits() {
    return (
        <section className={cx("benefits")}>
            <Reveal>
                <h2 className={cx("title")}>
                    <span>Vì sao chọn chúng tôi?</span>
                    <span>
                        Dưới đây là những lý do bạn nên mua sắm cùng chúng tôi.
                    </span>
                </h2>
            </Reveal>
            <div className={cx("box")}>
                <Reveal>
                    <div className={cx("benefit")}>
                        <i
                            className={cx("icon", "purple", "fi fi-rr-boxes")}
                        ></i>
                        <p className={cx("text")}>
                            <span className={cx("purple")}>
                                Tất cả đơn hàng
                            </span>
                            đều được đóng gói cẩn thận với sự tận tâm 💜 và gửi
                            đi từ kho của chúng tôi tại
                            <span className={cx("purple")}>VN.</span>
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={150}>
                    <div className={cx("benefit")}>
                        <i
                            className={cx(
                                "icon",
                                "blue",
                                "fi fi-rs-shipping-fast",
                            )}
                        ></i>
                        <p className={cx("text")}>
                            Phần lớn đơn hàng được giao trong vòng
                            <span className={cx("blue")}>24–48 giờ</span>
                            và hỗ trợ đổi trả trong
                            <span className={cx("blue")}>14 ngày</span>
                            kể từ khi nhận hàng.
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={250}>
                    <div className={cx("benefit")}>
                        <i
                            className={cx(
                                "icon",
                                "pink",
                                "fi fi-rs-assessment",
                            )}
                        ></i>
                        <p className={cx("text")}>
                            Hơn
                            <span className={cx("pink")}>1.300+</span>
                            đánh giá
                            <span className={cx("pink")}>5 sao</span>
                            đã được xác minh, với điểm đánh giá trung bình
                            <span className={cx("pink")}>4,89</span>
                            từ khách hàng.
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={350}>
                    <div className={cx("benefit")}>
                        <i
                            className={cx(
                                "icon",
                                "green",
                                "fi fi-rs-wallet-arrow",
                            )}
                        ></i>
                        <p className={cx("text")}>
                            Nhiều phương thức
                            <span className={cx("green")}>
                                thanh toán linh hoạt
                            </span>
                            khi thanh toán, bao gồm các gói
                            <span className={cx("green")}>trả góp</span>
                            không lãi suất.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
