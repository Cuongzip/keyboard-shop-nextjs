"use client";

import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

import styles from "./Chat.module.css";

const cx = classNames.bind(styles);

export default function Chat() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: "bot",
            text: "Bạn cần tui giúp gì",
            time: "7:24 PM",
        },
    ]);

    const [value, setValue] = useState("");

    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!value.trim()) return;

        const userMsg = {
            id: Date.now(),
            type: "user",
            text: value,
            time: new Date().toLocaleTimeString(),
        };

        setMessages((prev) => [...prev, userMsg]);

        setMessages((prev) => [
            ...prev,
            {
                id: Date.now() + 1,
                type: "bot",
                text: "ok ",
                time: new Date().toLocaleTimeString(),
            },
        ]);

        setValue("");
    };

    return (
        <div className={cx("chat")}>
            <button
                className={cx("trigger", "center")}
                onClick={() => setOpen(true)}
            >
                <i className="fi fi-sr-comment" />
            </button>

            <div className={cx("box", { boxOpen: open })}>
                <div className={cx("head")}>
                    <Image
                        src="/images/icons/chat-bot.avif"
                        alt="avatar chatbot"
                        width={32}
                        height={32}
                    />

                    <span>Chatbot hỗ trợ</span>

                    <button
                        className={cx("close")}
                        onClick={() => setOpen(false)}
                    >
                        <i className="fi fi-br-cross-small" />
                    </button>
                </div>

                <ul className={cx("messages")}>
                    {messages.map((message) => (
                        <li
                            key={message.id}
                            className={cx(
                                "message",
                                message.type === "bot" && "messageBot",
                            )}
                        >
                            {message.type === "bot" && (
                                <Image
                                    src="/images/icons/chat-bot.avif"
                                    alt="avatar chatbot"
                                    width={28}
                                    height={28}
                                />
                            )}

                            <p
                                className={cx(
                                    "text",
                                    message.type === "bot"
                                        ? "textBot"
                                        : "textUser",
                                )}
                            >
                                <span>{message.text}</span>
                                <br />
                                <span className={cx("time")}>
                                    {message.time}
                                </span>
                            </p>
                        </li>
                    ))}

                    <div ref={bottomRef} />
                </ul>

                <form className={cx("input")} onSubmit={handleSubmit}>
                    <input
                        placeholder="Aa"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />

                    <button type="submit" className={cx("btn")}>
                        <i className="fi fi-ss-paper-plane-top" />
                    </button>
                </form>
            </div>
        </div>
    );
}
