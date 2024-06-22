/** @format */

import { Link } from "react-router-dom";
import error from "../../assets/404-error-page.gif";
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
	return (
		<div>
			<Helmet>
				<title>Error page | Banquet Buddy</title>
			</Helmet>
			<section className="flex items-center border min-h-screen p-4 text-gray-800">
				<div className="container flex flex-col items-center space-y-5 justify-center px-5 mx-auto my-8">
					<div className="max-w-md text-center">
						<div>
							<img src={error} alt="" />
						</div>
						<p className="text-2xl font-semibold md:text-3xl">
							Sorry, we couldn't find this page.
						</p>
						<Link to="/">
							<button className="btn btn-accent mt-4">Back to homepage</button>{" "}
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ErrorPage;
