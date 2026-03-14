"use client";
import classNames from "classnames/bind";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";

import styles from "./Pagination.module.css";

const cx = classNames.bind(styles);

export default function Pagination({ totalPages, page }) {
    const router = useRouter();
    const handlePageClick = (e) => {
        const page = e.selected + 1;

        router.push(`/products?page=${page}`);
    };

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            forcePage={page - 1}
            pageCount={totalPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={cx("pagination")}
            pageLinkClassName={cx("link")}
            activeLinkClassName={cx("active")}
            previousClassName={cx("btn")}
            nextClassName={cx("btn")}
            disabledClassName={cx("disable")}
        />
    );
}
