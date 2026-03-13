import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	HeartHandshake,
	CheckCircle2,
	ExternalLink,
	Package,
	Send,
} from "lucide-react";
import { motion } from "framer-motion";
import {
	SPONSORSHIP_TIERS,
	PAYSTACK_URLS,
	RESOURCE_CATEGORIES,
	type SponsorshipTier,
} from "@/lib/constants";
import { api } from "@/lib/api";

const resourceSponsorSchema = z.object({
	organizationName: z.string().min(2, "Organization name is required"),
	contactName: z.string().min(2, "Contact name is required"),
	email: z.string().email("Valid email is required"),
	phone: z.string().min(10, "Valid phone number is required"),
	resourceCategory: z.string().min(1, "Please select a resource category"),
	resourceDescription: z
		.string()
		.min(
			20,
			"Please provide detailed description of resources (minimum 20 characters)",
		),
	estimatedValue: z.string().optional(),
});

type ResourceSponsorFormValues = z.infer<typeof resourceSponsorSchema>;

const getTierStyles = (tier: SponsorshipTier) => {
	const styles = {
		PLATINUM: "border-slate-400 bg-slate-50 hover:bg-slate-100",
		GOLD: "border-yellow-500 bg-yellow-50 hover:bg-yellow-100",
		SILVER: "border-gray-400 bg-gray-50 hover:bg-gray-100",
		BRONZE: "border-amber-600 bg-amber-50 hover:bg-amber-100",
	};
	return styles[tier];
};

