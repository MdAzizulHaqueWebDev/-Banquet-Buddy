
const Stats = () => {
    return (
        <div>
            <section className="p-6 bg-gray-100 text-gray-800">
				<div className="text-center">
					<p className="text-xl">Our Services</p>
				</div>
	<div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
			<p className="text-sm sm:text-base">Service</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
			<p className="text-sm sm:text-base">Followers on social media</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">900</p>
			<p className="text-sm sm:text-base">Donators</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
			<p className="text-sm sm:text-base">TED talks</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">1540</p>
			<p className="text-sm sm:text-base">Helps</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
			<p className="text-sm sm:text-base">Workshops</p>
		</div>
	</div>
</section>
        </div>
    );
};

export default Stats;