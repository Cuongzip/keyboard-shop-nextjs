"use client";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "./Banner.module.css";
import { Reveal } from "@/components";

const cx = classNames.bind(styles);

export default function Banner({ data }) {
    const [activeIndex, setActiveIndex] = useState(1);
    const carouselRef = useRef(null);
    const contentRef = useRef(null);
    useEffect(() => {
        const carouselEl = carouselRef.current;
        const contentEf = contentRef.current;
        const baseWidth = 1440;

        const resizeObserverCarousel = new ResizeObserver((entries) => {
            let scale = Math.min(1, carouselEl.clientWidth / baseWidth);

            if (window.innerWidth <= 739) scale += 0.35;

            contentEf.style.zoom = scale;
        });

        resizeObserverCarousel.observe(carouselEl);
        return () => {
            resizeObserverCarousel.disconnect();
        };
    }, []);

    const handleNext = () => {
        setActiveIndex((prev) => {
            if (prev >= data.length - 1) return 0;
            return prev + 1;
        });
    };
    const handlePrev = () => {
        setActiveIndex((prev) => {
            if (prev <= 0) return data.length - 1;
            return prev - 1;
        });
    };

    const clientXRef = useRef(0);
    const isPressRef = useRef(false);
    const isDragRef = useRef("");

    const handlePointerDown = (e) => {
        clientXRef.current = e.clientX;
        isPressRef.current = true;
    };

    const handlePointerMove = (e) => {
        if (!isPressRef.current) return;
        const diff = e.clientX - clientXRef.current;
        if (Math.abs(diff) > 8) isDragRef.current = diff > 0 ? "prev" : "next";
    };

    const handlePointerUp = (e) => {
        isPressRef.current = false;

        const isDrag = isDragRef.current;

        if (isDrag === "prev") handlePrev();
        if (isDrag === "next") handleNext();

        isDragRef.current = 0;
    };

    return (
        <section ref={carouselRef} className={cx("carousel")}>
            <div className={cx("slide")}>
                <div className={cx("main")}>
                    <div ref={contentRef} className={cx("content")}>
                        <div key={activeIndex} className={cx("info")}>
                            <span className={cx("label")}>
                                {data[activeIndex].label}
                            </span>
                            <span className={cx("subTitle")}>
                                {data[activeIndex].subTitle}
                            </span>
                            <h3 className={cx("name")}>
                                {data[activeIndex].name}
                            </h3>
                        </div>

                        <div className={cx("btns", "mt-2")}>
                            <Link href="/">
                                <button className={cx("button", "carouselBtn")}>
                                    <i className="fi fi-rr-cart-shopping-fast"></i>
                                    <span>Mua ngay</span>
                                </button>
                            </Link>
                            <Link href="/">
                                <button
                                    className={cx(
                                        "button button--outline",
                                        "carouselBtn",
                                    )}
                                >
                                    <i className="fi fi-rs-eye"></i>
                                    <span>Xem chi tiết</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div
                        onPointerDown={(e) => handlePointerDown(e)}
                        onPointerMove={(e) => handlePointerMove(e)}
                        onPointerUp={(e) => handlePointerUp(e)}
                        className={cx("banner")}
                    >
                        <Image
                            key={activeIndex}
                            src={data[activeIndex].src}
                            alt="banner"
                            width={1536}
                            height={1024}
                        />
                    </div>
                </div>

                <Reveal>
                    <div className={cx("actions")}>
                        <button
                            onClick={handlePrev}
                            className={cx("action", "prevAction")}
                        >
                            <i className="fi fi-br-angle-left"></i>
                        </button>
                        <button
                            onClick={handleNext}
                            className={cx("action", "nextAction")}
                        >
                            <i className="fi fi-br-angle-right"></i>
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
