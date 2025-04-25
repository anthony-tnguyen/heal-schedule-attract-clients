
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AppointmentForm from "@/components/AppointmentForm";
import DoctorProfile from "@/components/DoctorProfile";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <DoctorProfile />
      <Services />
      <AppointmentForm />
    </main>
  );
};

export default Index;
