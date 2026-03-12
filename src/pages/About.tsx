export default function About() {
  return (
    <main className="flex-1 w-full pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-display font-bold mb-8 text-center">About Arvid City Hall</h1>
        
        <div className="prose prose-lg mx-auto text-muted-foreground">
          <p className="lead text-xl font-medium text-foreground mb-8">
            Founded in 1924, Arvid City Hall has stood as the central pillar of our community for nearly a century.
          </p>
          
          <p className="mb-6">
            Our mission is simple: to provide a welcoming, accessible, and versatile space where the citizens of Arvid can come together. Whether it's celebrating life's milestones, engaging in local governance, pursuing fitness goals, or simply enjoying the company of neighbors, the Hall belongs to everyone.
          </p>
          
          <div className="my-12 rounded-2xl overflow-hidden shadow-lg border border-border">
             {/* historical building */}
             <img src="https://pixabay.com/get/g5025695efd9683e8b3880d85e7e04a668c6bb513943e08d510fc087987fb9ccff166b01963df11f23d846726f2accaa9499644f50125f77dda684ca335278344_1280.jpg" alt="Historic City Hall" className="w-full h-auto" />
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
          <ul className="space-y-4 mb-8">
            <li><strong>Inclusivity:</strong> We ensure our doors are open and our spaces are accessible to all members of our diverse community.</li>
            <li><strong>Sustainability:</strong> We are committed to maintaining our historic building while implementing modern, green practices.</li>
            <li><strong>Community First:</strong> Every decision made by our management team prioritizes the needs and desires of Arvid's residents.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
