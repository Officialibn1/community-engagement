import { Ticket } from "lucide-react";
import { motion } from "framer-motion";

export default function ParticipantRegistration() {
	return (
		<main className='flex-1 w-full overflow-hidden pt-20'>
			<section className='py-24 bg-gradient-to-br from-primary via-primary to-accent/20 text-white'>
				<div className='container mx-auto px-4 md:px-6'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className='max-w-4xl mx-auto text-center mb-12'>
						<Ticket className='w-16 h-16 text-white mx-auto mb-6' />
						<h1 className='text-4xl md:text-6xl font-display font-bold mb-6'>
							Become a Participant
						</h1>
						<p className='text-xl text-white/80 leading-relaxed'>
							Join us in having a good time at the Jabi Community Lake Park.
						</p>
					</motion.div>
				</div>
			</section>

			<section className='container mx-auto my-24 p-0'>
				<iframe
					src='https://luma.com/embed/event/evt-zMQqHElY0ZTEBEV/simple'
					className='w-full h-[750px]'
					allow='fullscreen; payment'
					aria-hidden='false'
					tabIndex={0}></iframe>
			</section>
		</main>
	);
}
