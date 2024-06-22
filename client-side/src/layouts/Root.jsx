/** @format */

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
	return (
		<div className="font-lato">
            <section className="h-20">
                <Navbar/>
            </section>
			<section>
				<Outlet />
			</section>
			<section>
				<Footer/>
			</section>
		</div>
	);
};

export default Root;
