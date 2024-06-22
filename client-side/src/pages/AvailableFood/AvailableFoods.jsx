/** @format */

// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AvailableFoodCard from "./AvailableFoodCard";
import { Helmet } from "react-helmet-async";
import Loader from "../../shared/Loader";
import not_found from "../../assets/food-not-found-img.jpg";
import { ScrollRestoration } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsLayoutSplit, BsLayoutThreeColumns } from "react-icons/bs";
const AvailableFoods = () => {
	const [layout, setLayout] = useState(true);
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState("");
	const [availableFoods, setAvailableFoods] = useState([]);
	// const { data: availableFoods, isLoading, refetch } = useQuery({
	// 	queryKey: ["available-foods"],
	// 	queryFn: () =>
	// 		axios
	// 			.get(`/https://assignment-11-server-side-psi.vercel.app/available-foods?search=${search}`)
	// 			.then((res) => res.data),
	// });
	useEffect(() => {
		axios
			.get(
				`https://assignment-11-server-side-psi.vercel.app/available-foods?search=${search}&sort=${sort}`,
			)
			.then((res) => {
				setAvailableFoods(res.data);
			});
	}, [search, sort]);

	const handleSearch = (e) => {
		e.preventDefault();
		const searchValue = e.target.search.value;
		setSearch(searchValue);
		// refetch()
	};
	if (search && availableFoods.length <= 0)
		return (
			<>
				<section className="sticky p-3 top-14 md:top-16 backdrop-filter backdrop-blur-[20px] backdrop-saturate-[300%] bg-[rgba(255,_255,_255,_0.31)]  z-20 flex justify-evenly  my-3 md:my-6 items-center">
					<div className="lg:flex items-center space-y-2 gap-4">
						<form onSubmit={handleSearch}>
							<label className="flex input input-bordered items-center justify-between ">
								<input name="search" type="text" placeholder="Search" />
								<button className="btn justify-end btn-md py-1">
									{" "}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
										fill="currentColor"
										className="w-4 h-4 opacity-70"
									>
										<path
											fillRule="evenodd"
											d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</label>
						</form>
						<div className="flex gap-4">
							<select
								onChange={(e) => setSort(e.target.value)}
								className="select select-bordered "
							>
								<option disabled selected>
									Sort View
								</option>
								<option value="date">Sort By Expired Date</option>
								<option value="quantity">Sort by Quantity</option>
							</select>
							<div className="text-xl">
								View :
								<button
									onClick={() => setLayout(!layout)}
									className="btn btn-outline hover:btn-warning  tooltip"
									data-tip={layout ? "two coloum" : "three coloum"}
								>
									{layout ? <BsLayoutSplit /> : <BsLayoutThreeColumns />}
								</button>
							</div>
						</div>
					</div>
				</section>
				<div>
					<p className="text-2xl text-center text-rose-500 my-2">
						Not Found Search Food
					</p>
					<img
						className="w-1/3 my-4 lg:p-8 p-4 max-h-[600px] mx-auto"
						src={not_found}
						alt=""
					/>
				</div>
			</>
		);
	if (availableFoods.length <= 0) return <Loader />;
	return (
		<>
			<section className="sticky p-3 top-14 md:top-16 backdrop-filter backdrop-blur-[10px] backdrop-saturate-[300%] bg-[rgba(255,_255,_255,_0.31)]   z-20  flex justify-evenly  my-3 md:my-6 items-center">
				<div className=" lg:flex items-center space-y-2 gap-4">
					<form onSubmit={handleSearch}>
						<label className="flex input input-bordered items-center justify-between ">
							<input name="search" type="text" placeholder="Search" />
							<button className="btn justify-end btn-md py-1">
								{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="w-4 h-4 opacity-70"
								>
									<path
										fillRule="evenodd"
										d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</label>
					</form>
					<div className="flex gap-4">
						<select
							onChange={(e) => setSort(e.target.value)}
							className="select select-bordered "
						>
							<option disabled selected>
								Sort View
							</option>
							<option value={"date"}>Sort by Expired Date</option>
							<option value="quantity">Sort by Quantity</option>
						</select>
						<div className="text-xl hidden md:block">
							View :
							<button
								onClick={() => setLayout(!layout)}
								className="btn btn-outline hover:btn-warning  tooltip"
								data-tip={layout ? "two coloum" : "three coloum"}
							>
								{layout ? <BsLayoutSplit /> : <BsLayoutThreeColumns />}
							</button>
						</div>
					</div>
				</div>
			</section>
			<div
				className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${
					layout ? "md:grid-cols-3" : "md:grid-cols-2"
				}`}
			>
				<ScrollRestoration />
				<Helmet>
					<title>Available Foods | Banquet Buddy</title>
				</Helmet>
				{availableFoods?.map((food) => (
					<AvailableFoodCard food={food} key={food._id} />
				))}
			</div>
		</>
	);
};

export default AvailableFoods;
