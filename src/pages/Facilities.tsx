import { Button } from "@/components/ui/button";

export default function Facilities() {
  return (
    <main className="flex-1 w-full pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-display font-bold mb-6">Our Facilities</h1>
          <p className="text-xl text-muted-foreground">Discover the perfect space for your next event, meeting, or activity.</p>
        </div>
        
        <div className="bg-card rounded-2xl border border-border p-12 text-center shadow-sm">
           <h2 className="text-2xl font-bold mb-4">Online Booking Coming Soon</h2>
           <p className="text-muted-foreground mb-8">We are currently upgrading our booking system. To reserve a facility, please contact us directly.</p>
           <Button size="lg" onClick={() => window.location.href='/contact'}>Contact Us to Book</Button>
        </div>
      </div>
    </main>
  );
}
