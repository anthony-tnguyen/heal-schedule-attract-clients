
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-pattern min-h-[90vh] px-4 py-20 flex items-center justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Path to Recovery Starts Here
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Expert physical therapy tailored to your needs. Experience personalized care and proven techniques that help you recover faster and stronger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg" onClick={() => scrollToSection("appointment-section")}>
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection("services-section")}>
              View Services
            </Button>
          </div>
        </div>
        <div className="lg:mt-0 mt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Personalized Treatment</h3>
                  <p className="text-muted-foreground">Customized therapy plans tailored to your specific needs and goals.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Expert Care</h3>
                  <p className="text-muted-foreground">Certified therapists with years of experience in various conditions.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Modern Techniques</h3>
                  <p className="text-muted-foreground">Latest therapeutic methods and state-of-the-art equipment.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Convenient Scheduling</h3>
                  <p className="text-muted-foreground">Easy online booking and flexible appointment times.</p>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
