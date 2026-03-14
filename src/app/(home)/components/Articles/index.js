import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

import styles from "./Articles.module.css";
import { Reveal } from "@/components";

const cx = classNames.bind(styles);

export default function Articles() {
    return (
        <section className={cx("articles")}>
            <Reveal>
                <h2 className={cx("title")}>Hướng dẫn & bài viết</h2>
            </Reveal>

            <div className={cx("box")}>
                <Reveal>
                    <div className={cx("top")}>
                        <div className={cx("join")}>
                            <h3>Đăng ký nhận bản tin!</h3>

                            <p>
                                Nhận ưu đãi độc quyền, cập nhật sản phẩm mới và
                                những thông tin hậu trường thú vị về các sản
                                phẩm sắp ra mắt!
                            </p>

                            <form className={cx("form")}>
                                <input placeholder="Email" type="text" />
                                <button type="submit">Gửi</button>
                            </form>
                        </div>

                        <Link href="/" className={cx("featured")}>
                            <div className={cx("featuredImg")}>
                                <Image
                                    src="/images/articles/1.webp"
                                    alt="thumbnail"
                                    width={300}
                                    height={200}
                                />
                            </div>

                            <div className={cx("featuredInfo")}>
                                <h3 className={cx("featuredTitle")}>
                                    Hướng dẫn xây dựng bàn phím cơ tùy chỉnh
                                </h3>

                                <p className={cx("featuredDesc")}>
                                    Bạn mới tìm hiểu về bàn phím cơ custom? Hãy
                                    đọc bài hướng dẫn toàn diện này để nắm rõ
                                    mọi kiến thức cơ bản về bàn phím cơ tùy
                                    chỉnh.
                                </p>

                                <div className={cx("featuredUser", "mt-2")}>
                                    <Image
                                        src="/images/keyboards/ice-ring-63-RT/10.webp"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                    />
                                    <span>Alexotos</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </Reveal>

                <div className={cx("title", "my-3")}>
                    <h3>Bài viết nổi bật</h3>

                    <Link href="/articles">
                        <button>Tất cả</button>
                    </Link>
                </div>

                <div className={cx("wrap")}>
                    <Reveal>
                        <Link href="/" className={cx("article")}>
                            <div className={cx("articleImg")}>
                                <Image
                                    src="/images/articles/2.webp"
                                    alt="keyboard"
                                    width={400}
                                    height={250}
                                />
                            </div>

                            <div className={cx("articleInfo")}>
                                <div className={cx("articleUser")}>
                                    <Image
                                        src="/images/keyboards/new-wind-x80-classic/3.webp"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                    />
                                    <span>Liam H</span>
                                </div>

                                <h3 className={cx("articleTitle")}>
                                    Vì sao bàn phím cơ custom lại đắt?
                                </h3>

                                <span className={cx("articleDate")}>
                                    22 tháng 6, 2022
                                </span>
                            </div>
                        </Link>
                    </Reveal>

                    <Reveal delay={100}>
                        <Link href="/" className={cx("article")}>
                            <div className={cx("articleImg")}>
                                <Image
                                    src="/images/articles/3.webp"
                                    alt="keyboard"
                                    width={400}
                                    height={250}
                                />
                            </div>

                            <div className={cx("articleInfo")}>
                                <div className={cx("articleUser")}>
                                    <Image
                                        src="/images/keyboards/new-wind-x80-classic/3.webp"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                    />
                                    <span>Liam H</span>
                                </div>

                                <h3 className={cx("articleTitle")}>
                                    Bàn phím cơ vs bàn phím thường: khác nhau ở
                                    đâu?
                                </h3>

                                <span className={cx("articleDate")}>
                                    22 tháng 6, 2022
                                </span>
                            </div>
                        </Link>
                    </Reveal>

                    <Reveal delay={200}>
                        <Link href="/" className={cx("article")}>
                            <div className={cx("articleImg")}>
                                <Image
                                    src="/images/articles/4.webp"
                                    alt="keyboard"
                                    width={400}
                                    height={250}
                                />
                            </div>

                            <div className={cx("articleInfo")}>
                                <div className={cx("articleUser")}>
                                    <Image
                                        src="/images/keyboards/new-wind-x80-classic/3.webp"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                    />
                                    <span>Liam H</span>
                                </div>

                                <h3 className={cx("articleTitle")}>
                                    Nhôm hay nhựa? Case nào cho âm gõ tốt hơn?
                                </h3>

                                <span className={cx("articleDate")}>
                                    22 tháng 6, 2022
                                </span>
                            </div>
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
