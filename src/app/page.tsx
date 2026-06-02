import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Achievements } from "@/components/sections/Achievements";
import { Transformation } from "@/components/sections/Transformation";
import { Testimonials } from "@/components/sections/Testimonials";
import { Booking } from "@/components/sections/Booking";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Achievements />
      <Transformation />
      <Testimonials />
      <Booking />
      <Blog />
      <Contact />
    </>
  );
}
