import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Appbar } from "@/components/Appbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ChainRisk",
	description: "This is Chain Risk Assignments",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="min-w-screen min-h-screen bg-[#ebe6e6]">
					<Appbar />
					{children}
				</div>
			</body>
		</html>
	);
}
