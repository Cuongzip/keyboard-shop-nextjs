import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

import styles from "../auth.module.css";

const cx = classNames.bind(styles);

export default function SignIn() {
    return (
        <div className={cx("mainBox")}>
            <form className={cx("form")} id="formSignIn">
                <div className={cx("formHead")}>
                    <h1 className={cx("formTitle", "mb-2")}>Đăng nhập</h1>

                    <span className={cx("formSubtitle")}>
                        Chào mừng trở lại, tận hưởng hành trình!
                    </span>
                </div>

                <div className={cx("formBtns", "my-3")}>
                    <Link href="" className={cx("formLink")}>
                        <button
                            type="button"
                            className={cx("formBtn", "center")}
                        >
                            <span>Đăng nhập với</span>

                            <Image
                                src="/images/icons/gg.webp"
                                alt="google"
                                width={24}
                                height={24}
                            />
                        </button>
                    </Link>

                    <Link href="" className={cx("formLink")}>
                        <button
                            type="button"
                            className={cx("formBtn", "center")}
                        >
                            <span>Đăng nhập với</span>

                            <Image
                                src="/images/icons/fb.jpg"
                                alt="facebook"
                                width={24}
                                height={24}
                            />
                        </button>
                    </Link>
                </div>

                <div className={cx("formSeparate", "my-2")}>
                    <span className={cx("separateText")}>hoặc</span>
                </div>

                <div className={cx("formGroup")}>
                    <label htmlFor="email">Email</label>

                    <input
                        name="email"
                        id="email"
                        placeholder="Nhập email của bạn"
                    />

                    <span className={cx("formMessageError")} />
                </div>

                <div className={cx("formGroup")}>
                    <label htmlFor="password">Mật khẩu</label>

                    <input
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Nhập mật khẩu email của bạn"
                        autoComplete="on"
                    />

                    <span className={cx("formMessageError")} />
                </div>

                <button type="submit" className={cx("formSubmitBtn")}>
                    Đăng nhập
                </button>

                <div className={cx("formTail", "mt-2")}>
                    <span>Bạn chưa có tài khoản,&nbsp;</span>

                    <Link href="/auth/sign-up">đăng ký</Link>
                </div>
            </form>

            <div className={cx("banner", "center")}>
                <Image
                    className={cx("bannerImg")}
                    src="/images/banners/sign-in-banner.webp"
                    alt="banner"
                    width={500}
                    height={500}
                />

                <span className={cx("bannerText", "text-center")}>
                    Gõ từng phím, cảm nhận từng khoảnh khắc.
                </span>
            </div>
        </div>
    );
}
