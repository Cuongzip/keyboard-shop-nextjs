"use client";
import { useState, useContext, createContext } from "react";
import classNames from "classnames/bind";

import styles from "./Sidebar.module.css";

const SidebarContext = createContext(null);
const cx = classNames.bind(styles);

export default function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <SidebarContext value={[isOpen, setIsOpen]}>{children}</SidebarContext>
    );
}

Sidebar.Trigger = ({ children }) => {
    const [isOpen, setIsOpen] = useContext(SidebarContext);
    return <button onClick={() => setIsOpen(true)}>{children}</button>;
};
Sidebar.Content = ({ children }) => {
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
