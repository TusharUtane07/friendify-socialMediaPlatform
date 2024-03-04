"use client";
import React from "react";
import MobileSidebar from "./mobileSidebar";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";

const Navbar = () => {
	const pathName = usePathname();

	return (
		<div className={pathName === "/login" ? "hidden" : "block"}>
			<MobileSidebar />
			<Sidebar />
		</div>
	);
};

export default Navbar;
