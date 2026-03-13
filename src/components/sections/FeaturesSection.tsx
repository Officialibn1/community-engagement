import { motion } from "framer-motion";
import {
	Heart,
	Activity,
	LucideIcon,
	HeartHandshake,
	TicketCheck,
} from "lucide-react";
import { Countdown } from "../ui/countdown";
import { EVENT_DATE } from "@/lib/constants";
import { Button } from "../ui/button";
import { Link } from "wouter";

const fadeInUp = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.15 },
	},
};

interface Feature {
	icon: LucideIcon;
	title: string;
	desc: string;
}

const features: Feature[] = [
	{
		icon: Heart,
		title: "Create Memories",
		desc: "Meet people who you share the same interest, dreams and aspirations.",
	},
	{
		icon: Activity,
		title: "Stay Active",
		desc: "Participate in top-tier sports and games for all age groups at the event.",
	},
	{
		icon: HeartHandshake,
		title: "Support Community",
		desc: "Join the volunteer team, or sponsor the event and make a real difference in Arvid.",
	},
];

export function FeaturesSection() {
	return (
		<section className='py-24 bg-background'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: "-100px" }}
						variants={staggerContainer}
						className='space-y-12'>
						<div>
							<motion.h2
								variants={fadeInUp}
								className='text-4xl md:text-5xl font-display font-bold text-foreground mb-4'>
								Everything you need in one place
							</motion.h2>
							<motion.p
								variants={fadeInUp}
								className='text-muted-foreground text-lg'>
								This event is designed to support every aspect of community
								life, from active games, community engagement speachs, to quiet
								matches on that very day.
							</motion.p>
						</div>

						<motion.div
							variants={fadeInUp}
							className='mb-6 bg-primary p-6 rounded-xl space-y-3'>
							<motion.h1 className='text-white text-xl'>
								Event starts in...
							</motion.h1>
							<Countdown
								targetDate={EVENT_DATE}
								ongoingText='Event Ongoing'
								completedText='Event Completed'
								showDate={false}
							/>
						</motion.div>

						<div className='space-y-8'>
							{features.map((feature, i) => (
								<motion.div
									key={i}
									variants={fadeInUp}
									className='flex gap-6 group'>
									<div className='w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-primary border border-border'>
										<feature.icon size={28} />
									</div>
									<div>
										<h3 className='text-xl font-bold text-foreground mb-2'>
											{feature.title}
										</h3>
										<p className='text-muted-foreground leading-relaxed'>
											{feature.desc}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='relative'>
						<div className='aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl'>
							<img
								src='/cleany.png'
								alt='Community Event'
								className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
							/>
						</div>

						<div className='absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-border animate-bounce-slow hidden md:block'>
							<div className='flex items-center gap-4'>
								<div className='w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent'>
									<TicketCheck size={24} />
								</div>

								<Link href='/participant-registration'>
									<Button className='capitalize'>
										Register as a Participant or Volunteer
									</Button>
								</Link>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
