/** @format */

const Slide = ({ img, text }) => {
	return (
		<>
			<div
				className="hero bg-no-repeat bg-cover h-96"
				style={{ backgroundImage: `url(${img})` }}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md ">
						<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
						<p className="mb-5  text-xl font-bold font-merriweather text-emerald-300 ">
						Food donation plays a crucial role in supporting communities and individuals in need across the globe. With countless individuals facing food insecurity every day
						</p>
						<button className="btn btn-accent">Get Started</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Slide;
