import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";

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
		<html suppressHydrationWarning>
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
