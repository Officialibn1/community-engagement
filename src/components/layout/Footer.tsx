import { Link } from "wouter";
import {
	Facebook,
	Instagram,
	Twitter,
	MapPin,
	Phone,
	Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
	return (
		<footer className='bg-[#11261d] text-white/80 pt-20 pb-10'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16'>
					<div className='space-y-6'>
						<div className='flex items-center gap-2 group'>
							<div className='bg-accent text-accent-foreground rounded-2xl w-14 h-14 '>
								<img
									src='/cleaspace_small.jpeg'
									className='w-full h-full rounded-sm'
									alt='cleanspace'
								/>
							</div>
							<span className='font-display text-2xl font-bold text-white tracking-wide'>
								CLEANSPACE GLOBAL
							</span>
						</div>
						<p className='text-sm leading-relaxed text-white/70'>
							Where prime citizens come together to create memories, stay
							active, and support our vibrant community.
						</p>
						<div className='flex items-center gap-4 pt-2'>
							<a
								href='#'
								className='bg-white/5 p-2.5 rounded-full hover:bg-accent hover:text-white transition-colors'>
								<Facebook size={18} />
							</a>
							<a
								href='#'
								className='bg-white/5 p-2.5 rounded-full hover:bg-accent hover:text-white transition-colors'>
								<Twitter size={18} />
							</a>
							<a
								href='#'
								className='bg-white/5 p-2.5 rounded-full hover:bg-accent hover:text-white transition-colors'>
								<Instagram size={18} />
							</a>
						</div>
					</div>

					{/* <div>
            <h4 className="text-white font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-accent"/> About Us</Link></li>
              <li><Link href="/facilities" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-accent"/> Facilities</Link></li>
              <li><Link href="/events" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-accent"/> Events</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-accent"/> Contact</Link></li>
            </ul>
          </div> */}

					<div>
						<h4 className='text-white font-display text-lg font-semibold mb-6'>
							Contact Info
						</h4>
						<ul className='space-y-4'>
							<li className='flex items-start gap-3'>
								<MapPin
									size={20}
									className='text-accent shrink-0 mt-1'
								/>
								<span>Jabi Lake Park, FCT, Abuja.</span>
							</li>
							<li className='flex items-center gap-3'>
								<Phone
									size={20}
									className='text-accent shrink-0'
								/>
								<span>+234 7084906378</span>
							</li>
							<li className='flex items-center gap-3'>
								<Mail
									size={20}
									className='text-accent shrink-0'
								/>
								<span>cleanspaceglobal.ng@gmail.com</span>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='text-white font-display text-lg font-semibold mb-6'>
							Newsletter
						</h4>
						<p className='text-sm text-white/70 mb-4'>
							Subscribe to stay updated on community events and news.
						</p>
						<form
							className='flex flex-col gap-3'
							onSubmit={(e) => e.preventDefault()}>
							<input
								type='email'
								placeholder='Email address'
								className='bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all'
								required
							/>
							<Button className='w-full'>Subscribe</Button>
						</form>
					</div>
				</div>

				<div className='border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50'>
					<p>
						© {new Date().getFullYear()} CleanSpace Global. All rights reserved.
					</p>
					<div className='flex gap-6'>
						<a
							href='https://lifeofibn.vercel.app/'
							className='hover:text-white transition-colors'>
							Developed with ❤️ by Ibn
						</a>
						<a
							href='mailto:lifeofibn@gmail.com'
							className='hover:text-white transition-colors'>
							Contact Dev Team
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
