import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

export default function Events() {
  const allEvents = [
    { title: "Weekly Farmers Market", date: "Every Saturday", time: "8:00 AM - 1:00 PM", location: "Outdoor Pavilion" },
    { title: "Town Hall Open Forum", date: "Nov 15, 2023", time: "7:00 PM", location: "Main Hall" },
    { title: "Youth Soccer Tryouts", date: "Nov 18, 2023", time: "9:00 AM", location: "Sports Pitch" },
    { title: "Senior Citizen Coffee Morning", date: "Every Tuesday", time: "10:00 AM", location: "Multi-Use Room" },
  ];

  return (
    <main className="flex-1 w-full pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-5xl font-display font-bold mb-4">Event Calendar</h1>
            <p className="text-xl text-muted-foreground">Join us for upcoming activities and gatherings.</p>
          </div>
          <Button>Submit an Event</Button>
        </div>
        
        <div className="space-y-6">
          {allEvents.map((ev, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{ev.title}</h3>
                <div className="flex flex-wrap gap-4 text-muted-foreground text-sm font-medium">
                  <span className="flex items-center gap-1"><Calendar size={16} className="text-accent" /> {ev.date} at {ev.time}</span>
                  <span className="flex items-center gap-1"><MapPin size={16} className="text-accent" /> {ev.location}</span>
                </div>
              </div>
              <Button variant="outline" className="shrink-0">Learn More</Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
