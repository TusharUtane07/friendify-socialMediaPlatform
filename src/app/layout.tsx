import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Friendify ",
	description:
		"Friendify is social media platform, Socialize with community of Like minded people.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<div className="lg:grid lg:grid-cols-4 border border-yellow-500">
					<div className="">
						<Navbar />
					</div>
					<div className="lg:col-span-3 ml-2 pt-10 overflow-scroll h-screen">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
