/** @format */

const Contact = () => {
	return (
		<div id="support" className="mb-4">
			<div className="grid bg-purple-100  grid-cols-1 gap-2 px-8 py-8 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
				<div className="flex flex-col items-center space-y-5">
					<div className="space-y-2">
						<h2
							className="text-4xl font-bold leading-tight lg:text-5xl animate__zoomInLeft animate__animated duration-1000 animate__infinite animate__slower"
						>
							Let”s talk!
						</h2>
						<div className="dark:text-gray-600">Have any question ?</div>
					</div>
					<img
						src="https://mambaui.com/assets/svg/Business_SVG.svg"
						alt=""
						className="h-60 w-60"
					/>
				</div>
				<form onSubmit={(e) => e.preventDefault()} className="space-y-1">
					<div>
						<label htmlFor="name" className="text-sm">
							Full name
						</label>
						<input
							id="name"
							type="text"
							placeholder=""
							className="w-full p-3 rounded dark:bg-gray-100"
						/>
					</div>
					<div>
						<label htmlFor="email" className="text-sm">
							Email
						</label>
						<input
							id="email"
							type="email"
							className="w-full p-3 rounded dark:bg-gray-100"
						/>
					</div>
					<div>
						<label htmlFor="message" className="text-sm">
							Message
						</label>
						<textarea
						placeholder="Enter Your message"
							id="message"
							rows="3"
							className="w-full p-3 rounded dark:bg-gray-100"
						></textarea>
					</div>
					<button
						type="submit"
						className="btn btn-outline w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-blue-600 dark:text-gray-50"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
