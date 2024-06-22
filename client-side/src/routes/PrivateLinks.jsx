/** @format */

import { NavLink, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateLinks = () => {
	const { user } = useAuth();
	if (user)
		return (
			<>
				<NavLink to="/add-food">
					<li>
						<a>Add Food</a>
					</li>
				</NavLink>
				<NavLink to="/manage-my-foods">
					<li>
						<a>Manage My Food</a>
					</li>
				</NavLink>
				<NavLink to="/my-food-request">
					<li>
						<a>My Food Request</a>
					</li>
				</NavLink>
			</>
		);
	// return <Navigate to="/" />;
};

export default PrivateLinks;
