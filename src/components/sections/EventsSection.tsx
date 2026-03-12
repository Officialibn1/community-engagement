import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface Event {
	id: number;
	title: string;
	date: string;
	image: string;
}

const events: Event[] = [
	{
		id: 1,
		title: "Grand Prize Evening 2023",
		date: "Oct 15, 2023",
		image:
			"https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
	},
	{
		id: 2,
		title: "Municipal Art Exhibition",
		date: "Nov 02, 2023",
		image:
			"https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=800&auto=format&fit=crop",
	},
	{
		id: 3,
		title: "Winter Festival Market",
		date: "Dec 10, 2023",
		image:
			"https://images.unsplash.com/photo-1512354734898-e7e0e7a2b9fb?q=80&w=800&auto=format&fit=crop",
	},
];

export function EventsSection() {
	return (
		<section className='py-24 bg-background'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-6'>
					<div>
						<h2 className='text-4xl md:text-5xl font-display font-bold text-foreground mb-4'>
							What's On
						</h2>
						<p className='text-muted-foreground text-lg max-w-xl'>
							Don't miss out on the exciting events coming up this month at the
							City Hall.
						</p>
					</div>
					<Link href='/events'>
						<Button
							variant='outline'
							className='gap-2'>
							All Events <ArrowRight size={16} />
						</Button>
					</Link>
				</div>

				<div className='grid md:grid-cols-3 gap-8'>
					{events.map((event, i) => (
						<motion.div
							key={event.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className='bg-card rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group'>
							<div className='aspect-video overflow-hidden relative'>
								<img
									src={event.image}
									alt={event.title}
									className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
								/>
								<div className='absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl font-bold text-primary text-sm flex items-center gap-2 shadow-sm'>
									<Calendar
										size={14}
										className='text-accent'
									/>
									{event.date}
								</div>
							</div>
							<div className='p-6'>
								<h3 className='text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors'>
									{event.title}
								</h3>
								<Link
									href={`/events`}
									className='text-accent font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all'>
									Event Details <ArrowRight size={14} />
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
