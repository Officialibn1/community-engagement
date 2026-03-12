import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface Facility {
	id: number;
	name: string;
	desc: string;
	image: string;
}

const facilities: Facility[] = [
	{
		id: 1,
		name: "Sports Pitch",
		desc: "Full-sized artificial turf pitch perfect for football, rugby, and outdoor training.",
		image:
			"https://images.unsplash.com/photo-1518605368461-1ee7919315d1?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: 2,
		name: "Multi-Use Room",
		desc: "Versatile indoor space for meetings, classes, community groups, and small events.",
		image:
			"https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: 3,
		name: "Outdoor Pavilion",
		desc: "Covered outdoor area with seating, ideal for summer picnics and gatherings.",
		image:
			"https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: 4,
		name: "Hire Goods",
		desc: "Tables, chairs, sports equipment and event supplies available for community use.",
		image:
			"https://images.unsplash.com/photo-1530103862676-de8892cb7370?q=80&w=1000&auto=format&fit=crop",
	},
];

export function FacilitiesSection() {
	return (
		<section className='py-24 bg-card'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='text-center max-w-3xl mx-auto mb-16'>
					<span className='text-accent font-bold tracking-wider uppercase text-sm mb-2 block'>
						Explore Space
					</span>
					<h2 className='text-4xl md:text-5xl font-display font-bold text-foreground mb-6'>
						Secure A Space For Exhibition
					</h2>
					<p className='text-muted-foreground text-lg'>
						We offer a versatile spaces and table for you to showcase/exhibit
						your business or project at the event.
					</p>
				</div>

				<div className='container mx-auto rounded-4xl relative overflow-hidden'>
					<img
						src='/vendors.png'
						className='w-full h-full object-cover'
					/>

					<div className='absolute bottom-8 left-8 right-8 glass-effect p-6 rounded-2xl max-w-2xl space-y-3'>
						<p className='font-display text-2xl font-bold mb-2 text-white capitalize'>
							Display your products
						</p>
						<p className='text-white/80 text-sm'>Limited slot available</p>

						<Link href='/exhibitor-registration'>
							<Button>Register For Exhibition Now</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
