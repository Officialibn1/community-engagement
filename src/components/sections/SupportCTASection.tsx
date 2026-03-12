import { HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

interface Sponsor {
	id: number;
	name: string;
	tier: "GOLD" | "PLATINUM" | "SILVER" | "BRONZE";
	image: string;
}

const getTierStyles = (tier: Sponsor["tier"]) => {
	const styles = {
		PLATINUM:
			"bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 text-slate-900 border-2 border-slate-400 ",
		GOLD: "bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 text-yellow-900 border-2 border-yellow-600 ",
		SILVER:
			"bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-gray-900 border-2 border-gray-500 ",
		BRONZE:
			"bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 text-amber-950 border-2 border-amber-800",
	};
	return styles[tier];
};

const sponsors: Sponsor[] = [
	{
		id: 1,
		name: "CLEANSPACE GLOBAL",
		tier: "PLATINUM",
		image: "/latango.jpeg",
	},
	{
		id: 2,
		name: "LATANGO GLOBAL CONCEPT LTD.",
		tier: "GOLD",
		image: "/latango.jpeg",
	},
	{
		id: 3,
		name: "CHC AGRITECH AFRICA",
		tier: "SILVER",
		image: "/chc.jpeg",
	},
	{
		id: 4,
		name: "ASSOCIATION OF DIPLOMATIC WOMEN IN NIGERIA",
		tier: "BRONZE",
		image: "/dip_women.jpeg",
	},
];

export function SupportCTASection() {
	return (
		<section className='py-24 space-y-24 bg-primary text-white text-center px-4 relative overflow-hidden'>
			<div className='absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2' />
			<div className='absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3' />

			<div className='relative z-10 max-w-3xl mx-auto'>
				<HeartHandshake className='w-16 h-16 text-accent mx-auto mb-8' />
				<h2 className='text-4xl md:text-6xl font-display font-bold mb-6'>
					Support The Jabi Community Movement
				</h2>
				<p className='text-xl text-white/80 mb-10 leading-relaxed'>
					Your generous donations will help us accomplish the event, fund the
					community program, and ensure our doors stay open for everyone willing
					to participate.
				</p>
				<Link href='/sponsor-registration'>
					<Button
						size='lg'
						className='text-lg px-12 py-6 shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/40'>
						<HeartHandshake /> Sponsor Now
					</Button>
				</Link>
			</div>
			<div className='px-4 md:px-6 container mx-auto'>
				<h2 className='text-3xl md:text-5xl font-display font-bold text-background'>
					Our Sponsors
				</h2>

				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-24'>
					{sponsors.map((sponsor, i) => (
						<motion.div
							key={sponsor.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							className='group bg-background rounded-3xl overflow-hidden border border-white hover:shadow-xl hover:border-accent/30 transition-all duration-300 flex flex-col h-full'>
							<div className='aspect-square overflow-hidden relative'>
								<img
									src={sponsor.image}
									alt={sponsor.name}
									className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
							</div>
							<div className='p-4 flex flex-col flex-1'>
								<h3 className='text-xl font-bold text-foreground mb-3'>
									{sponsor.name}
								</h3>

								<Button
									className={cn(
										"w-full mt-auto cursor-default pointer-events-none font-bold",
										getTierStyles(sponsor.tier),
									)}>
									{sponsor.tier} SPONSOR
								</Button>
							</div>
						</motion.div>
					))}
				</div>

				<Link href='/sponsor-registration'>
					<Button
						size='lg'
						variant={"outlineWhite"}
						className='text-lg px-12 py-6 uppercase'>
						<HeartHandshake /> Become A Sponsor
					</Button>
				</Link>
			</div>
		</section>
	);
}
