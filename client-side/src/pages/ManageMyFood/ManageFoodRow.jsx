/** @format */

import { FaRegEdit } from "react-icons/fa";
import Types from "prop-types";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const ManageFoodRow = ({ food, uiUpadte }) => {
	const { _id, expiredDate, foodName, foodImage, quantity } = food;

	const handleDelete = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(`https://assignment-11-server-side-psi.vercel.app/deleteFood/${_id}`)
					.then((res) => {
						if (res.data.deletedCount > 0) {
							uiUpadte();
							Swal.fire({
								title: "Deleted!",
								text: "Your file has been deleted.",
								icon: "success",
							});
						}
					});
			}
		});
	};

	return (
		<>
			<tr>
				<th>{expiredDate}</th>
				<td>
					<div className="flex items-center gap-3">
						<div className="avatar">
							<div className="mask mask-squircle w-12 h-12">
								<img src={foodImage} alt="food img" />
							</div>
						</div>
					</div>
				</td>
				<td className="hidden lg:block">{foodName}</td>
				<td>{quantity}</td>
				<td className="space-y-1">
					<Link to={`/update-food/${_id}`}>
						<button
							data-tip="Update Food Info"
							className="btn tooltip-accent tooltip tooltip-top btn-ghost text-xl bg-accent btn-sm mr-2"
						>
							<FaRegEdit />{" "}
						</button>
					</Link>
					<button
						onClick={handleDelete}
						data-tip="Delete Food"
						className="btn  tooltip-error btn-ghost text-xl tooltip tooltip-top bg-error btn-sm"
					>
						<MdDeleteForever />
					</button>
				</td>
			</tr>
		</>
	);
};

ManageFoodRow.propTypes = {
	food: Types.object.isRequired,
	uiUpadte: Types.func,
};

export default ManageFoodRow;
