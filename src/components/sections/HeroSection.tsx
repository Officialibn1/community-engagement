import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/ui/countdown";
import { Star } from "lucide-react";
import { EVENT_DATE } from "@/lib/constants";

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

export function HeroSection() {
	return (
		<section className='relative bg-primary text-white overflow-hidden py-20 lg:py-32'>
			<div className='absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none' />

			<div className='container mx-auto px-4 md:px-6 relative z-10'>
				<div className='grid lg:grid-cols-2 gap-12 lg:gap-8 items-center'>
					<motion.div
						initial='hidden'
						animate='visible'
						variants={staggerContainer}
						className='max-w-2xl'>
						<motion.div
							variants={fadeInUp}
							className='flex items-center gap-2 mb-6'>
							<div className='flex text-accent'>
								{[1, 2, 3, 4, 5].map((star) => (
									<Star
										key={star}
										size={20}
										fill='currentColor'
									/>
								))}
							</div>
							<span className='text-sm font-medium tracking-wider uppercase text-white/80'>
								TOP RATED COMMUNITY MOVEMENT
							</span>
						</motion.div>

						<motion.div
							variants={fadeInUp}
							className='mb-6'>
							<Countdown
								targetDate={EVENT_DATE}
								ongoingText='Event Ongoing'
								completedText='Event Completed'
							/>
						</motion.div>

						<motion.h1
							variants={fadeInUp}
							className='text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-balance'>
							WHERE PRIME CITIZEN COMES{" "}
							<span className='text-accent italic pr-2'>TOGETHER.</span>
						</motion.h1>

						<motion.p
							variants={fadeInUp}
							className='text-lg md:text-xl text-white/80 mb-10 text-balance leading-relaxed capitalize'>
							Welcome to Jabi Lake Park Clean-Up & Community Engagement Event.
							AN event to gather, celebrate, learn, and grow together in a space
							built for everyone.
						</motion.p>

						<motion.h3 className='text-2xl mb-3'>Register As:</motion.h3>

						<motion.div
							variants={fadeInUp}
							className='flex flex-col sm:flex-row gap-4'>
							<Link href='/exhibitor-registration'>
								<Button
									size='lg'
									variant='outlineWhite'
									className='w-full sm:w-auto text-lg px-8'>
									Exhibitor
								</Button>
							</Link>
							<Link href='/participant-registration'>
								<Button
									size='lg'
									variant='secondary'
									className='w-full sm:w-auto text-lg px-8'>
									Participant
								</Button>
							</Link>
							<Link href='/sponsor-registration'>
								<Button
									size='lg'
									className='w-full sm:w-auto text-lg px-8'>
									Become a Sponsor
								</Button>
							</Link>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='relative lg:ml-auto w-full max-w-lg mx-auto lg:max-w-none'>
						<div className='relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10'>
							<img
								src='/jabi_hero.png'
								alt='Community Gathering'
								className='w-full h-full object-cover'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent' />
							<div className='absolute bottom-8 left-8 right-8 glass-effect p-6 rounded-2xl'>
								<p className='font-display text-2xl font-bold mb-2'>
									Join the Family
								</p>
								<p className='text-white/80 text-sm'>
									Hundreds of active members and growing daily.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
