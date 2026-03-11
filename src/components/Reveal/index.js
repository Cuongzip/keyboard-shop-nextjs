import classNames from "classnames/bind";

import styles from "./Reveal.module.css";
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles);

export default function Reveal({ children, delay }) {
    const revealRef = useRef(null);
    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (!entry.isIntersecting) return;

                const el = entry.target;

                el.style.transitionDelay = delay + "ms";

                el.classList.add(cx("revealShow"));

                intersectionObserver.disconnect();
            },
            { threshold: 0.2 },
        );
        intersectionObserver.observe(revealRef.current);

        return () => {
            intersectionObserver.disconnect();
        };
    }, []);
    return (
        <div ref={revealRef} className={cx("reveal")}>
            {children}
        </div>
    );
}
