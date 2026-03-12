interface Statistic {
	value: string;
	label: string;
}

const statistics: Statistic[] = [
	{ value: "1k+", label: "Active Members" },
	{ value: "9", label: "Events Hosted" },
	{ value: "100+", label: "Volunteers" },
];

export function StatisticsSection() {
	return (
		<section className='bg-primary text-white relative'>
			<div className='grid lg:grid-cols-2'>
				<div className='hidden lg:block relative min-h-[500px]'>
					<img
						src='/jabi_hero_wide.png'
						alt='Community Building'
						className='absolute inset-0 w-full h-full object-cover'
					/>
				</div>
				<div className='py-20 px-8 lg:px-16 flex flex-col justify-center'>
					<div className='inline-flex mb-8'>
						<span className='bg-accent text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide'>
							OUR IMPACT
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-display font-bold mb-12 leading-tight'>
						Building a stronger, more connected community every single day.
					</h2>

					<div className='grid sm:grid-cols-3 gap-8'>
						{statistics.map((stat, i) => (
							<div key={i}>
								<p className='text-5xl font-bold text-accent mb-2'>
									{stat.value}
								</p>
								<p className='text-white/80 font-medium'>{stat.label}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
