import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./Gallery.module.css";
import { Reveal } from "@/components";

const cx = classNames.bind(styles);

const images = [
    "/images/keyboards/AM-RGB-65-R1-5/1.webp",
    "/images/keyboards/ice-ring-63-RT/3.webp",
    "/images/keyboards/AM-RGB-65-R1-5/4.webp",
    "/images/keyboards/New-Wind-X80-Classic/5.webp",
    "/images/keyboards/ice-ring-63-RT/8.webp",
    "/images/keyboards/Freya-Ultra/1.webp",
    "/images/keyboards/ice-ring-63-RT/10.webp",
    "/images/keyboards/Freya-Ultra/5.webp",
    "/images/keyboards/AM-RGB-65-R1-5/7.webp",
    "/images/keyboards/AM-RGB-65-R1-5/6.webp",
    "/images/keyboards/AM-RGB-65-R1-5/9.webp",
    "/images/keyboards/Freya-Ultra/4.webp",
];

export default function Gallery() {
    return (
        <section className={cx("gallery")}>
            <Reveal>
                <h2 className={cx("title")}>Thư viện thiết kế bàn phím</h2>
            </Reveal>
            <div className={cx("box")}>
                {images.map((image, index) => {
                    return (
                        <Reveal key={index}>
                            <div
                                className={cx("item", {
                                    itemVertical: index % 2 === 0,
                                })}
                            >
                                <Image
                                    src={image}
                                    alt={`keyboard ${index}`}
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
