/** @format */

import { Helmet } from "react-helmet-async";
// import useAuth from "../../hooks/useAuth";
import Banner from "./Banner";
import Foods from "./Foods/Foods";
import Stats from "./Stats";
import Features from "./Features";
import { ScrollRestoration } from "react-router-dom";
import Contact from "./Contact";
const Home = () => {

	return (
		<>
			<ScrollRestoration />
			<Helmet>
				<title>Home | Banquet Buddy</title>
			</Helmet>
			<section>
				<Banner />
			</section>
			<section className="my-2">
				<Foods />
			</section>
			<section className="mt-6">
				<Stats />
			</section>
			<section className="my-8">
				<Features />
			</section>
			<section>
				<Contact/>
			</section>
		</>
	);
};

export default Home;
