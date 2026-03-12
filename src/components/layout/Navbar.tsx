import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Building2, HeartHandshake, Menu, Ticket, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const links = [
	{ href: "/", label: "Home" },
	// { href: "#register", label: "Register" },
	// { href: "#sponsor", label: "Sponsor" },
	{ href: "#contact", label: "Contact" },
];

export function Navbar() {
	const [location] = useLocation();
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu on route change
	useEffect(() => {
		setMobileMenuOpen(false);
	}, [location]);

	return (
		<>
			<header
				className={cn(
					"fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
					isScrolled
						? "bg-primary/95 backdrop-blur-md border-white/10 shadow-lg py-3"
						: "bg-primary border-transparent py-5",
				)}>
				<div className='container mx-auto px-4 md:px-6 flex items-center justify-between'>
					<Link
						href='/'
						className='flex items-center gap-2 group'>
						<div className='bg-accent text-accent-foreground rounded-2xl group-hover:scale-110 transition-transform duration-300 w-14 h-14 '>
							<img
								src='/cleaspace_small.jpeg'
								className='w-full h-full rounded-sm'
								alt='cleanspace'
							/>
						</div>
						<span className='font-display text-2xl font-bold text-white tracking-wide'>
							CLEANSPACE GLOBAL
						</span>
					</Link>

					{/* Desktop Nav */}
					<nav className='hidden md:flex items-center gap-8'>
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={cn(
									"text-sm font-medium transition-colors hover:text-accent relative py-2",
									location === link.href ? "text-white" : "text-white/70",
								)}>
								{link.label}
								{location === link.href && (
									<motion.div
										layoutId='navbar-indicator'
										className='absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full'
										transition={{ type: "spring", stiffness: 300, damping: 30 }}
									/>
								)}
							</Link>
						))}
					</nav>

					<div className='hidden lg:flex gap-5 items-center'>
						<Link href='/exhibitor-registration'>
							<Button variant={"outlineWhite"}>
								<Ticket /> Register Now
							</Button>
						</Link>

						<Link href='/sponsor-registration'>
							<Button className='shadow-lg shadow-accent/20'>
								<HeartHandshake /> Sponsor
							</Button>
						</Link>
					</div>

					{/* Mobile Menu Toggle */}
					<button
						className='lg:hidden text-white p-2'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label='Toggle menu'>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</header>

			{/* Mobile Nav Drawer */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className='fixed inset-0 z-40 bg-primary pt-24 px-6 pb-6 flex flex-col lg:hidden'>
						<nav className='flex flex-col gap-6 text-center mt-10'>
							{links.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className={cn(
										"text-2xl font-display transition-colors",
										location === link.href ? "text-accent" : "text-white",
									)}>
									{link.label}
								</Link>
							))}
							<div className='mt-8 pt-8 border-t border-white/10 flex flex-col gap-5 justify-center'>
								<Link href='#'>
									<Button variant={"outlineWhite"}>
										<Ticket /> Register Participant
									</Button>
								</Link>

								<Link href='/exhibitor-registration'>
									<Button variant={"secondary"}>
										<Ticket /> Register Exhibitor
									</Button>
								</Link>

								<Link href='/sponsor-registration'>
									<Button className='shadow-lg shadow-accent/20'>
										<HeartHandshake /> Sponsor
									</Button>
								</Link>
							</div>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
