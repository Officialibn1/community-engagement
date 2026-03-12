// The homepage has a full contact section at the bottom, so we'll reuse it but focus on it.
export default function Contact() {
	return (
		<main className='flex-1 w-full pt-20'>
			<div className='bg-card py-16 text-center border-b border-border'>
				<h1 className='text-5xl font-display font-bold mb-4'>Contact Us</h1>
				<p className='text-xl text-muted-foreground'>
					We'd love to hear from you.
				</p>
			</div>
			{/* Reusing the contact section from the homepage would be ideal, but for simplicity we render a placeholder that redirects or just render Home and scroll. Let's just build a focused one here. */}

			<div className='container mx-auto px-4 py-20 max-w-3xl text-center'>
				<div className='bg-primary text-white p-12 rounded-3xl shadow-xl'>
					<h2 className='text-3xl font-bold mb-6'>Need assistance?</h2>
					<p className='text-lg text-white/80 mb-8'>
						Please return to the homepage and use the comprehensive contact form
						at the bottom of the page, or email us directly.
					</p>
					<p className='text-2xl font-bold text-accent mb-2'>
						hello@arvidcityhall.org
					</p>
					<p className='text-xl'>(555) 123-4567</p>
				</div>
			</div>
		</main>
	);
}
