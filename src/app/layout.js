import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "./reset.css";
import "./icons.css";
import "./globals.css";

export const metadata = {
    title: "Keyboard shop",
};
export default function Layout({ children }) {
    return (
        <html lang="vi">
            <body cz-shortcut-listen="true">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
