"use client";
import { useState, useContext, createContext, cloneElement } from "react";
import classNames from "classnames/bind";
import Link from "next/link";

import styles from "./WrapSidebar.module.css";

const SidebarContext = createContext(null);
const cx = classNames.bind(styles);

export default function WrapSidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <SidebarContext value={[isOpen, setIsOpen]}>{children}</SidebarContext>
    );
}

WrapSidebar.Trigger = ({ children }) => {
    const [, setIsOpen] = useContext(SidebarContext);
    return cloneElement(children, {
        onClick: () => setIsOpen(true),
    });
};
WrapSidebar.Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useContext(SidebarContext);
    return (
        <div
            className={cx("modal", {
                open: isOpen,
            })}
            onClick={() => setIsOpen(false)}
        >
            <aside
                className={cx("sidebar")}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </aside>
        </div>
    );
};

WrapSidebar.Link = ({ children, href, className }) => {
    const [, setIsOpen] = useContext(SidebarContext);
    return (
        <Link
            href={href}
            className={className}
            onClick={() => setIsOpen(false)}
        >
            {children}
        </Link>
    );
};
