/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import useAuth from "../../hooks/useAuth";
import MyFoodRow from "./MyFoodRow";
import Loader from "../../shared/Loader";
import { ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import NotData from "../../shared/NotData";

const MyFoodRequest = () => {
	const axiosSecure = useAxiosInstance();
	const { user } = useAuth();
	const { data, isLoading } = useQuery({
		queryKey: ["my-food-request"],
		queryFn: () =>
			axiosSecure
				.get(`/my-requested-foods?email=${user?.email}`)
				.then((res) => res.data),
	});
	if (isLoading) {
		return <Loader />;
	}
	if (data.length <= 0) return <NotData />;

	return (
		<div className="min-h-[calc(100vh-300px)]">
			<Helmet>
				<title>My Request Food | Banquet Buddy</title>
			</Helmet>
			<ScrollRestoration />
			<div>
				<h2 className="text-xl text-center my-4 font-bold ">My Food Request</h2>
			</div>
			<div className="overflow-x-auto hidden md:block lg:block my-8">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Expired Date</th>
							<th>Requested Date</th>
							<th className="hidden lg:block">Food Name</th>
							<th>Food Quantity</th>
							<th>Pickup</th>
							<th>Donator</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{data?.map((food) => (
							<MyFoodRow key={food._id} food={food} />
						))}
					</tbody>
				</table>
			</div>

			<div className="block md:hidden space-y-4 lg:hidden">
				{data?.map((food) => (
					<div key={food._id} className="w-11/12 mx-auto">
						<div className="card h-full bg-base-100 shadow-xl">
							<figure>
								<img src={food.foodImage} alt="food" className="w-96" />
							</figure>
							<div className="card-body">
								<h2 className="fom">
									<span className="font-bold">Food:</span> {food.foodName}
								</h2>
								<p>
									<span className="font-bold">Pickup:</span>{" "}
									{food.pickupLocation}
								</p>
								<p>
									<span className="font-bold">Expired Date:</span>{" "}
									{food.expiredDate}
								</p>
								<p>
									<span className="font-bold">Current Date:</span>{" "}
									{food.currentDate}
								</p>
								<p>
									<span className="font-bold">Quantity:</span> {food.quantity}
								</p>
								<p>
									<span className="font-bold">Additional:</span>
									{food.additional
										? food.additional.slice(0, 50)
										: "Food donation is a best works"}
								</p>
								<div className="flex items-center gap-3">
									<img
										className="rounded-full w-14"
										src={food.donator.donatorPhotoURL}
										alt=""
									/>
									<p>
										<span className="font-bold">Donator:</span>
										{food.donator.donatorName}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyFoodRequest;