export default function SponsorRegistration() {
	const { toast } = useToast();
	const [activeTab, setActiveTab] = useState<"monetary" | "resource">(
		"monetary",
	);
	const [selectedTier, setSelectedTier] = useState<SponsorshipTier | null>(
		null,
	);

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { isSubmitting, errors },
	} = useForm<ResourceSponsorFormValues>({
		resolver: zodResolver(resourceSponsorSchema),
	});

	const handleProceedToPayment = () => {
		if (selectedTier) {
			window.location.href = PAYSTACK_URLS.SPONSOR[selectedTier];
		}
	};

	const onResourceSubmit = async (data: ResourceSponsorFormValues) => {
		try {
			await api.resourceSponsor(data);

			toast({
				title: "Submission Received!",
				description:
					"Thank you for your interest in resource-based sponsorship. Our team will contact you within 24-48 hours.",
				variant: "default",
			});
			reset();
		} catch (error) {
			toast({
				title: "Submission Failed",
				description:
					"There was an error submitting your form. Please try again or contact us directly.",
				variant: "destructive",
			});
		}
	};

	return (
		<main className='flex-1 w-full overflow-hidden pt-20'>
			<section className='py-24 bg-linear-to-br from-primary via-primary to-accent/20 text-white'>
				<div className='container mx-auto px-4 md:px-6'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className='max-w-4xl mx-auto text-center mb-12'>
						<HeartHandshake className='w-16 h-16 text-accent mx-auto mb-6' />
						<h1 className='text-4xl md:text-6xl font-display font-bold mb-6'>
							Become a Sponsor
						</h1>
						<p className='text-xl text-white/80 leading-relaxed mb-6'>
							Join us in making a difference at Jabi Lake Park. Position your
							brand as a champion of environmental sustainability and gain
							high-level visibility with policymakers, diplomatic stakeholders,
							and the community.
						</p>
						<div className='grid md:grid-cols-3 gap-4 text-sm'>
							<div className='bg-white/10 backdrop-blur-sm rounded-xl p-4'>
								<p className='font-semibold mb-1'>CSR Leadership</p>
								<p className='text-white/70'>Align with UN SDGs</p>
							</div>
							<div className='bg-white/10 backdrop-blur-sm rounded-xl p-4'>
								<p className='font-semibold mb-1'>Media Exposure</p>
								<p className='text-white/70'>Press & Social Coverage</p>
							</div>
							<div className='bg-white/10 backdrop-blur-sm rounded-xl p-4'>
								<p className='font-semibold mb-1'>Community Impact</p>
								<p className='text-white/70'>Build Brand Loyalty</p>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			<section className='py-16 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='max-w-4xl mx-auto'>
						<div className='bg-card rounded-3xl shadow-xl border border-border p-8 md:p-12'>
							{/* Tabs */}
							<div className='flex gap-2 mb-8 p-1 bg-muted rounded-2xl'>
								<button
									onClick={() => setActiveTab("monetary")}
									className={cn(
										"flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300",
										activeTab === "monetary"
											? "bg-primary text-white shadow-lg"
											: "text-muted-foreground hover:text-foreground",
									)}>
									Monetary Sponsorship
								</button>
								<button
									onClick={() => setActiveTab("resource")}
									className={cn(
										"flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2",
										activeTab === "resource"
											? "bg-primary text-white shadow-lg"
											: "text-muted-foreground hover:text-foreground",
									)}>
									<Package size={18} />
									Resource-Based
								</button>
							</div>

							{/* Monetary Sponsorship Tab */}
							{activeTab === "monetary" && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3 }}>
									<h2 className='text-3xl font-bold text-foreground mb-6'>
										Select Your Sponsorship Tier
									</h2>

									{/* Tier Selection */}
									<div className='space-y-4 mb-8'>
										<div className='grid sm:grid-cols-2 gap-4'>
											{(
												Object.keys(SPONSORSHIP_TIERS) as Array<SponsorshipTier>
											).map((tier) => (
												<button
													key={tier}
													type='button'
													onClick={() => setSelectedTier(tier)}
													className={cn(
														"relative p-6 rounded-2xl border-2 transition-all duration-300 text-left",
														getTierStyles(tier),
														selectedTier === tier
															? "ring-4 ring-primary/30 scale-105"
															: "hover:scale-102",
													)}>
													{selectedTier === tier && (
														<CheckCircle2
															className='absolute top-4 right-4 text-primary'
															size={24}
														/>
													)}
													<div className='font-bold text-xl text-foreground mb-2'>
														{tier}
													</div>
													<div className='text-sm text-muted-foreground mb-2'>
														{SPONSORSHIP_TIERS[tier].label}
													</div>
													<div className='text-2xl font-bold text-primary'>
														{SPONSORSHIP_TIERS[tier].displayAmount}
													</div>
												</button>
											))}
										</div>
									</div>

									{/* Amount Display with Benefits */}
									{selectedTier && (
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											className='bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 space-y-6 mb-8'>
											<div className='flex justify-between items-center pb-4 border-b border-primary/10'>
												<div>
													<p className='text-sm text-muted-foreground mb-1'>
														Total Amount
													</p>
													<p className='text-3xl font-bold text-primary'>
														{SPONSORSHIP_TIERS[selectedTier].displayAmount}
													</p>
												</div>
												<div className='text-right'>
													<p className='text-sm text-muted-foreground mb-1'>
														Tier Selected
													</p>
													<p className='text-xl font-bold text-foreground'>
														{selectedTier}
													</p>
													<p className='text-sm text-muted-foreground'>
														{SPONSORSHIP_TIERS[selectedTier].label}
													</p>
												</div>
											</div>

											<div>
												<h3 className='text-lg font-semibold text-foreground mb-3'>
													Your Benefits Include:
												</h3>
												<ul className='space-y-2'>
													{SPONSORSHIP_TIERS[selectedTier].benefits.map(
														(benefit, index) => (
															<li
																key={index}
																className='flex items-start gap-2 text-sm text-muted-foreground'>
																<CheckCircle2 className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' />
																<span>{benefit}</span>
															</li>
														),
													)}
												</ul>
											</div>
										</motion.div>
									)}

									<Button
										size='lg'
										className='w-full text-lg'
										disabled={!selectedTier}
										onClick={handleProceedToPayment}>
										<ExternalLink
											className='mr-2'
											size={20}
										/>
										Proceed to Payment
									</Button>

									{!selectedTier && (
										<p className='text-sm text-muted-foreground text-center mt-4'>
											Please select a sponsorship tier to continue
										</p>
									)}
								</motion.div>
							)}

							{/* Resource-Based Sponsorship Tab */}
							{activeTab === "resource" && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3 }}>
									<h2 className='text-3xl font-bold text-foreground mb-4'>
										Resource-Based (In-Kind) Contribution
									</h2>
									<p className='text-muted-foreground mb-8 leading-relaxed'>
										Organizations can support through specialized tools and
										expertise. All in-kind support will be professionally valued
										to determine sponsorship level recognition.
									</p>

									{/* Valuation Process Info */}
									<div className='bg-accent/5 border border-accent/20 rounded-2xl p-6 mb-8'>
										<h3 className='font-semibold text-foreground mb-3'>
											How It Works:
										</h3>
										<ol className='space-y-2 text-sm text-muted-foreground'>
											<li className='flex gap-3'>
												<span className='font-bold text-accent'>1.</span>
												<span>
													<strong>Identification:</strong> Specify the
													resources, equipment, or services you wish to provide
												</span>
											</li>
											<li className='flex gap-3'>
												<span className='font-bold text-accent'>2.</span>
												<span>
													<strong>Valuation:</strong> CleanSpace Global will
													assess the current market value
												</span>
											</li>
											<li className='flex gap-3'>
												<span className='font-bold text-accent'>3.</span>
												<span>
													<strong>Tier Alignment:</strong> Value matched against
													sponsorship tiers (e.g., ₦400,000 = Silver Sponsor
													benefits)
												</span>
											</li>
											<li className='flex gap-3'>
												<span className='font-bold text-accent'>4.</span>
												<span>
													<strong>Benefit Activation:</strong> Receive all
													branding, speaking, and media rights for your tier
												</span>
											</li>
										</ol>
									</div>

									{/* Resource Form */}
									<form
										onSubmit={handleSubmit(onResourceSubmit)}
										className='space-y-6'>
										{/* Organization Details */}
										<div className='grid sm:grid-cols-2 gap-6'>
											<div className='space-y-2'>
												<label className='text-sm font-semibold text-foreground'>
													Organization Name{" "}
													<span className='text-destructive'>*</span>
												</label>
												<input
													{...register("organizationName")}
													disabled={isSubmitting}
													className={cn(
														"w-full bg-background border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors",
														errors.organizationName
															? "border-destructive focus:border-destructive"
															: "border-border",
													)}
													placeholder='Your Company Ltd.'
												/>
												{errors.organizationName && (
													<p className='text-destructive text-sm'>
														{errors.organizationName.message}
													</p>
												)}
											</div>

											<div className='space-y-2'>
												<label className='text-sm font-semibold text-foreground'>
													Contact Person Name{" "}
													<span className='text-destructive'>*</span>
												</label>
												<input
													{...register("contactName")}
													disabled={isSubmitting}
													className={cn(
														"w-full bg-background border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors",
														errors.contactName
															? "border-destructive focus:border-destructive"
															: "border-border",
													)}
													placeholder='John Doe'
												/>
												{errors.contactName && (
													<p className='text-destructive text-sm'>
														{errors.contactName.message}
													</p>
												)}
											</div>
										</div>

										<div className='grid sm:grid-cols-2 gap-6'>
											<div className='space-y-2'>
												<label className='text-sm font-semibold text-foreground'>
													Email Address{" "}
													<span className='text-destructive'>*</span>
												</label>
												<input
													{...register("email")}
													disabled={isSubmitting}
													type='email'
													className={cn(
														"w-full bg-background border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors",
														errors.email
															? "border-destructive focus:border-destructive"
															: "border-border",
													)}
													placeholder='john@company.com'
												/>
												{errors.email && (
													<p className='text-destructive text-sm'>
														{errors.email.message}
													</p>
												)}
											</div>

											<div className='space-y-2'>
												<label className='text-sm font-semibold text-foreground'>
													Phone Number{" "}
													<span className='text-destructive'>*</span>
												</label>
												<input
													{...register("phone")}
													disabled={isSubmitting}
													className={cn(
														"w-full bg-background border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors",
														errors.phone
															? "border-destructive focus:border-destructive"
															: "border-border",
													)}
													placeholder='+234 800 000 0000'
												/>
												{errors.phone && (
													<p className='text-destructive text-sm'>
														{errors.phone.message}
													</p>
												)}
											</div>
										</div>

										{/* Resource Category */}
										<div className='space-y-2'>
											<label className='text-sm font-semibold text-foreground'>
												Resource Category{" "}
												<span className='text-destructive'>*</span>
											</label>
											<Controller
												name='resourceCategory'
												control={control}
												render={({ field }) => (
													<Select
														onValueChange={field.onChange}
														value={field.value}>
														<SelectTrigger
															disabled={isSubmitting}
															className={cn(
																"w-full h-12 bg-background border-2 rounded-xl px-4 text-foreground",
																errors.resourceCategory
																	? "border-destructive"
																	: "border-border",
															)}>
															<SelectValue placeholder='Select a category' />
														</SelectTrigger>
														<SelectContent>
															{RESOURCE_CATEGORIES.map((category) => (
																<SelectItem
																	key={category.value}
																	value={category.value}>
																	{category.label}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
												)}
											/>
											{errors.resourceCategory && (
												<p className='text-destructive text-sm'>
													{errors.resourceCategory.message}
												</p>
											)}

											{/* Category descriptions */}
											<div className='mt-4 space-y-2'>
												{RESOURCE_CATEGORIES.map((category) => (
													<div
														key={category.value}
														className='text-xs text-muted-foreground bg-muted/30 p-3 rounded-lg'>
														<strong className='text-foreground'>
															{category.label}:
														</strong>{" "}
														{category.description}
													</div>
												))}
											</div>
										</div>

										{/* Resource Description */}
										<div className='space-y-2'>
											<label className='text-sm font-semibold text-foreground'>
												Detailed Resource Description{" "}
												<span className='text-destructive'>*</span>
											</label>
											<textarea
												disabled={isSubmitting}
												{...register("resourceDescription")}
												rows={5}
												className={cn(
													"w-full bg-background border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none",
													errors.resourceDescription
														? "border-destructive focus:border-destructive"
														: "border-border",
												)}
												placeholder='Please provide detailed information about the resources, equipment, or services you wish to contribute. Include quantities, specifications, and any relevant details...'
											/>
											{errors.resourceDescription && (
												<p className='text-destructive text-sm'>
													{errors.resourceDescription.message}
												</p>
											)}
										</div>

										{/* Estimated Value (Optional) */}
										<div className='space-y-2'>
											<label className='text-sm font-semibold text-foreground'>
												Estimated Market Value (Optional)
											</label>
											<input
												disabled={isSubmitting}
												{...register("estimatedValue")}
												className='w-full bg-background border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors border-border'
												placeholder='₦500,000 (if known)'
											/>
											<p className='text-xs text-muted-foreground'>
												If you know the approximate market value of your
												contribution, please share it. Otherwise, our team will
												assess it professionally.
											</p>
										</div>

										<Button
											type='submit'
											size='lg'
											className='w-full text-lg'
											disabled={isSubmitting}>
											<Send
												className='mr-2'
												size={20}
											/>
											{isSubmitting
												? "Submitting..."
												: "Submit Resource Sponsorship"}
										</Button>

										<p className='text-sm text-muted-foreground text-center'>
											Our team will review your submission and contact you
											within 24-48 hours
										</p>
									</form>
								</motion.div>
							)}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
