import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface TeamMember {
	name: string;
	role: string;
	image: string;
}

const team: TeamMember[] = [
	{
		name: "Andrew Stewart",
		role: "Director",
		image:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
	},
	{
		name: "Sophia Hartwell",
		role: "Finance Manager",
		image:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
	},
	{
		name: "Emily Harrison",
		role: "Event Coordinator",
		image:
			"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
	},
	{
		name: "Victoria Brown",
		role: "Membership Director",
		image:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
	},
];

export function TeamSection() {
	return (
		<section className='py-24 bg-background'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
					<div className='max-w-2xl'>
						<span className='text-accent font-bold tracking-wider uppercase text-sm mb-2 block'>
							Leadership
						</span>
						<h2 className='text-4xl md:text-5xl font-display font-bold text-foreground'>
							Management Team
						</h2>
					</div>
					<Button variant='outline'>View All Staff</Button>
				</div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12'>
					{team.map((member, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className='text-center group'>
							<div className='relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-card shadow-lg group-hover:-translate-y-2 transition-transform duration-300'>
								<img
									src={member.image}
									alt={member.name}
									className='w-full h-full object-cover'
								/>
								<div className='absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity' />
							</div>
							<h3 className='text-xl font-bold text-foreground mb-1'>
								{member.name}
							</h3>
							<p className='text-accent font-medium text-sm'>{member.role}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
