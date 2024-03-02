"use client";
import React, { useEffect, useState } from "react";
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
import {
	getAuth,
	signOut as firebaseSignOut,
	onAuthStateChanged,
} from "firebase/auth";
import app from "@/firebase/config";
import { useRouter } from "next/navigation";

const Sidebar = () => {
	const [userName, setUserName] = useState<any>("");
	const navigate = useRouter();

	const auth = getAuth(app);
	const handleSignOut = () => {
		setUserName("");
		firebaseSignOut(auth)
			.then(() => {
				console.log("Success Signing Out");
				navigate.push("/login");
			})
			.catch((error) => {
				console.log("error signing out: " + error.message);
			});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUserName(user?.displayName);
			} else {
				console.log("User is not logged in");
			}
		});
	}, []);

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
				{userName ? (
					<>
						<div className="flex items-center justify-center text-2xl gap-3 ">
							Hey, {userName}
						</div>
						<div
							className="flex items-center justify-center text-xl gap-3 mt-1"
							onClick={handleSignOut}>
							<Button btnName={"Logout"} />
						</div>
					</>
				) : (
					<div
						className="flex items-center justify-center text-xl gap-3 mt-1"
						onClick={() => navigate.push("/login")}>
						<Button btnName={"Login"} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Sidebar;
