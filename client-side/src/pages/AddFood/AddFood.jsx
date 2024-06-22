/** @format */

import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
const AddFood = () => {
	const { user } = useAuth();
	const [startDate, setStartDate] = useState(new Date());
	const handleAddFoodForm = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const foodName = formData.get("foodName");
		const quantity = formData.get("quantity");
		const foodImage = formData.get("foodImage");
		const pickupLocation = formData.get("pickupLocation");
		const status = formData.get("status");
		const expiredDate = new Date(startDate).toLocaleDateString();
		const additional = formData.get("additional-text");
		const donatorName = user.displayName;
		const donatorEmail = user.email;
		const donatorPhotoURL =
			user.photoURL ||
			"https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png";

		const donator = { donatorName, donatorEmail, donatorPhotoURL };
		// get input file
		// const file = formData.get('file')
		// if(file.type.split("/")[0] !== "image") return toast.error('Only Image File Support')
		// const foodImage = URL.createObjectURL(file)
		const foodData = {
			foodName,
			foodImage,
			quantity,
			pickupLocation,
			status,
			additional,
			expiredDate,
			donator,
		};
		axios.post(`https://assignment-11-server-side-psi.vercel.app/add-food`, foodData).then((res) => {
			if (res.data.acknowledged) {
				event.target.reset();
				toast.success("Successfully Added");
			}
		});
		// console.log(foodData);
	};
	return (
		<div>
			<Helmet>
				<title>Add Food | Banquet Buddy</title>
			</Helmet>
			<section className="max-w-5xl mb-4 text-xl font-merriweather p-6 mx-auto bg-[url('/add-food-bg.svg')]  rounded-md shadow-md dark:bg-gray-800">
				<h2 className="text-lg font-semibold capitalize dark:text-white text-white">
					Add Your Food
				</h2>

				<form onSubmit={handleAddFoodForm}>
					<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
						<div>
							<label
								className="text-white dark:text-gray-200"
								htmlFor="foodname"
							>
								Food Name
							</label>
							<input
								name="foodName"
								id="foodname"
								placeholder="Enter Here Food Name"
								required
								type="text"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							/>
						</div>
						<div>
							<label
								className="text-white dark:text-gray-200"
								htmlFor="foodImg"
							>
								Food Image
							</label>
							<input
								name="foodImage"
								id="foodImg"
								placeholder="Enter Here Food Image Url"
								required
								type="url"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							/>
						</div>
						<div>
							<label
								className="text-white dark:text-gray-200"
								htmlFor="foodQuantity"
							>
								Food Quantity
							</label>
							<input
								name="quantity"
								id="foodQuantity"
								placeholder="Enter Here Food Quantity Kg .."
								required
								type="number"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							/>
						</div>

						<div>
							<label
								className="text-white dark:text-gray-200"
								htmlFor="expiredDate"
							>
								Expired Date
							</label>
							<div>
								<DatePicker
									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
									selected={startDate}
									onChange={(date) => setStartDate(date)}
								/>
							</div>
						</div>
						<div>
							<label
								className="text-white dark:text-gray-200"
								htmlFor="location"
							>
								Pickup Location
							</label>
							<input
								name="pickupLocation"
								id="location"
								required
								type="text"
								placeholder="Enter Your Location"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							/>
						</div>
						<div>
							<label className="text-white dark:text-gray-200" htmlFor="status">
								Food Status
							</label>
							<input
								name="status"
								onClick={() => toast.error("Selected !")}
								id="status"
								defaultValue={"Available"}
								readOnly
								required
								type="text"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							/>
						</div>
					</div>
					<div className="my-2">
						<label className="text-white dark:text-gray-200" htmlFor="text">
							Your Text
						</label>
						<textarea
							name="additional-text"
							id="text"
							rows="3"
							className="w-full bg-white text-gray-700 dark:text-gray-200 textarea textarea-accent"
							placeholder="Write Your Text ..."
						></textarea>
					</div>

					<div className="flex justify-end mt-6">
						<button className="btn btn-accent btn-wide text-xl">Add</button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default AddFood;
