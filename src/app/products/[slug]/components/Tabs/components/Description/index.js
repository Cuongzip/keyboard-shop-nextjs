import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./Description.module.css";

const cx = classNames.bind(styles);

export default function Description() {
    return (
        <div className={cx("descTab")}>
            <p>
                <b>80Retros Game 1989 65 (GB65)</b> được lấy cảm hứng từ
                <b> GAMEBOY</b> – một trong những máy chơi game cầm tay nổi
                tiếng.
            </p>

            <h3 className="my-1">
                <b>🔖 Thông tin sản phẩm:</b>
            </h3>

            <ul className="ms-3">
                <li>Maker: 80Retros</li>
                <li>Layout: 65%</li>
                <li>Plate: Alu non-flex</li>
                <li>Mounting: Gasket mount (Silicon)</li>
                <li>PCB: Hotswap 1.6mm non-flex</li>
                <li>Chất liệu: Nhôm 6063 CNC</li>
                <li>Góc nghiêng: 5°</li>
            </ul>

            <h3 className="my-3">
                <b>Cấu trúc bàn phím</b>
            </h3>

            <Image
                src="/images/keyboards/80Retros-GB65/structure.webp"
                alt=""
                width={800}
                height={500}
            />

            <Image
                src="/images/keyboards/80Retros-GB65/size.webp"
                alt=""
                width={800}
                height={500}
            />
        </div>
    );
}
