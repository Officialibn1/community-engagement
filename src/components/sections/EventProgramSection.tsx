import { motion } from "framer-motion";
import { EVENT_ACTIVITIES } from "@/lib/constants";
import {
	Footprints,
	Trash2,
	Lightbulb,
	Users,
	Palette,
	Sparkles,
	Clock,
} from "lucide-react";

const iconMap = {
	walk: Footprints,
	cleanup: Trash2,
	awareness: Lightbulb,
	network: Users,
	art: Palette,
	mural: Sparkles,
};

export default function EventProgramSection() {
	return (
		<section className='py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden'>
			{/* Background decoration */}
			<div className='absolute inset-0 opacity-5'>
				<div className='absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl' />
				<div className='absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl' />
			</div>

			<div className='container mx-auto px-4 md:px-6 relative z-10'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center max-w-3xl mx-auto mb-20'>
					<Clock className='w-16 h-16 text-primary mx-auto mb-6' />
					<h2 className='text-4xl md:text-5xl font-display font-bold text-foreground mb-6'>
						Event Program & Activities
					</h2>
					<p className='text-xl text-muted-foreground leading-relaxed'>
						A full day of meaningful activities designed to promote
						environmental sustainability, community engagement, and healthy
						living at Jabi Lake Park
					</p>
				</motion.div>

				{/* Timeline */}
				<div className='relative max-w-6xl mx-auto'>
					{/* Vertical line */}
					<div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2' />

					{/* Activities */}
					<div className='space-y-16'>
						{EVENT_ACTIVITIES.map((activity, index) => {
							const Icon = iconMap[activity.icon as keyof typeof iconMap];
							const isEven = index % 2 === 0;

							return (
								<motion.div
									key={activity.id}
									initial={{ opacity: 0, x: isEven ? -50 : 50 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: "-100px" }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className={`relative flex items-center ${
										isEven ? "md:flex-row" : "md:flex-row-reverse"
									} flex-col md:gap-8`}>
									{/* Timeline dot */}
									<motion.div
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
										className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${activity.color} flex items-center justify-center shadow-lg z-10`}>
										<Icon className='w-8 h-8 text-white' />
									</motion.div>

									{/* Content card */}
									<div
										className={`w-full md:w-[calc(50%-4rem)] ${isEven ? "md:text-right md:pr-8" : "md:text-left md:pl-8"} ml-24 md:ml-0`}>
										<motion.div
											whileHover={{ scale: 1.02, y: -5 }}
											transition={{ duration: 0.3 }}
											className='bg-card rounded-3xl p-8 shadow-xl border border-border hover:shadow-2xl transition-shadow'>
											{/* Time badge */}
											<div
												className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${activity.color} text-white text-sm font-semibold mb-4`}>
												<Clock size={16} />
												{activity.time}
											</div>

											{/* Title */}
											<h3 className='text-2xl font-bold text-foreground mb-3'>
												{activity.title}
											</h3>

											{/* Description */}
											<p className='text-muted-foreground mb-4 leading-relaxed'>
												{activity.description}
											</p>

											{/* Highlights */}
											<div
												className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
												{activity.highlights.map((highlight, i) => (
													<span
														key={i}
														className='px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20'>
														{highlight}
													</span>
												))}
											</div>
										</motion.div>
									</div>

									{/* Spacer for the other side */}
									<div className='hidden md:block w-[calc(50%-4rem)]' />
								</motion.div>
							);
						})}
					</div>
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mt-20 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl border border-primary/20'>
					<h3 className='text-2xl font-bold text-foreground mb-3'>
						Join Us for This Transformative Day
					</h3>
					<p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
						Be part of a movement that combines environmental action, community
						building, and creative expression. Every activity is designed to
						make a lasting impact.
					</p>
					<div className='flex flex-wrap justify-center gap-4 text-sm text-muted-foreground'>
						<div className='flex items-center gap-2'>
							<div className='w-2 h-2 rounded-full bg-primary' />
							<span>Free participation</span>
						</div>
						<div className='flex items-center gap-2'>
							<div className='w-2 h-2 rounded-full bg-accent' />
							<span>All materials provided</span>
						</div>
						<div className='flex items-center gap-2'>
							<div className='w-2 h-2 rounded-full bg-primary' />
							<span>Refreshments included</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
