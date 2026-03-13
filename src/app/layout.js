import { Header, Footer, Chat } from "@/components/layout";

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
                <main className="container main">{children}</main>
                <Footer />
                <Chat />
            </body>
        </html>
    );
}
