/** @format */

import axios from "axios";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateFood = () => {
	const foodData = useLoaderData();
	const navigate = useNavigate();
	const {
		_id,
		foodName,
		foodImage,
		quantity,
		pickupLocation,
		donator,
		expiredDate,
		additional,
	} = foodData || {};
	const { donatorName } = donator || {};

	const handleUpdate = (e) => {
		e.preventDefault();
		// const expiredDate = new Date(startDate).toLocaleDateString();
		const updatedFormData = new FormData(e.target);
		const updatedQuantity = updatedFormData.get("quantity");
		const updatedPickupLocation = updatedFormData.get("pickupLocation");
		const updatedFoodName = updatedFormData.get("foodName");
		const updatedFoodImage = updatedFormData.get("foodImage");
		const updatedStatus = updatedFormData.get("status");
		const updatedExpiredDate = updatedFormData.get("expiredDate");
		const updatedAdditional = updatedFormData.get("additional-text");
		const updatedDonatorName = updatedFormData.get("donatorName");
		const updateFormDoc = {
			updatedQuantity,
			updatedPickupLocation,
			updatedFoodName,
			updatedFoodImage,
			updatedStatus,
			updatedExpiredDate,
			updatedAdditional,
			updatedDonatorName,
		};
		console.log(foodImage);
		axios
			.put(
				`https://assignment-11-server-side-psi.vercel.app/updateFoodInfo/${_id}`,
				updateFormDoc,
			)
			.then((res) => {
				if (res.data.modifiedCount == 0) return toast.error("Pls Change Any");
				if (res.data.modifiedCount > 0) {
					toast.success("Update Successfully");
					navigate("/manage-my-foods");
				}
			});
	};

	return (
		<div>
			<Helmet>
				<title>Update Food | Banquet Buddy</title>
			</Helmet>
			<div className="mx-auto bg-fuchsia-200 w-11/12 max-w-5xl rounded-xl p-3 mb-8">
				<form
					className="grid grid-cols-1 gap-6 p-5 mt-4 sm:grid-cols-2"
					onSubmit={handleUpdate}
				>
					<div>
						<label className="dark:text-gray-200" htmlFor="donatorName">
							Donator Name
						</label>
						<input
							id="donatorName"
							name="donatorName"
							defaultValue={donatorName}
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
						/>
					</div>
					<div>
						<label className="dark:text-gray-200" htmlFor="foodname">
							Food Name
						</label>
						<input
							id="foodname"
							name="foodName"
							defaultValue={foodName}
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
						/>
					</div>
					<div>
						<label className="  dark:text-gray-200" htmlFor="foodnameI">
							Food Quantity
						</label>
						<input
							id="foodnameI"
							name="quantity"
							defaultValue={quantity}
							type="number"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
						/>
					</div>
					<div>
						<label className="  dark:text-gray-200" htmlFor="expiredDate">
							Expired Date
						</label>
						<input
							name="expiredDate"
							id="expiredDate"
							defaultValue={expiredDate}
							// placeholder="Enter Here Food Name"
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
						/>
					</div>
					<div>
						<label className="  dark:text-gray-200" htmlFor="pickup">
							Pickup Location
						</label>
						<input
							name="pickupLocation"
							id="pickup"
							defaultValue={pickupLocation}
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
						/>
					</div>
					<div>
						<label className="  dark:text-gray-200" htmlFor="status">
							status
						</label>
						<select
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
							name="status"
							id="status"
						>
							<option selected value="Available">
								Available
							</option>
							<option value="Not Available">Not Available</option>
						</select>
					</div>
					<div className="col-span-2">
						<label className=" dark:text-gray-200" htmlFor="img">
							Food Image Url
						</label>
						<input
							name="foodImage"
							id="img"
							defaultValue={foodImage}
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
						/>
					</div>
					<div className="col-span-2">
						<label className="  dark:text-gray-200" htmlFor="text">
							Your Text
						</label>
						<textarea
							defaultValue={additional}
							name="additional-text"
							id="text"
							rows="2"
							className="w-full bg-white text-gray-700 dark:text-gray-200 textarea textarea-accent"
							placeholder="Write Your Text ..."
						></textarea>
					</div>
					<div className="form-action text-center col-span-2">
						<button className="btn form-action btn-warning ml-4">Update</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateFood;
{
	/* <Link to={`/update-food/${_id}`}> */
}
