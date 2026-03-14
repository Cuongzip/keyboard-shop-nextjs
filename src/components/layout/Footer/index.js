import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";
const cx = classNames.bind(styles);

export default function Footer() {
    return (
        <footer className={cx("footer")}>
            <div className={cx("container", "columns")}>
                <div className={cx("column", "columnBig")}>
                    <Link className={cx("logo", "center")} href="/">
                        <Image
                            src="/images/logos/light-mode-no-label.webp"
                            alt="logo"
                            width={372}
                            height={270}
                        />
                    </Link>
                    <h3 className={cx("slogan", "mt-3")}>
                        Bàn Phím Hoàn Hảo Cho Mọi Cú Click
                    </h3>
                </div>
                <div className={cx("column")}>
                    <ul>
                        <li>
                            <h3 className={cx("title")}>Menu</h3>
                        </li>
                        <li>
                            <Link className={cx("link")} href="/">
                                <i className="fi fi-rr-house-chimney"></i>
                                <span>Trang chủ</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cx("link")} href="/products">
                                <i className="fi fi-rr-keyboard"></i>
                                <span>Sản phẩm</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cx("link")} href="/auth/sign-in">
                                <i className="fi fi-br-arrow-alt-to-right"></i>
                                <span>Đăng nhập</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cx("link")} href="/auth/sign-up">
                                <i className="fi fi-br-arrow-alt-to-left"></i>
                                <span>Đăng ký</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={cx("column")}>
                    <ul>
                        <li>
                            <h3 className={cx("title")}>Hỗ trợ</h3>
                        </li>
                        <li>
                            <Link className={cx("link")} href="/">
                                <i className="fi fi-rr-book-open-cover"></i>
                                <span>Hướng dẫn mua hàng</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cx("link")} href="/">
                                <i className="fi fi-rr-credit-card"></i>
                                <span>Hướng dẫn thanh toán</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cx("link")} href="/">
                                <i className="fi fi-rr-person-circle-question"></i>
                                <span>Câu hỏi thường gặp</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={cx("column")}>
                    <ul>
                        <li>
                            <h3 className={cx("title")}>Liên lạc</h3>
                        </li>
                        <li>
                            <Link className={cx("link")} href="tel: 000000">
                                <i className="fi fi-rr-phone-flip"></i>
                                <span>0349156614</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={cx("link")}
                                href="mailto:user@gmail.com"
                            >
                                <i className="fi fi-rr-envelope"></i>
                                <span>user@gmail.com</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={cx("link")} href="/">
                                <i className="fi fi-rr-postal-address"></i>
                                <span>Phước Thiền, Đồng Nai</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={cx("column", "columnBig")}>
                    <div className={cx("socialsNetwork")}>
                        <Link href="">
                            <Image
                                src="/images/logos/facebook.webp"
                                alt="logo facebook"
                                width={500}
                                height={500}
                            />
                        </Link>
                        <Link href="">
                            <Image
                                src="/images/logos/instagram.png"
                                alt="logo instagram"
                                height={500}
                                width={500}
                            />
                        </Link>
                        <Link href="">
                            <Image
                                src="/images/logos/twitter.png"
                                alt="logo twitter"
                                height={500}
                                width={500}
                            />
                        </Link>
                    </div>
                    <span className={cx("label")}>Khám phá ứng dụng</span>
                    <div className={cx("downloadBtns")}>
                        <Link href="/">
                            <Image
                                src="/images/buttons/button-gg-play-dark.png"
                                alt="button gg play"
                                height={320}
                                width={100}
                            />
                        </Link>
                        <Link href="/">
                            <Image
                                src="/images/buttons/button-apple-store-dark.png"
                                alt="button apple store"
                                height={320}
                                width={100}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
