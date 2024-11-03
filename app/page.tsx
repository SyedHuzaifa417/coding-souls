import HeroSection from "@/components/CourseSection";
import Hero from "@/components/Hero";
import ModernContactForm from "@/components/contact";
import backgroundImage from "@/public/img3.jpg";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroSection backgroundImage={backgroundImage} />
      <ModernContactForm />
    </>
  );
}
