import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Users, Megaphone, Handshake } from "lucide-react";
import { SPONSORSHIP_TIERS } from "@/lib/constants";
import { Link } from "wouter";

const tierColors = {
	PLATINUM: "from-slate-300 to-slate-500",
	GOLD: "from-yellow-300 to-yellow-600",
	SILVER: "from-gray-300 to-gray-500",
	BRONZE: "from-amber-400 to-amber-700",
};

export default function SponsorshipSection() {
	return (
		<section className='py-24 bg-linear-to-b from-background to-muted/30'>
			<div className='container mx-auto px-4 md:px-6'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center max-w-4xl mx-auto mb-16'>
					<Award className='w-16 h-16 text-primary mx-auto mb-6' />
					<h2 className='text-4xl md:text-5xl font-display font-bold text-foreground mb-6'>
						Sponsorship Opportunities
					</h2>
					<p className='text-xl text-muted-foreground leading-relaxed'>
						Join us in making a lasting impact on environmental sustainability
						and community development at Jabi Lake Park
					</p>
				</motion.div>

				{/* Why Sponsor */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20'>
					{[
						{
							icon: Award,
							title: "CSR Leadership",
							description:
								"Position your brand as a champion of UN Sustainable Development Goals",
						},
						{
							icon: Users,
							title: "High-Level Visibility",
							description:
								"Access diverse audiences including diplomatic stakeholders and policymakers",
						},
						{
							icon: Megaphone,
							title: "Media Exposure",
							description:
								"Benefit from integrated press coverage and strategic social media campaigns",
						},
						{
							icon: Handshake,
							title: "Community Trust",
							description:
								"Build long-term brand loyalty by contributing to a cleaner, healthier Abuja",
						},
					].map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className='bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow'>
							<item.icon className='w-12 h-12 text-primary mb-4' />
							<h3 className='text-lg font-bold text-foreground mb-2'>
								{item.title}
							</h3>
							<p className='text-sm text-muted-foreground'>
								{item.description}
							</p>
						</motion.div>
					))}
				</motion.div>

				{/* Sponsorship Tiers */}
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
					{(
						Object.keys(SPONSORSHIP_TIERS) as Array<
							keyof typeof SPONSORSHIP_TIERS
						>
					).map((tierKey, index) => {
						const tier = SPONSORSHIP_TIERS[tierKey];
						return (
							<motion.div
								key={tierKey}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className='bg-card rounded-3xl border-2 border-border overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
								<div
									className={`h-3 bg-gradient-to-r ${tierColors[tierKey]}`}
								/>
								<div className='p-6'>
									<h3 className='text-2xl font-bold text-foreground mb-2'>
										{tier.name}
									</h3>
									<p className='text-sm text-muted-foreground mb-4'>
										{tier.label}
									</p>
									<div className='text-3xl font-bold text-primary mb-6'>
										{tier.displayAmount}
									</div>
									<ul className='space-y-3 mb-6'>
										{tier.benefits.slice(0, 3).map((benefit, i) => (
											<li
												key={i}
												className='flex items-start gap-2 text-sm text-muted-foreground'>
												<CheckCircle2
													className='w-5 h-5 text-primary flex-shrink-0 mt-0.5'
													size={16}
												/>
												<span>{benefit}</span>
											</li>
										))}
										{tier.benefits.length > 3 && (
											<li className='text-sm text-primary font-semibold'>
												+{tier.benefits.length - 3} more benefits
											</li>
										)}
									</ul>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* In-Kind Contributions */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='bg-accent/10 rounded-3xl p-8 md:p-12 border border-accent/20 mb-12'>
					<h3 className='text-2xl md:text-3xl font-bold text-foreground mb-4'>
						Resource-Based (In-Kind) Contributions
					</h3>
					<p className='text-muted-foreground mb-6 leading-relaxed'>
						Organizations can support through specialized tools and expertise.
						All in-kind support will be professionally valued to determine
						sponsorship level recognition.
					</p>
					<div className='grid md:grid-cols-2 gap-4'>
						{[
							"Logistics & Cleaning Equipment",
							"Media & Communication Services",
							"Branding & Printing Materials",
							"Volunteer Support & Refreshments",
						].map((item, index) => (
							<div
								key={index}
								className='flex items-center gap-3 text-foreground'>
								<CheckCircle2 className='w-5 h-5 text-accent flex-shrink-0' />
								<span>{item}</span>
							</div>
						))}
					</div>
				</motion.div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center'>
					<Link to='/sponsor-registration'>
						<Button
							size='lg'
							className='text-lg px-8 py-6'>
							Become a Sponsor
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
