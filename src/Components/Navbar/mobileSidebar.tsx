"use client";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Button from "../Button/button";
import {
	FaBookmark,
	FaHome,
	FaNewspaper,
	FaSearch,
	FaUser,
} from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import {
	getAuth,
	signOut as firebaseSignOut,
	onAuthStateChanged,
} from "firebase/auth";
import app from "@/firebase/config";
import { useRouter } from "next/navigation";

const MobileSidebar = () => {
	const [userName, setUserName] = useState<any>("");
	const [nav, setNav] = useState<boolean>(false);
	const navigate = useRouter();

	const auth = getAuth(app);
	const handleSignOut = () => {
		firebaseSignOut(auth)
			.then(() => {
				console.log("Success Signing Out");
				navigate.push("/login");
				setNav(!nav);
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

	const handleClick = () => {
		navigate.push("/login");
		setNav(!nav);
	};

	return (
		<div>
			<div className="">
				<div className=" h-16 flex fixed w-full bg-black text-white items-center justify-between font-be md:h-16 lg:hidden">
					<div className="text-2xl ml-4 md:text-3xl md:ml-5">
						<span className="font-bold uppercase">Friendify</span>
					</div>

					<div className="mr-4 md:mr-5">
						<GiHamburgerMenu
							onClick={() => setNav(!nav)}
							className="cursor-pointer text-3xl md:text-4xl"
						/>
					</div>

					<div
						className={
							nav
								? "fixed top-0 left-0 w-screen h-screen bg-black text-white z-10 duration-700"
								: "fixed top-0 left-[-100%] w-[100px] h-screen bg-black text-white z-10 duration-700"
						}>
						<RxCross1
							onClick={() => setNav(!nav)}
							size={30}
							className="absolute right-3 top-5 cursor-pointer md:right-10 md:top-7 "
						/>
						<div className="text-2xl ml-3 mt-5 md:text-4xl md:ml-5 md:mt-5">
							<span className="font-bold uppercase">Friendify</span>
						</div>
						<div className="text-center flex items-center gap-3 justify-center cursor-pointer mt-20 text-2xl md:text-3xl md:mt-10">
							<FaHome />
							Home
						</div>
						<div className="text-center flex items-center gap-3 justify-center cursor-pointer mt-8 text-2xl md:text-3xl md:mt-10">
							<FaSearch />
							Explore
						</div>
						<div className="text-center flex items-center gap-3 justify-center cursor-pointer mt-8 text-2xl md:text-3xl md:mt-10">
							<FaNewspaper />
							News
						</div>
						<div className="text-center flex items-center gap-3 justify-center cursor-pointer mt-8 text-2xl md:text-3xl md:mt-10">
							<MdMessage />
							Messages
						</div>
						<div className="text-center flex items-center gap-3 justify-center cursor-pointer mt-8 text-2xl md:text-3xl md:mt-10">
							<FaBookmark />
							Bookmarks
						</div>
						<div className="text-center flex items-center gap-3 justify-center cursor-pointer mt-8 text-2xl md:text-3xl md:mt-10">
							<IoNotifications />
							Notifications
						</div>
						<div className="text-center flex items-center gap-3 justify-center cursor-pointer mt-8 text-2xl md:text-3xl md:mt-10">
							<FaUser />
							Profile
						</div>
						{userName ? (
							<>
								<div className="text-center flex items-center gap-3 justify-center cursor-pointer mt-8 text-2xl md:text-3xl md:mt-10">
									Hey, {userName}
								</div>
								<div
									className="text-center flex items-center gap-3 justify-center cursor-pointer mt-8 text-2xl md:text-3xl md:mt-10"
									onClick={handleSignOut}>
									<Button btnName={"Logout"} />
								</div>
							</>
						) : (
							<div
								className="text-center flex items-center gap-3 justify-center cursor-pointer mt-8 text-2xl md:text-3xl md:mt-10"
								onClick={handleClick}>
								<Button btnName={"Login"} />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileSidebar;
