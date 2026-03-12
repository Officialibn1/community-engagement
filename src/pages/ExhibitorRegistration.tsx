import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Store, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const exhibitorSchema = z.object({
	fullName: z.string().min(2, "Full name is required"),
	email: z.string().email("Valid email is required"),
	phone: z.string().min(10, "Valid phone number is required"),
	businessName: z.string().min(2, "Business name is required"),
	businessDescription: z
		.string()
		.min(10, "Please provide a brief description of your business"),
});

type ExhibitorFormValues = z.infer<typeof exhibitorSchema>;

const EXHIBITOR_FEE = 25000;

export default function ExhibitorRegistration() {
	const { toast } = useToast();

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<ExhibitorFormValues>({
		resolver: zodResolver(exhibitorSchema),
	});

	const onSubmit = async (data: ExhibitorFormValues) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		console.log("Exhibitor Registration:", data);
		console.log("Amount to pay:", EXHIBITOR_FEE);

		// TODO: Integrate Paystack payment here

		toast({
			title: "Registration Submitted!",
			description:
				"Thank you for registering as an exhibitor. Payment integration coming soon.",
			variant: "default",
		});
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
						<p className='text-xl text-white/80 leading-relaxed'>
							Showcase your business at the Jabi Lake Park Community Event.
							Register now for just ₦25,000.
						</p>
					</motion.div>
				</div>
			</section>

			<section className='py-16 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='max-w-4xl mx-auto'>
						<div className='bg-card rounded-3xl shadow-xl border border-border p-8 md:p-12'>
							<h2 className='text-3xl font-bold text-foreground mb-8'>
								Exhibitor Registration Form
							</h2>

							{/* Fee Display */}
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className='bg-accent/5 border-2 border-accent/20 rounded-2xl p-6 mb-8'>
								<div className='flex justify-between items-center'>
									<div>
										<p className='text-sm text-muted-foreground mb-1'>
											Registration Fee
										</p>
										<p className='text-4xl font-bold text-accent'>
											₦{EXHIBITOR_FEE.toLocaleString()}
										</p>
									</div>
									<div className='bg-accent/10 p-4 rounded-full'>
										<CheckCircle2
											className='text-accent'
											size={32}
										/>
									</div>
								</div>
								<p className='text-sm text-muted-foreground mt-4'>
									Includes booth space, table, and promotional materials
								</p>
							</motion.div>

							<form
								onSubmit={handleSubmit(onSubmit)}
								className='space-y-6'>
								{/* Personal Information */}
								<div className='grid sm:grid-cols-2 gap-6'>
									<div className='space-y-2'>
										<label className='text-sm font-semibold text-foreground'>
											Full Name <span className='text-destructive'>*</span>
										</label>
										<input
											{...register("fullName")}
											className={cn(
												"w-full bg-background border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors",
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
												"w-full bg-background border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors",
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
												"w-full bg-background border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors",
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
											Business Name <span className='text-destructive'>*</span>
										</label>
										<input
											{...register("businessName")}
											className={cn(
												"w-full bg-background border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors",
												errors.businessName
													? "border-destructive focus:border-destructive"
													: "border-border",
											)}
											placeholder='Your Business Name'
										/>
										{errors.businessName && (
											<p className='text-destructive text-sm'>
												{errors.businessName.message}
											</p>
										)}
									</div>
								</div>

								<div className='space-y-2'>
									<label className='text-sm font-semibold text-foreground'>
										Business Description{" "}
										<span className='text-destructive'>*</span>
									</label>
									<textarea
										{...register("businessDescription")}
										rows={4}
										className={cn(
											"w-full bg-background border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors resize-none",
											errors.businessDescription
												? "border-destructive focus:border-destructive"
												: "border-border",
										)}
										placeholder='Tell us about your business and what you will be exhibiting...'
									/>
									{errors.businessDescription && (
										<p className='text-destructive text-sm'>
											{errors.businessDescription.message}
										</p>
									)}
								</div>

								<Button
									type='submit'
									size='lg'
									className='w-full text-lg bg-accent hover:bg-accent/90'
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
