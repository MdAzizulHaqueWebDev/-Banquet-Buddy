/** @format */

import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";
import { MdEmail, MdGroup } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Footer = () => {
	return (
		<>
			<footer className="border-t-2">
				<div className="container pt-2 px-6 pb-4 mx-auto">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
						<div className="sm:col-span-2">
							<h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
								Subscribe our newsletter to get update.
							</h1>

							<div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
								<input
									id="email"
									type="text"
									className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
									placeholder="Email Address"
								/>

								<button className="w-full -z-50 px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
									Subscribe
								</button>
							</div>
						</div>

						<div>
							<p className="font-semibold text-gray-800 dark:text-white">
								Contact us
							</p>

							<div className="flex flex-col items-start mt-5 space-y-2">
								<p
									to="/"
									className=" flex items-center gap-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:text-blue-500"
								>
									<FaPhoneAlt /> 017-88-90180{" "}
								</p>
								<p
									href="#faq"
									className="text-gray-600 gap-2 flex items-center transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:text-blue-500"
								>
									<MdEmail /> azizulhoq909@gmail.com
								</p>
								<p
									href="#faq"
									className="text-gray-600 gap-2 flex items-center transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:text-blue-500"
								>
									<MdGroup /> ph-hero-909@gmail.com
								</p>
							</div>
						</div>

						<div>
							<p className="font-semibold text-gray-800 dark:text-white">
								Industries
							</p>

							<div className="flex flex-col items-start mt-5 space-y-2">
								<a className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
									Retail & E-Commerce
								</a>
								<a className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
									Information Technology
								</a>
								<a className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
									Finance & Insurance
								</a>
							</div>
						</div>
					</div>

					<hr className="my-2 border-gray-200 md:my-8 dark:border-gray-700" />

					<div className="flex items-center justify-between">
						<Link to={"/"}>
							<img className="md:w-28 w-14 rounded-xl" src={logo} alt="" />
						</Link>
						<div className="flex text-3xl gap-5 -mx-2">
							<a
								href="https://www.facebook.com/profile.php?id=100087298383362"
								target="blank"
							>
								<FaFacebook />
							</a>
							<a href="https://github.com/MdAzizulHaquelearner" target="blank">
								<FaGithub />
							</a>
							<a target="blank">
								<FaTwitter />
							</a>
						</div>
					</div>
					<div>
						<p className="text-xl text-center font-bold font-lato">
							Copyright © 2024
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
