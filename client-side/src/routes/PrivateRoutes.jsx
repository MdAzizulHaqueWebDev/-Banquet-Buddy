/** @format */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../shared/Loader";

const PrivateRoutes = ({ children }) => {
	const location = useLocation()
	const { user,loading } = useAuth();
	if(loading){
	return <Loader/>
	}
	if (user) {
		return children;
	}
	return <Navigate state={location?.pathname} to="/login"/>
};

export default PrivateRoutes;
