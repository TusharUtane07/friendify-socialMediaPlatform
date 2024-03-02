"use client";
import Button from "@/Components/Button/button";
import app from "@/firebase/config";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation"; // Changed from "next/navigation"
import React, { useEffect } from "react";

type Props = {};

const Login = (props: Props) => {
	const navigate = useRouter();
	const auth = getAuth(app);
	const googleProvider = new GoogleAuthProvider();
	const signIn = async () => {
		try {
			const res = await signInWithPopup(auth, googleProvider);
			console.log(res.user.displayName);
		} catch (error) {
			console.error("Error signing in:", error);
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (response) => {
			if (response) {
				navigate.push("/");
			} else {
				navigate.push("/login");
			}
		});

		// Clean up subscription on unmount
		return () => unsubscribe();
	}, [auth, navigate]);

	return (
		<div className="">
			Login
			<div onClick={signIn}>
				<Button btnName={"Login with Google"} />
			</div>
		</div>
	);
};

export default Login;
