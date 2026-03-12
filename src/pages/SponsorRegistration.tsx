import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HeartHandshake, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const sponsorSchema = z.object({
	fullName: z.string().min(2, "Full name is required"),
	email: z.string().email("Valid email is required"),
	phone: z.string().min(10, "Valid phone number is required"),
	organizationName: z.string().min(2, "Organization name is required"),
	tier: z.enum(["PLATINUM", "GOLD", "SILVER", "BRONZE"], {
		required_error: "Please select a sponsorship tier",
	}),
});

type SponsorFormValues = z.infer<typeof sponsorSchema>;

const tierPricing = {
	PLATINUM: { amount: 1000000, label: "₦1,000,000" },
	GOLD: { amount: 700000, label: "₦700,000" },
	SILVER: { amount: 400000, label: "₦400,000" },
	BRONZE: { amount: 250000, label: "₦250,000" },
};

const getTierStyles = (tier: keyof typeof tierPricing) => {
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
	const [selectedTier, setSelectedTier] = useState<
		keyof typeof tierPricing | null
	>(null);

	const {
		register,
		handleSubmit,
		setValue,
		formState: { isSubmitting, errors },
	} = useForm<SponsorFormValues>({
		resolver: zodResolver(sponsorSchema),
	});

	const onSubmit = async (data: SponsorFormValues) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		console.log("Sponsor Registration:", data);
		console.log("Amount to pay:", tierPricing[data.tier].amount);

		// TODO: Integrate Paystack payment here

		toast({
			title: "Registration Submitted!",
			description: `Thank you for registering as a ${data.tier} sponsor. Payment integration coming soon.`,
			variant: "default",
		});
	};

	const handleTierSelect = (tier: keyof typeof tierPricing) => {
		setSelectedTier(tier);
		setValue("tier", tier);
	};

	return (
		<main className='flex-1 w-full overflow-hidden pt-20'>
			<section className='py-24 bg-gradient-to-br from-primary via-primary to-accent/20 text-white'>
				<div className='container mx-auto px-4 md:px-6'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className='max-w-4xl mx-auto text-center mb-12'>
						<HeartHandshake className='w-16 h-16 text-accent mx-auto mb-6' />
						<h1 className='text-4xl md:text-6xl font-display font-bold mb-6'>
							Become a Sponsor
						</h1>
						<p className='text-xl text-white/80 leading-relaxed'>
							Join us in making a difference in the Jabi community. Select your
							sponsorship tier and complete the registration.
						</p>
					</motion.div>
				</div>
			</section>

			<section className='py-16 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='max-w-4xl mx-auto'>
						<div className='bg-card rounded-3xl shadow-xl border border-border p-8 md:p-12'>
							<h2 className='text-3xl font-bold text-foreground mb-8'>
								Sponsorship Registration Form
							</h2>

							<form
								onSubmit={handleSubmit(onSubmit)}
								className='space-y-8'>
								{/* Tier Selection */}
								<div className='space-y-4'>
									<label className='text-lg font-semibold text-foreground block'>
										Select Sponsorship Tier
									</label>
									<div className='grid sm:grid-cols-2 gap-4'>
										{(
											Object.keys(tierPricing) as Array<
												keyof typeof tierPricing
											>
										).map((tier) => (
											<button
												key={tier}
												type='button'
												onClick={() => handleTierSelect(tier)}
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
												<div className='text-2xl font-bold text-primary'>
													{tierPricing[tier].label}
												</div>
											</button>
										))}
									</div>
									{errors.tier && (
										<p className='text-destructive text-sm'>
											{errors.tier.message}
										</p>
									)}
								</div>

								{/* Personal Information */}
								<div className='grid sm:grid-cols-2 gap-6'>
									<div className='space-y-2'>
										<label className='text-sm font-semibold text-foreground'>
											Full Name <span className='text-destructive'>*</span>
										</label>
										<input
											{...register("fullName")}
											className={cn(
												"w-full bg-background border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors",
												errors.fullName
													? "border-destructive focus:border-destructive"
													: "border-border",
											)}
											placeholder='John Doe'
										/>
										{errors.fullName && (
											<p className='text-destructive text-sm'>
												{errors.fullName.message}
											</p>
										)}
									</div>

									<div className='space-y-2'>
										<label className='text-sm font-semibold text-foreground'>
											Email Address <span className='text-destructive'>*</span>
										</label>
										<input
											{...register("email")}
											type='email'
											className={cn(
												"w-full bg-background border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors",
												errors.email
													? "border-destructive focus:border-destructive"
													: "border-border",
											)}
											placeholder='john@example.com'
										/>
										{errors.email && (
											<p className='text-destructive text-sm'>
												{errors.email.message}
											</p>
										)}
									</div>
								</div>

								<div className='grid sm:grid-cols-2 gap-6'>
									<div className='space-y-2'>
										<label className='text-sm font-semibold text-foreground'>
											Phone Number <span className='text-destructive'>*</span>
										</label>
										<input
											{...register("phone")}
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

									<div className='space-y-2'>
										<label className='text-sm font-semibold text-foreground'>
											Organization Name{" "}
											<span className='text-destructive'>*</span>
										</label>
										<input
											{...register("organizationName")}
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
								</div>

								{/* Amount Display */}
								{selectedTier && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className='bg-primary/5 border-2 border-primary/20 rounded-2xl p-6'>
										<div className='flex justify-between items-center'>
											<div>
												<p className='text-sm text-muted-foreground mb-1'>
													Total Amount
												</p>
												<p className='text-3xl font-bold text-primary'>
													{tierPricing[selectedTier].label}
												</p>
											</div>
											<div className='text-right'>
												<p className='text-sm text-muted-foreground mb-1'>
													Tier Selected
												</p>
												<p className='text-xl font-bold text-foreground'>
													{selectedTier}
												</p>
											</div>
										</div>
									</motion.div>
								)}

								<Button
									type='submit'
									size='lg'
									className='w-full text-lg'
									disabled={isSubmitting}>
									{isSubmitting ? "Processing..." : "Proceed to Payment"}
								</Button>

								<p className='text-sm text-muted-foreground text-center'>
									Payment integration with Paystack coming soon
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
