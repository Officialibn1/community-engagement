import { Button } from "@/components/ui/button";
import {
	Store,
	CheckCircle2,
	ExternalLink,
	Package,
	Users,
	Megaphone,
} from "lucide-react";
import { motion } from "framer-motion";
import { PAYSTACK_URLS } from "@/lib/constants";

const EXHIBITOR_FEE = 25000;

const exhibitorBenefits = [
	"Dedicated booth space at prime location",
	"Table and chairs provided",
	"Promotional materials distribution rights",
	"Access to high-level audience including diplomatic stakeholders",
	"Brand visibility throughout the event",
	"Networking opportunities with sponsors and attendees",
	"Social media mentions and event coverage",
	"Certificate of participation",
];

export default function ExhibitorRegistration() {
	const handleProceedToPayment = () => {
		window.location.href = PAYSTACK_URLS.EXHIBITOR;
	};

	return (
		<main className='flex-1 w-full overflow-hidden pt-20'>
			<section className='py-24 bg-gradient-to-br from-accent via-accent to-primary/20 text-white'>
				<div className='container mx-auto px-4 md:px-6'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className='max-w-4xl mx-auto text-center mb-12'>
						<Store className='w-16 h-16 text-white mx-auto mb-6' />
						<h1 className='text-4xl md:text-6xl font-display font-bold mb-6'>
							Become an Exhibitor
						</h1>
						<p className='text-xl text-white/80 leading-relaxed mb-6'>
							Showcase your business at the Jabi Lake Park Clean-Up &
							Sensitization event. Connect with policymakers, diplomatic
							stakeholders, and community members.
						</p>
						<div className='grid md:grid-cols-3 gap-4 text-sm'>
							<div className='bg-white/10 backdrop-blur-sm rounded-xl p-4'>
								<Package className='w-8 h-8 mx-auto mb-2' />
								<p className='font-semibold mb-1'>Prime Location</p>
								<p className='text-white/70'>Dedicated booth space</p>
							</div>
							<div className='bg-white/10 backdrop-blur-sm rounded-xl p-4'>
								<Users className='w-8 h-8 mx-auto mb-2' />
								<p className='font-semibold mb-1'>High-Level Access</p>
								<p className='text-white/70'>Diplomatic audience</p>
							</div>
							<div className='bg-white/10 backdrop-blur-sm rounded-xl p-4'>
								<Megaphone className='w-8 h-8 mx-auto mb-2' />
								<p className='font-semibold mb-1'>Brand Visibility</p>
								<p className='text-white/70'>Event-wide exposure</p>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			<section className='py-16 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='max-w-4xl mx-auto'>
						<div className='bg-card rounded-3xl shadow-xl border border-border p-8 md:p-12'>
							<h2 className='text-3xl font-bold text-foreground mb-8 text-center'>
								Exhibitor Registration
							</h2>

							{/* Fee Display */}
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className='bg-accent/5 border-2 border-accent/20 rounded-2xl p-8 mb-8'>
								<div className='flex flex-col md:flex-row justify-between items-center gap-6'>
									<div className='text-center md:text-left'>
										<p className='text-sm text-muted-foreground mb-2'>
											Registration Fee
										</p>
										<p className='text-5xl font-bold text-accent'>
											₦{EXHIBITOR_FEE.toLocaleString()}
										</p>
									</div>
									<div className='bg-accent/10 p-6 rounded-full'>
										<CheckCircle2
											className='text-accent'
											size={48}
										/>
									</div>
								</div>
							</motion.div>

							{/* Benefits */}
							<div className='mb-8'>
								<h3 className='text-2xl font-bold text-foreground mb-6 text-center'>
									What's Included
								</h3>
								<div className='grid md:grid-cols-2 gap-4'>
									{exhibitorBenefits.map((benefit, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.05 }}
											className='flex items-start gap-3 p-4 bg-muted/30 rounded-xl'>
											<CheckCircle2 className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
											<span className='text-sm text-muted-foreground'>
												{benefit}
											</span>
										</motion.div>
									))}
								</div>
							</div>

							<Button
								size='lg'
								className='w-full text-lg bg-accent hover:bg-accent/90'
								onClick={handleProceedToPayment}>
								<ExternalLink
									className='mr-2'
									size={20}
								/>
								Proceed to Payment
							</Button>

							<p className='text-sm text-muted-foreground text-center mt-4'>
								You will be redirected to Paystack secure payment page
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
