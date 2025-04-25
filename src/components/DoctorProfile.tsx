
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DoctorProfile() {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Card className="p-6">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/lovable-uploads/466f50c4-1757-4c11-988a-eb0d3d2f546e.png" alt="Dr. Chris Vu" />
                  <AvatarFallback>CV</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl mb-2">Dr. Chris Vu, DPT</CardTitle>
                  <p className="text-muted-foreground">Board Certified Physical Therapist</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                Dr. Chris Vu is a distinguished board certified physical therapist with specialized certification from The Spinal Manipulation Institute. His expertise combines advanced manual therapy techniques with evidence-based practices to deliver optimal patient outcomes.
              </p>
            </CardContent>
          </Card>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/466f50c4-1757-4c11-988a-eb0d3d2f546e.png" 
              alt="Practice Logo" 
              className="max-w-[300px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
