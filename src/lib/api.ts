const BASE_URL = import.meta.env.VITE_API_URL || "";

async function post<T>(endpoint: string, data: unknown): Promise<T> {
	const res = await fetch(`${BASE_URL}${endpoint}`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});

	const json = await res.json();
	if (!res.ok) throw new Error(json.message || "Request failed");
	return json;
}

export const api = {
	contact: (data: {
		name: string;
		email: string;
		phone: string;
		message: string;
	}) => post("/api/contact", data),

	resourceSponsor: (data: {
		organizationName: string;
		contactName: string;
		email: string;
		phone: string;
		resourceCategory: string;
		resourceDescription: string;
		estimatedValue?: string;
	}) => post("/api/resource-sponsor", data),

	newsletter: (data: { email: string }) => post("/api/newsletter", data),
};
