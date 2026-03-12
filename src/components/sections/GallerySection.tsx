import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const gallery = [
	"https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1593113512836-9b5db8a83a3d?q=80&w=600&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=600&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=600&auto=format&fit=crop",
];

export function GallerySection() {
	return (
		<section className='py-24 bg-card'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='text-center max-w-2xl mx-auto mb-16'>
					<span className='text-accent font-bold tracking-wider uppercase text-sm mb-2 block'>
						Gallery
					</span>
					<h2 className='text-4xl md:text-5xl font-display font-bold text-foreground mb-4'>
						Event Highlights
					</h2>
					<p className='text-muted-foreground'>
						A look back at some of our favorite moments and largest gatherings
						over the past year.
					</p>
				</div>

				<div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4'>
					{gallery.map((img, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.05 }}
							className={cn(
								"relative group overflow-hidden rounded-xl bg-muted",
								i === 0 || i === 3
									? "col-span-2 md:col-span-1 row-span-2"
									: "aspect-square",
							)}>
							<img
								src={img}
								alt='Event Highlight'
								className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
							/>
							<div className='absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
								<p className='text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
									Community Gathering
								</p>
								<p className='text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75'>
									View Gallery
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
