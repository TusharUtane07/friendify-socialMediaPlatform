import React from "react";
import {
	FaBookmark,
	FaHome,
	FaNewspaper,
	FaSearch,
	FaUser,
} from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import Button from "../Button/button";

const Sidebar = () => {
	return (
		<div className="hidden lg:flex  flex-col pt-10 items-center border-r-2 border-white/45 fixed w-1/4 h-screen ">
			<div className="">
				<span className="font-bold text-5xl uppercase">Friendify</span>
			</div>
			<div className="w-full h-[1px] mt-8 bg-white/45"></div>
			<div className="cursor-pointer flex items-center justify-center text-2xl gap-3 mt-10">
				<FaHome />
				Home
			</div>
			<div className="cursor-pointer flex items-center justify-center text-2xl gap-3 mt-5">
				<FaNewspaper />
				News
			</div>
			<div className="cursor-pointer flex items-center justify-center text-2xl gap-3 mt-5">
				<FaUser />
				Profile
			</div>
			<div className="cursor-pointer flex items-center justify-center text-2xl gap-3 mt-5">
				<FaSearch />
				Explore
			</div>

			<div className="cursor-pointer flex items-center justify-center text-2xl gap-3 mt-5">
				<MdMessage />
				Messages
			</div>
			<div className="cursor-pointer flex items-center justify-center text-2xl gap-3 mt-5">
				<FaBookmark />
				Bookmarks
			</div>
			<div className="cursor-pointer flex items-center justify-center text-2xl gap-3 mt-5">
				<IoNotifications />
				Notifications
			</div>
			<div className="absolute bottom-3">
				<div className="flex items-center justify-center text-2xl gap-3 ">
					Hey, Tushar Utane
				</div>
				<div className="flex items-center justify-center text-xl gap-3 mt-1">
					<Button btnName={"Logout"} />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
