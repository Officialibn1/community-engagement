import {
	HeroSection,
	FeaturesSection,
	FacilitiesSection,
	StatisticsSection,
	SupportCTASection,
	GallerySection,
	ContactSection,
	SponsorshipSection,
	EventProgramSection,
} from "@/components/sections";

export default function Home() {
	return (
		<main className='flex-1 w-full overflow-hidden pt-20'>
			<HeroSection />
			<FeaturesSection />
			<EventProgramSection />
			<SponsorshipSection />
			<SupportCTASection />
			<FacilitiesSection />
			{/* <TeamSection /> */}
			<ContactSection />
			{/* <GallerySection /> */}
			{/* <EventsSection /> */}
			<StatisticsSection />
		</main>
	);
}
