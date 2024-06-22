/** @format */

import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import ErrorPage from "../pages/Error/ErrorPage";
import Register from "../pages/Register/Register";
import AddFood from "../pages/AddFood/AddFood";
import ManageMyFoods from "../pages/ManageMyFood/ManageMyFoods";
import MyFoodRequest from "../pages/MyFoodRequest/MyFoodRequest";
import AvailableFoods from "../pages/AvailableFood/AvailableFoods";
import SingleFoodDetails from "../pages/SingleFoodDetails";
import PrivateRoutes from "./PrivateRoutes";
import axios from "axios";
import UpdateFood from "../pages/ManageMyFood/UpdateFood";

const routes = createBrowserRouter([
	{
		errorElement: <ErrorPage />,
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/available-foods",
				element: <AvailableFoods />,
			},
			{
				path: "/food-details/:id",
				loader: ({ params }) =>
					axios
						.get(
							`https://assignment-11-server-side-psi.vercel.app/food-details/${params.id}`,
						)
						.then((res) => res.data),
				element: (
					<PrivateRoutes>
						<SingleFoodDetails />
					</PrivateRoutes>
				),
			},

			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/add-food",
				element: (
					<PrivateRoutes>
						{" "}
						<AddFood />
					</PrivateRoutes>
				),
			},
			{
				path: "/manage-my-foods",
				element: (
					<PrivateRoutes>
						<ManageMyFoods />
					</PrivateRoutes>
				),
			},
			{
				path: "/update-food/:id",
				loader: ({ params }) =>
					axios
						.get(
							`https://assignment-11-server-side-psi.vercel.app/food-details/${params.id}`,
						)
						.then((res) => res.data),
				element: <UpdateFood />,
			},
			{
				path: "/my-food-request",
				element: (
					<PrivateRoutes>
						<MyFoodRequest />
					</PrivateRoutes>
				),
			},
		],
	},
]);
export default routes;
