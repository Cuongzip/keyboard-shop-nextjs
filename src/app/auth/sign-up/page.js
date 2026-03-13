import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

import styles from "../auth.module.css";
import { Checkbox } from "@/components";

const cx = classNames.bind(styles);

export default function SignUp() {
    return (
        <div className={cx("mainBox")}>
            <form className={cx("form")} id="formSignUp">
                <div className={cx("formHead")}>
                    <h1 className={cx("formTitle", "mb-2")}>Đăng ký</h1>

                    <span className={cx("formSubtitle")}>
                        Bước vào thế giới mới chỉ với một click.
                    </span>
                </div>

                <div className={cx("formBtns", "my-3")}>
                    <Link href="" className={cx("formLink")}>
                        <button
                            type="button"
                            className={cx("formBtn", "center")}
                        >
                            <span>Đăng ký với</span>

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
                            <span>Đăng ký với</span>

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
                    <label htmlFor="name">Tên</label>

                    <input name="name" id="name" placeholder="Nhập tên" />

                    <span className={cx("formMessageError")} />
                </div>

                <div className={cx("formGroup")}>
                    <label htmlFor="email">Email</label>

                    <input name="email" id="email" placeholder="Nhập email" />

                    <span className={cx("formMessageError")} />
                </div>

                <div className={cx("formGroup")}>
                    <label htmlFor="password">Mật khẩu</label>

                    <input
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Nhập mật khẩu"
                        autoComplete="on"
                    />

                    <span className={cx("formMessageError")} />
                </div>

                <div className={cx("formGroup", "formGroupRow")}>
                    <Checkbox name="policy" value="policy">
                        Tôi chấp nhận các chính sách bảo mật
                    </Checkbox>
                </div>

                <button type="submit" className={cx("formSubmitBtn", "mt-2")}>
                    Đăng ký
                </button>

                <div className={cx("formTail", "mt-3")}>
                    <span>Nếu bạn đã có tài khoản,&nbsp;</span>

                    <Link href="/auth/sign-in">đăng nhập</Link>
                </div>
            </form>

            <div className={cx("banner", "center")}>
                <Image
                    className={cx("bannerImg")}
                    src="/images/banners/sign-up-banner.webp"
                    alt="banner"
                    width={500}
                    height={500}
                />

                <span className={cx("bannerText", "text-center")}>
                    Phím cơ hoàn hảo, trải nghiệm tuyệt vời.
                </span>
            </div>
        </div>
    );
}
