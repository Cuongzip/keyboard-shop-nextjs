"use client";
import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./Gallery.module.css";
import { useState, useRef, useEffect } from "react";

const cx = classNames.bind(styles);

export default function Gallery({ data }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const baseWidthRef = useRef(160);
    const gapRef = useRef(10);
    const visibleCountRef = useRef(0);
    const viewportRef = useRef(null);
    const [width, setWidth] = useState(baseWidthRef.current);

    useEffect(() => {
        const viewportEl = viewportRef.current;
        const gap = gapRef.current;

        const resizeObserver = new ResizeObserver(() => {
            const viewportWidth = viewportEl.clientWidth;
            visibleCountRef.current = Math.floor(
                (viewportWidth + gap) / (baseWidthRef.current + gap),
            );
            const visibleCount = visibleCountRef.current;
            const newWidth =
                (viewportWidth - gap * (visibleCount - 1)) / visibleCount;

            setWidth(newWidth);
        });

        resizeObserver.observe(viewportEl);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    const canPrev = activeIndex > 0;
    const canNext = activeIndex < data.length - 1;

    const handlePrev = () => {
        setActiveIndex((prev) => {
            if (canPrev) return prev - 1;
            return prev;
        });
    };
    const handleNext = () => {
        setActiveIndex((prev) => {
            if (canNext) return prev + 1;
            return prev;
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

    const handlePointerUp = () => {
        isPressRef.current = false;

        const isDrag = isDragRef.current;

        if (isDrag === "prev") handlePrev();
        if (isDrag === "next") handleNext();

        isDragRef.current = 0;
    };

    return (
        <div className={cx("gallery")}>
            <div
                className={cx("mainImg")}
                onPointerDown={(e) => handlePointerDown(e)}
                onPointerMove={(e) => handlePointerMove(e)}
                onPointerUp={(e) => handlePointerUp(e)}
            >
                <Image
                    src={data[activeIndex]}
                    alt="keyboard"
                    width={1200}
                    height={600}
                />
            </div>

            <div className={cx("carousel")}>
                <div
                    ref={viewportRef}
                    className={cx("viewport", "mt-1")}
                    onPointerDown={(e) => handlePointerDown(e)}
                    onPointerMove={(e) => handlePointerMove(e)}
                    onPointerUp={(e) => handlePointerUp(e)}
                >
                    <div
                        style={{
                            transform: `translateX(-${(width + gapRef.current) * Math.max(0, activeIndex - (visibleCountRef.current - 1))}px)`,
                            gap: gapRef.current,
                        }}
                        className={cx("track")}
                    >
                        {data.map((image, index) => {
                            return (
                                <div
                                    key={index}
                                    className={cx("item", {
                                        itemActive: activeIndex === index,
                                    })}
                                    onClick={() => setActiveIndex(index)}
                                    style={{ width: width }}
                                >
                                    <Image
                                        src={image}
                                        alt="keyboard"
                                        width={600}
                                        height={600}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button
                    className={cx("btn", "center", "btnPrev", {
                        btnDisable: !canPrev,
                    })}
                    onClick={handlePrev}
                >
                    <i className="fi fi-sr-angle-small-left" />
                </button>

                <button
                    className={cx("btn", "center", "btnNext", {
                        btnDisable: !canNext,
                    })}
                    onClick={handleNext}
                >
                    <i className="fi fi-sr-angle-small-right" />
                </button>
            </div>
        </div>
    );
}
