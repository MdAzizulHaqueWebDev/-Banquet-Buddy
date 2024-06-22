/** @format */

import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

import useAuth from "../../hooks/useAuth";
import ManageFoodRow from "./ManageFoodRow";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import { Helmet } from "react-helmet-async";
import Loader from "../../shared/Loader";
import { ScrollRestoration } from "react-router-dom";
import NotData from "../../shared/NotData";
const ManageMyFoods = () => {
	const { user } = useAuth();
	const axiosSecure = useAxiosInstance();
	const {
		data: myFoods,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["manage-my-foods"],
		queryFn: () =>
			axiosSecure
				.get(`/manage-my-foods?email=${user?.email}`)
				.then((res) => res.data),
	});
	if (isLoading) return <Loader />;
	// console.log(data);
	const uiUpdate = () => {
		refetch();
	};
	// console.log(myFoods.length);
	if (myFoods.length <= 0)
		return <NotData/>

	// if(myFoods.le)return
	return (
		<div>
			<ScrollRestoration />
			<Helmet>
				<title>Manage Foods | Banquet Buddy</title>
			</Helmet>
			<h2 className="text-xl font-bold text-center">My Foods</h2>
			<div className="overflow-x-auto my-8">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Expired Date</th>
							<th>Food Image</th>
							<th className="hidden lg:block">Food Name</th>
							<th>Food Quantity</th>
							<th>Customization</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{myFoods?.map((food) => (
							<ManageFoodRow uiUpadte={uiUpdate} key={food._id} food={food} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageMyFoods;
