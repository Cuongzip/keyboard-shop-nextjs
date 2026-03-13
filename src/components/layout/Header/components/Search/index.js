"use client";
import classNames from "classnames/bind";

import styles from "./Search.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProducts } from "@/services";
import { useDebounce } from "@/hooks";
import Link from "next/link";
const cx = classNames.bind(styles);

export default function Search() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const router = useRouter();

    const debouncedValue = useDebounce(value, 100);
    useEffect(() => {
        const fetchData = async () => {
            if (!debouncedValue) {
                setData([]);
                return;
            }
            const data = await getProducts(`keyword=${debouncedValue}`);

            setData(data);
        };
        fetchData();
        return () => {};
    }, [debouncedValue]);

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/products?keyword=${debouncedValue}`);
    };
    return (
        <form className={cx("search")} onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="search">
                <i className="fi fi-br-search"></i>
            </label>
            <input
                id="search"
                name="search"
                placeholder="Tìm kiếm sản phẩm"
                onChange={(e) => setValue(e.target.value.trim())}
                value={value}
            />
            <ul className={cx("result")}>
                {data.map((product, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className={cx("link")}
                                href={`/products/${product.slug}`}
                            >
                                {product.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </form>
    );
}
