"use client";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";

import styles from "./Carousel.module.css";
import { Product, Reveal } from "@/components";
const cx = classNames.bind(styles);

export default function Carousel({ data }) {
    const baseWidthRef = useRef(300);
    const gapRef = useRef(20);
    const visibleCountRef = useRef(1);
    const [width, setWidth] = useState(baseWidthRef.current);
    const [activePage, setActivePage] = useState(0);
    const viewportRef = useRef(null);
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
            const maxActivePage =
                Math.ceil(data.length / visibleCountRef.current) - 1;
            setActivePage((prev) => Math.min(prev, maxActivePage));
        });
        resizeObserver.observe(viewportEl);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);
    const canNext =
        activePage < Math.ceil(data.length / visibleCountRef.current) - 1;
    const canPrev = activePage > 0;

    const handleNext = () => {
        setActivePage((prev) => {
            if (canNext) return prev + 1;
            return prev;
        });
    };
    const handlePrev = () => {
        setActivePage((prev) => {
            if (canPrev) return prev - 1;
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
        <div className={cx("carousel")}>
            <div
                ref={viewportRef}
                className={cx("viewport")}
                onPointerDown={(e) => handlePointerDown(e)}
                onPointerMove={(e) => handlePointerMove(e)}
                onPointerUp={(e) => handlePointerUp(e)}
            >
                <div
                    style={{
                        transform: `translateX(calc(-${activePage * 100}% - ${activePage * gapRef.current}px))`,
                    }}
                    className={cx("track")}
                >
                    {data.map((product, index) => {
                        let content = (
                            <div>
                                <Product width={width} data={product} />
                            </div>
                        );
                        if (index < visibleCountRef.current)
                            content = (
                                <Reveal delay={100 * index}>{content}</Reveal>
                            );

                        return <div key={index}>{content}</div>;
                    })}
                </div>
                <button
                    onClick={handleNext}
                    className={cx("action", "actionNext", {
                        actionDisable: !canNext,
                    })}
                >
                    <i className="fi fi-sr-angle-small-right"></i>
                </button>
                <button
                    onClick={handlePrev}
                    className={cx("action", "actionPrev", {
                        actionDisable: !canPrev,
                    })}
                >
                    <i className="fi fi-br-angle-small-left"></i>
                </button>
            </div>

            <ul className={cx("pagination")}>
                {Array(Math.ceil(data.length / visibleCountRef.current))
                    .fill()
                    .map((value, index) => {
                        return (
                            <li
                                key={index}
                                className={cx("paginationItem", {
                                    paginationItemActive: index === activePage,
                                })}
                                onClick={() => setActivePage(index)}
                            ></li>
                        );
                    })}
            </ul>
        </div>
    );
}
