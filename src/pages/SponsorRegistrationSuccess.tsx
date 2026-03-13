import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home, Mail } from "lucide-react";
import { Link } from "wouter";

export default function SponsorRegistrationSuccess() {
	return (
		<main className='flex-1 w-full overflow-hidden pt-20'>
			<section className='py-24 min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-accent/5 to-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						className='max-w-2xl mx-auto text-center'>
						{/* Success Icon */}
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
							className='w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl'>
							<CheckCircle2 className='w-14 h-14 text-white' />
						</motion.div>

						{/* Success Message */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className='mb-8'>
							<h1 className='text-4xl md:text-5xl font-display font-bold text-foreground mb-4'>
								Payment Successful!
							</h1>
							<p className='text-xl text-muted-foreground mb-6'>
								Thank you for becoming a sponsor of the Jabi Lake Clean-Up &
								Sensitization 2026
							</p>
							<div className='bg-card border border-border rounded-2xl p-6 max-w-md mx-auto'>
								<p className='text-sm text-muted-foreground mb-2'>
									A confirmation email has been sent to your registered email
									address with:
								</p>
								<ul className='text-sm text-foreground space-y-2 text-left'>
									<li className='flex items-center gap-2'>
										<CheckCircle2 className='w-4 h-4 text-primary' />
										Payment receipt
									</li>
									<li className='flex items-center gap-2'>
										<CheckCircle2 className='w-4 h-4 text-primary' />
										Sponsorship agreement details
									</li>
									<li className='flex items-center gap-2'>
										<CheckCircle2 className='w-4 h-4 text-primary' />
										Next steps and event information
									</li>
								</ul>
							</div>
						</motion.div>

						{/* Action Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link href='/'>
								<Button
									size='lg'
									variant='default'>
									<Home
										className='mr-2'
										size={20}
									/>
									Back to Home
								</Button>
							</Link>
							<Button
								size='lg'
								variant='outline'
								asChild>
								<a href='mailto:cleanspaceglobal.ng@gmail.com'>
									<Mail
										className='mr-2'
										size={20}
									/>
									Contact Us
								</a>
							</Button>
						</motion.div>

						{/* Additional Info */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6 }}
							className='mt-12 p-6 bg-muted/30 rounded-2xl border border-border'>
							<p className='text-sm text-muted-foreground'>
								Our team will reach out to you within 24-48 hours to discuss
								branding materials, logo placement, and other sponsorship
								benefits. If you have any questions, please contact us at{" "}
								<a
									href='mailto:cleanspaceglobal.ng@gmail.com'
									className='text-primary hover:underline'>
									cleanspaceglobal.ng@gmail.com
								</a>
							</p>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
