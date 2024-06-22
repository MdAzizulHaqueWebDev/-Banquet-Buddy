
const MyFoodRow = ({food}) => {
    const {
		expiredDate,
		foodName,
		foodImage,
		currentDate,
		quantity,
		pickupLocation,
		donator,
	} = food;
    return (
        <>
           <tr>
				<th>{expiredDate}</th>
				<td>
					{currentDate}
					{/* <div className="flex items-center gap-3">
						<div className="avatar">
							<div className="mask mask-squircle w-12 h-12">
								<img src={foodImage} alt="food img" />
							</div>
						</div>
					</div> */}
				</td>
				<td className="hidden lg:block">{foodName}</td>
				<td>{quantity}</td>
				<td>{pickupLocation}</td>
				<td>{donator.donatorName}</td>
			</tr> 
        </>
    );
};

export default MyFoodRow;