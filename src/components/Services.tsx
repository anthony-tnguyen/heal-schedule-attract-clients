
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BriefcaseMedical, 
  Heart, 
  Bandage, 
  Thermometer,
  Smartphone
} from "lucide-react";

const services = [
  {
    title: "Sports Rehabilitation",
    description: "Specialized treatment for sports-related injuries and performance enhancement.",
    Icon: BriefcaseMedical
  },
  {
    title: "Pain Management",
    description: "Expert techniques to alleviate chronic pain and improve mobility.",
    Icon: Heart
  },
  {
    title: "Post-Surgery Recovery",
    description: "Tailored rehabilitation programs for post-operative patients.",
    Icon: Bandage
  },
  {
    title: "Preventive Care",
    description: "Programs designed to prevent injuries and maintain optimal health.",
    Icon: Thermometer
  },
  {
    title: "Mobile Services",
    description: "Convenient physical therapy services delivered directly to your home or workplace.",
    Icon: Smartphone
  }
];

export default function Services() {
  return (
    <section id="services-section" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="transition-all hover:shadow-lg">
              <CardHeader>
                <service.Icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
