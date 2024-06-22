/** @format */

import { ScrollRestoration, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const SingleFoodDetails = () => {
	// const axiosSecure = useAxiosInstance();
	// new Date().toLocaleString();
	const [startDate, setStartDate] = useState(new Date().toLocaleString());
	const data = useLoaderData();
	const { user } = useAuth();
	const {
		_id,
		foodName,
		foodImage,
		quantity,
		pickupLocation,
		donator,
		expiredDate,
		additional,
	} = data || {};
	const { donatorName, donatorEmail } = donator || {};
	const requestedFood = {
		foodName,
		foodImage,
		quantity,
		pickupLocation,
		donator,
		currentDate: startDate,
		expiredDate,
		additional,
		email: user?.email,
	};
	const status = { status: "Not Available" };
	const handleRequestedButton = () => {
		axios
			.post(
				`https://assignment-11-server-side-psi.vercel.app/requested-foods-collection`,
				requestedFood,
			)
			.then((res) => {
				console.log(res.data);
				if (res.data.acknowledged) {
					toast.success("Successfully  Requested");
				}
			});
		axios
			.patch(
				`https://assignment-11-server-side-psi.vercel.app/updateStatus/${_id}`,
				status,
			)
			.then((res) => console.log(res.data));
	};

	// console.log(foodData);
	return (
		<div className="lg:w-3/4 mb-6 mt-2 mx-auto">
			<ScrollRestoration />
			<Helmet>
				<title>Food Details | Banquet Buddy</title>
			</Helmet>
			<div data-aos="zoom-in-up" className="md:w-11/12 mx-auto">
				<div className="card h-full bg-base-100 shadow-xl">
					<figure>
						<img src={foodImage} alt="food" className="w-96" />
					</figure>
					<div className="card-body">
						<h2 className="fom">
							<span className="font-bold">Food:</span> {foodName}
						</h2>
						<p>
							<span className="font-bold">Pickup:</span> {pickupLocation}
						</p>
						<p>
							<span className="font-bold">Expired Date:</span> {expiredDate}
						</p>
						<p>
							<span className="font-bold">Quantity:</span> {quantity}
						</p>
						<p>
							<span className="font-bold">Additional:</span>
							{additional ? additional : "Food donation is a best works"}
						</p>
						<div className="flex items-center gap-3">
							<img
								className="rounded-full w-14"
								src={donator.donatorPhotoURL}
								alt="img not found"
							/>
							<p>
								<span className="font-bold">Donator:</span>
								{donator.donatorName}
							</p>
						</div>
						<div className="card-actions justify-center">
							<button
								onClick={() => {
									if (user?.email === donatorEmail)
										return toast.error("You Are Donate This Food");
									document.getElementById("my_modal_5").showModal();
								}}
								className="btn btn-md btn-accent hover:btn-error"
							>
								Request
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Open the modal using document.getElementById('ID').showModal() method */}

			<dialog id="my_modal_5" className="modal">
				<div className="modal-box w-11/12 grid grid-cols-1 lg:grid-cols-2 max-w-6xl">
					<div className=" flex items-center justify-center mx-auto">
						<img
							className="w-11/12  mx-auto max-h-96 rounded-lg"
							src={foodImage}
							alt=""
						/>
					</div>

					<div className="gap-4 mt-4 ">
						<div>
							<label className="  dark:text-gray-200" htmlFor="foodname">
								Food Name
							</label>
							<input
								id="foodname"
								defaultValue={foodName}
								readOnly
								type="text"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
							/>
						</div>
						<div>
							<label className="  dark:text-gray-200" htmlFor="foodnameI">
								Food Id
							</label>
							<input
								id="foodnameI"
								defaultValue={_id}
								readOnly
								type="text"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
							/>
						</div>
						<div>
							<label className="  dark:text-gray-200" htmlFor="foodDonator">
								Food Donator
							</label>
							<input
								id="foodDonator"
								defaultValue={donatorName}
								readOnly
								type="text"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
							/>
						</div>
						<div>
							<label className="  dark:text-gray-200" htmlFor="DonatorEmail">
								Donator Email
							</label>
							<input
								id="DonatorEmail"
								defaultValue={donatorEmail}
								readOnly
								type="text"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
							/>
						</div>
						<div>
							<label className="  dark:text-gray-200" htmlFor="userEmail">
								Your Email
							</label>
							<input
								id="userEmail"
								defaultValue={user?.email}
								readOnly
								type="text"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
							/>
						</div>
						<div>
							<label className="  dark:text-gray-200" htmlFor="currentDate">
								Current Date
							</label>
							<input
								id="currentDate"
								defaultValue={startDate}
								readOnly
								type="text"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
							/>
						</div>
						<div>
							<label className="  dark:text-gray-200" htmlFor="expiredDate">
								Expired Date
							</label>
							<input
								id="expiredDate"
								defaultValue={expiredDate}
								readOnly
								type="text"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
							/>
						</div>
						<div>
							<label className="  dark:text-gray-200" htmlFor="pickup">
								Pickup Location
							</label>
							<input
								id="pickup"
								defaultValue={pickupLocation}
								readOnly
								type="text"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
							/>
						</div>
						<div className="col-span-2">
							<label className="  dark:text-gray-200" htmlFor="text">
								Your Text
							</label>
							<textarea
								name="text"
								id="text-area"
								rows="2"
								className="w-full bg-white text-gray-700 dark:text-gray-200 textarea textarea-accent"
								placeholder="Write Your Text ..."
							></textarea>
						</div>
					</div>

					<div className="mx-auto ">
						<form
							onSubmit={(e) => e.preventDefault()}
							className="mx-auto gap-4"
						>
							{/* if there is a button in form, it will close the modal */}
							<button
								onClick={() => {
									requestedFood.textArea =
										document.getElementById("text-area").value;
									handleRequestedButton();
									document.getElementById("my_modal_5").close();
								}}
								className="btn btn-accent"
							>
								Confirm
							</button>
							<button
								onClick={() => document.getElementById("my_modal_5").close()}
								className="btn btn-warning ml-3"
							>
								Close
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default SingleFoodDetails;
