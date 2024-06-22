/** @format */
import { LuLayoutDashboard } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FoodCard from "./FoodCard";
import { useState } from "react";
import axios from "axios";
import Loader from "../../../shared/Loader";
const Foods = () => {
	const [layout, setLayout] = useState(true);
	const {
		data: foods,
		isLoading,
		isPending,
		error,
		isError,
	} = useQuery({
		queryKey: ["foods"],
		queryFn: () =>
			axios
				.get("https://assignment-11-server-side-psi.vercel.app/available-foods")
				.then((res) => res.data),
	});

	if (isLoading || isPending) {
		return <Loader />;
	}

	if (error || isError) {
		console.log(error);
	}
	return (
		<>
			<div className="border-y-2 space-y-2 w-3/4 mx-auto py-4 text-center">
				<h2 className="text-2xl md:text-4xl font-bold font-merriweather ">
					Delicious Discoveries For You
				</h2>
				<p className="font-medium">
					The quality, wholesome prepared food donated from restaurants is a
					welcomed addition in the total effort to eliminate hunger in the
					Bangladesh – The food is deeply appreciated by the food rescue
					programs committed to serving those who experience hunger
				</p>
			</div>
			<div className="flex justify-center my-4">
				<LuLayoutDashboard
					onClick={() => setLayout(!layout)}
					className="text-red-400 text-4xl"
				/>
			</div>

			<section
				className={`grid-cols-1 ${
					layout ? "md:grid-cols-3" : "md:grid-cols-2"
				} w-11/12 mx-auto grid  gap-4 `}
			>
				{foods?.sort((a, b) => b.quantity - a.quantity).slice(0, 6)?.map((food, index) => (
					<FoodCard food={food} key={index} />
				))}
			</section>

			<div className="text-center mt-4">
				<Link to="/available-foods">
					<button className="btn btn-accent">Show All</button>
				</Link>
			</div>
		</>
	);
};

export default Foods;
