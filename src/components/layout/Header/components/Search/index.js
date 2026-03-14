"use client";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import Image from "next/image";

import styles from "./Search.module.css";
import { getProducts } from "@/services";
import { useDebounce } from "@/hooks";
import formattedPrice from "@/lib/formatPrice";

const cx = classNames.bind(styles);

export default function Search({ className, Link = NextLink }) {
    const [data, setData] = useState({});
    const [value, setValue] = useState("");
    const [isShow, setIsShow] = useState(false);
    const router = useRouter();
    const searchRef = useRef("");
    const debouncedValue = useDebounce(value, 100);
    useEffect(() => {
        const fetchData = async () => {
            if (!debouncedValue) {
                setData({});
                return;
            }
            const data = await getProducts({
                keyword: debouncedValue,
                limit: 5,
            });

            setData(data);
        };
        fetchData();
        return () => {};
    }, [debouncedValue]);

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/products?keyword=${debouncedValue}`);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current.contains(e.target)) return;
            setIsShow(false);
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <form
            ref={searchRef}
            className={cx(className, "search")}
            onSubmit={(e) => handleSubmit(e)}
        >
            <label htmlFor="search">
                <i className="fi fi-br-search"></i>
            </label>
            <input
                id="search"
                name="search"
                placeholder="Tìm kiếm sản phẩm"
                onChange={(e) => setValue(e.target.value.trim())}
                onFocus={() => setIsShow(true)}
                value={value}
            />
            {isShow && data.products && (
                <ul className={cx("result")}>
                    {data.products?.map((product, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    className={cx("link")}
                                    href={`/products/${product.slug}`}
                                    onClick={() => setIsShow(false)}
                                >
                                    <div className={cx("image")}>
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            width={100}
                                            height={80}
                                        />
                                    </div>
                                    <div className={cx("info")}>
                                        <span className={cx("infoName")}>
                                            {product.name}
                                        </span>
                                        <span className={cx("infoPrice")}>
                                            {formattedPrice(product.price)}
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                    <li>
                        <Link
                            className={cx("link", "tail")}
                            href={`/products?keyword=${debouncedValue}`}
                            onClick={() => setIsShow(false)}
                        >
                            Xem tất cả ({data.total || 0})
                        </Link>
                    </li>
                </ul>
            )}
        </form>
    );
}
