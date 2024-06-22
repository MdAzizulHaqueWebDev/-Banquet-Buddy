/** @format */

import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
	// console.log(food);
	const {
		_id,
		foodName,
		foodImage,
		quantity,
		pickupLocation,
		donator,
		expiredDate,
		additional,
		status
	} = food || {};
	return (
	<div data-aos="zoom-in-up" data-aos-duration="2000" className="w-11/12 mx-auto">
			<div className="card h-full hover:scale-95 transition bg-base-100 shadow-xl">
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
						{additional? additional.slice(0, 50) : "Food donation is a best works"}
					</p>
					<div className="flex items-center gap-3">
						<img
							className="rounded-full w-14"
							src={donator.donatorPhotoURL}
							alt=""
						/>
						<p>
							<span className="font-bold">Donator:</span>
							{donator.donatorName}
						</p>
					</div>
					<div className="card-actions justify-center">
						<Link to={`/food-details/${_id}`}>
							<button className="btn btn-md btn-accent hover:btn-error">
								Details
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
