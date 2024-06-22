/** @format */

import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosInstance from "../hooks/useAxiosInstance";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
	const axiosSecure = useAxiosInstance();
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	//create by email & pass
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// sign in by email & pass
	const signInByEmailPass = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	// sign with google
	const signInWithGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};
	// sign with github
	const signWithGithub = () => {
		return signInWithPopup(auth, githubProvider);
	};
	// sign out
	const logOut = () => {
		return signOut(auth);
	};
	// update user profile
	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	// manage current user
	useEffect(() => {
		const clearUser = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
			const userPayloadData = { email: currentUser?.email || user?.email };
			if (currentUser) {
				axiosSecure
					.post("/jwt", userPayloadData)
					.then((res) => (res.data));
			}
			if(!user){
			axiosSecure.post('/clearCookies').then(res => (res.data))
			}
		});
		return () => {
			clearUser();
		};
	}, []);

	const authInfo = {
		user,
		loading,
		createUser,
		updateUserProfile,
		setUser,
		signInByEmailPass,
		signInWithGoogle,
		signWithGithub,
		logOut,
	};
	return (
		<>
			<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
		</>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
