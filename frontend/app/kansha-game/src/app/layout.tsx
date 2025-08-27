import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "../styles/global.css";
import { Provider } from "@/app/provider";

export const NotoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kansha game",
  description: "感謝の気持ちを忘れないゲーム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={NotoSansJP.className}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
