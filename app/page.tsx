import { Navigation } from "@/components/navigation/Navigation";
import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { Technologies } from "@/components/technologies/Technologies";
import { Work } from "@/components/projects/Work";
import { WhyUs } from "@/components/about/WhyUs";
import { Process } from "@/components/process/Process";
import { About } from "@/components/about/About";
import { ProjectTypes } from "@/components/about/ProjectTypes";
import { Faq } from "@/components/faq/Faq";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main" className="relative">
        <Hero />
        <Services />
        <Technologies />
        <Work />
        <WhyUs />
        <Process />
        <About />
        <ProjectTypes />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
