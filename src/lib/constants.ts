export const EVENT_DATE = new Date("2026-03-28T00:00:00");

export const EVENT_ACTIVITIES = [
	{
		id: 1,
		time: "7:00 AM - 8:30 AM",
		title: "Fitness Walk (Morning Walk)",
		description:
			"Promote community engagement and healthy living through an energizing morning walk around Jabi Lake Park.",
		icon: "walk",
		color: "from-blue-500 to-cyan-500",
		highlights: ["Community engagement", "Healthy living", "Scenic route"],
	},
	{
		id: 2,
		time: "8:30 AM - 11:00 AM",
		title: "Environmental Sanitation (Waste Collection)",
		description:
			"Volunteers assigned to zones with gloves, trash bags, and collection bins to clean up the park.",
		icon: "cleanup",
		color: "from-green-500 to-emerald-500",
		highlights: [
			"Zone assignments",
			"Professional equipment",
			"Team coordination",
		],
	},
	{
		id: 3,
		time: "11:00 AM - 12:30 PM",
		title: "Health & Environmental Awareness Sessions",
		description:
			"Educational talks on sustainability and health with distribution of informative materials.",
		icon: "awareness",
		color: "from-purple-500 to-pink-500",
		highlights: [
			"Expert speakers",
			"Sustainability topics",
			"Educational materials",
		],
	},
	{
		id: 4,
		time: "12:30 PM - 2:00 PM",
		title: "Community Engagement & Networking",
		description:
			"Interactive booths for vendors and NGOs with engaging activities for all participants.",
		icon: "network",
		color: "from-orange-500 to-red-500",
		highlights: ["Vendor booths", "NGO partnerships", "Interactive activities"],
	},
	{
		id: 5,
		time: "2:00 PM - 4:00 PM",
		title: "Paint & Sip Competition",
		description:
			"Art competition with refreshments, prize awards, and auction of artworks.",
		icon: "art",
		color: "from-pink-500 to-rose-500",
		highlights: ["Art competition", "Refreshments", "Prize awards & auction"],
	},
	{
		id: 6,
		time: "4:00 PM - 5:00 PM",
		title: "Mural Donation by Silkcoat Nigeria",
		description:
			"Creation of a permanent mural promoting clean, sustainable public spaces.",
		icon: "mural",
		color: "from-indigo-500 to-purple-500",
		highlights: [
			"Permanent installation",
			"Sustainability message",
			"Community art",
		],
	},
] as const;

export const SPONSORSHIP_TIERS = {
	PLATINUM: {
		name: "PLATINUM",
		label: "Lead Sponsor",
		amount: 1000000,
		displayAmount: "₦1,000,000",
		benefits: [
			"Named as the Lead Sponsor on all event communications",
			"Opportunity to deliver the Keynote Speech during the ceremony",
			"Largest logo placement on banners, flyers, volunteer T-shirts, and event backdrop",
			"Direct brand mentions in all press releases and media engagements",
			"Priority placement for a corporate exhibition stand at the venue",
			"Full-page profile/advertisement in the official event brochure",
		],
	},
	GOLD: {
		name: "GOLD",
		label: "Major Sponsor",
		amount: 700000,
		displayAmount: "₦700,000",
		benefits: [
			"Named as a Major Sponsor of the programme",
			"Opportunity to deliver a brief Goodwill Message",
			"Half-page advertisement in the event brochure",
			"Prominent logo on selected publicity materials and banners at strategic locations",
			"Opportunity to distribute branded materials and souvenirs to participants",
		],
	},
	SILVER: {
		name: "SILVER",
		label: "Supporting Partner",
		amount: 400000,
		displayAmount: "₦400,000",
		benefits: [
			"Recognized as an official Supporting Sponsor",
			"Logo placement on selected publicity materials and banners in designated areas",
			"Dedicated social media acknowledgments and verbal recognition by the MC",
			"Quarter-page corporate mention or profile in the event brochure",
		],
	},
	BRONZE: {
		name: "BRONZE",
		label: "Event Supporter",
		amount: 250000,
		displayAmount: "₦250,000",
		benefits: [
			"Recognized as an Official Supporter of the initiative",
			"Brand name and logo listing in the event brochure",
			"Mention in group appreciation posts across digital platforms",
			"Presentation of an official Certificate of Participation",
		],
	},
} as const;

export type SponsorshipTier = keyof typeof SPONSORSHIP_TIERS;

export const PAYSTACK_URLS = {
	SPONSOR: {
		PLATINUM:
			"https://paystack.shop/pay/cleanspace-platinum-sponsor-registration",
		GOLD: "https://paystack.shop/pay/cleanspace-gold-sponsor-registration",
		SILVER: "https://paystack.shop/pay/cleanspace-silver-sponsor-registration",
		BRONZE: "https://paystack.shop/pay/cleanspace-bronze-sponsor-registration",
	},
	EXHIBITOR: "https://paystack.shop/pay/cleanspace-exhibitor-registration",
} as const;

export const RESOURCE_CATEGORIES = [
	{
		value: "logistics",
		label: "Logistics & Cleaning Equipment",
		description:
			"Waste disposal trucks, professional-grade cleaning tools, or safety gear for volunteers",
	},
	{
		value: "media",
		label: "Media & Communication",
		description:
			"Sponsored radio/TV airtime, billboard placements, or professional photography and video production",
	},
	{
		value: "branding",
		label: "Branding & Printing",
		description:
			"High-quality printing of event brochures, banners, or branded volunteer apparel",
	},
	{
		value: "volunteer",
		label: "Volunteer Support",
		description:
			"Provision of refreshments, healthy snacks, or hydration stations for participants",
	},
] as const;
