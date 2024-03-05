"use client";
import CrudModal from "@/Components/Modal/Modal";
import app from "@/firebase/config";
import { getAuth, onAuthStateChanged, User } from "firebase/auth"; // Import User type
import React, { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

type Props = {};

const Profile = (props: Props) => {
	const [user, setUser] = useState<User | null | any>(null);
	const [imgUrl, setImgUrl] = useState<string | null | any>("");

	const auth = getAuth(app);

	useEffect(() => {
		onAuthStateChanged(auth, (user: User | null) => {
			if (user) {
				setUser(user);
				setImgUrl(user?.photoURL);
				console.log("user: ", user);
			}
		});
	}, []);

	const formatDate = (dateTime: string | undefined): string => {
		if (dateTime) {
			const dateObj = new Date(dateTime);
			const options: any = {
				day: "2-digit",
				month: "long",
				year: "numeric",
			};
			const formattedDate = dateObj.toLocaleDateString("en-US", options);
			return formattedDate;
		}
		return "";
	};

	return (
		<div className="mt-20 lg:mt-20 text-center">
			<div className="flex  items-center justify-center mb-3 lg:mb-5">
				<div>
					{imgUrl && (
						<img
							src={imgUrl}
							alt={"user image"}
							className="rounded-[50%] lg:w-40"
						/>
					)}
				</div>
			</div>
			<div className="text-2xl mb-3 lg:mb-5 lg:text-4xl">
				{user?.displayName}
			</div>
			<div className="mb-3 lg:mb-5 flex gap-5 items-center justify-center lg:text-2xl">
				<div className="">Followers: 123</div>
				<div className="">Folllowing: 123</div>
			</div>
			<div className="lg:text-2xl">
				Joined on: {formatDate(user?.metadata?.creationTime)}
			</div>
			<div className="flex items-center lg:text-2xl justify-center gap-3 mb-3 cursor-pointer lg:mb-5">
				<div>
					<FaLink />
				</div>
				<div>Add personal website</div>
			</div>
			<div className="px-5 cursor-pointer lg:text-2xl">
				Bio: Write something about yourself!!
			</div>
			<div className="">
				<CrudModal />
			</div>
		</div>
	);
};

export default Profile;
