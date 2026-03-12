import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const contactSchema = z.object({
	name: z.string().min(2, "Name is required"),
	phone: z.string().min(10, "Valid phone is required"),
	email: z.string().email("Valid email is required"),
	message: z.string().min(10, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
	const { toast } = useToast();
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting, errors },
	} = useForm<ContactFormValues>({
		resolver: zodResolver(contactSchema),
	});

	const onSubmit = async (data: ContactFormValues) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		console.log("Form submitted", data);
		toast({
			title: "Message Sent!",
			description: "Thank you for reaching out. We'll get back to you shortly.",
			variant: "default",
		});
		reset();
	};

	return (
		<section className='bg-card border-t border-border'>
			<div className='grid lg:grid-cols-2'>
				<div className='bg-primary text-white p-12 xl:p-24 flex flex-col justify-center'>
					<h2 className='text-4xl md:text-5xl font-display font-bold mb-6'>
						Get in Touch
					</h2>
					<p className='text-white/80 mb-12 text-lg'>
						Have a question about booking a facility or an upcoming event? Our
						team is here to help.
					</p>

					<div className='space-y-8'>
						<div className='flex items-start gap-6'>
							<div className='bg-accent/20 p-4 rounded-2xl text-accent'>
								<Phone size={28} />
							</div>
							<div>
								<p className='font-bold text-xl mb-1'>Call Us</p>
								<p className='text-white/70'>+234 7084906378</p>
							</div>
						</div>

						<div className='flex items-start gap-6'>
							<div className='bg-accent/20 p-4 rounded-2xl text-accent'>
								<Mail size={28} />
							</div>
							<div>
								<p className='font-bold text-xl mb-1'>Email Us</p>
								<p className='text-white/70'>cleanspaceglobal.ng@gmail.com</p>
							</div>
						</div>

						<div className='flex items-start gap-6'>
							<div className='bg-accent/20 p-4 rounded-2xl text-accent'>
								<MapPin size={28} />
							</div>
							<div>
								<p className='font-bold text-xl mb-1'>Meet Us At</p>
								<p className='text-white/70'>Jabi Lake Park, FCT, Abuja.</p>
							</div>
						</div>
					</div>
				</div>

				<div className='p-12 xl:p-24 flex flex-col justify-center bg-background'>
					<h3 className='text-3xl font-bold text-foreground mb-8'>
						Send a Message
					</h3>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='space-y-6'>
						<div className='grid sm:grid-cols-2 gap-6'>
							<div className='space-y-2'>
								<label className='text-sm font-semibold text-foreground'>
									Your Name
								</label>
								<input
									{...register("name")}
									className={cn(
										"w-full bg-card border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors",
										errors.name
											? "border-destructive focus:border-destructive"
											: "border-border",
									)}
									placeholder='John Doe'
								/>
								{errors.name && (
									<p className='text-destructive text-sm'>
										{errors.name.message}
									</p>
								)}
							</div>
							<div className='space-y-2'>
								<label className='text-sm font-semibold text-foreground'>
									Phone Number
								</label>
								<input
									{...register("phone")}
									className={cn(
										"w-full bg-card border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors",
										errors.phone
											? "border-destructive focus:border-destructive"
											: "border-border",
									)}
									placeholder='(555) 000-0000'
								/>
								{errors.phone && (
									<p className='text-destructive text-sm'>
										{errors.phone.message}
									</p>
								)}
							</div>
						</div>

						<div className='space-y-2'>
							<label className='text-sm font-semibold text-foreground'>
								Email Address
							</label>
							<input
								{...register("email")}
								type='email'
								className={cn(
									"w-full bg-card border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors",
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

						<div className='space-y-2'>
							<label className='text-sm font-semibold text-foreground'>
								Message
							</label>
							<textarea
								{...register("message")}
								rows={5}
								className={cn(
									"w-full bg-card border-2 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none",
									errors.message
										? "border-destructive focus:border-destructive"
										: "border-border",
								)}
								placeholder='How can we help you?'
							/>
							{errors.message && (
								<p className='text-destructive text-sm'>
									{errors.message.message}
								</p>
							)}
						</div>

						<Button
							type='submit'
							size='lg'
							className='w-full'
							disabled={isSubmitting}>
							{isSubmitting ? "Sending..." : "Submit Message"}
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
