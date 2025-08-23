import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "../styles/global.css";
import { Provider } from "@/app/provider";

export const metadata: Metadata = {
	title: "Kansha game",
	description: "感謝の気持ちを忘れないゲーム",
};

export const NotoSansJP = Noto_Sans_JP({
	weight: ["400", "500", "700"],
	display: "swap",
	subsets: ["latin"],
	variable: "--font-noto-sans-jp",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning className={`${NotoSansJP.variable}`}>
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
