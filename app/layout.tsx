import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "七聖吊車 | 高雄專業吊卡車出租 - 17噸/18噸吊籃作業 | 專營鐵材與太陽能吊裝",
    description: "提供高雄、台南、屏東地區 17 噸與 18.5 噸吊卡車及吊籃出租。專營電纜線輪、鐵材、太陽能板吊運。報價透明，具備專業判斷力，可開立三聯式發票，工安第一絕不超載。",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-TW">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
