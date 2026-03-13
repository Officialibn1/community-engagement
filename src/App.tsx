import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import SponsorRegistration from "./pages/SponsorRegistration";
import SponsorRegistrationSuccess from "./pages/SponsorRegistrationSuccess";
import ExhibitorRegistration from "./pages/ExhibitorRegistration";
import ExhibitorRegistrationSuccess from "./pages/ExhibitorRegistrationSuccess";
import NotFound from "@/pages/not-found";
import ParticipantRegistration from "./pages/ParticipantRegisteration";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 1000 * 60 * 5,
		},
	},
});

function Router() {
	return (
		<Switch>
			<Route
				path='/'
				component={Home}
			/>
			<Route
				path='/sponsor-registration'
				component={SponsorRegistration}
			/>
			<Route
				path='/sponsor-registration/success'
				component={SponsorRegistrationSuccess}
			/>
			<Route
				path='/exhibitor-registration'
				component={ExhibitorRegistration}
			/>
			<Route
				path='/exhibitor-registration/success'
				component={ExhibitorRegistrationSuccess}
			/>
			<Route
				path='/participant-registration'
				component={ParticipantRegistration}
			/>
			<Route component={NotFound} />
		</Switch>
	);
}

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
					<div className='min-h-screen flex flex-col w-full bg-background text-foreground font-sans'>
						<Navbar />
						<Router />
						<Footer />
					</div>
				</WouterRouter>
				<Toaster />
			</TooltipProvider>
		</QueryClientProvider>
	);
}

export default App;
