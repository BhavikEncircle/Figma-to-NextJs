import Image from "next/image";
import { BreadCrumb } from "./components/BreadCrumb";
import { Navbar } from "./components/Navbar";
import Features from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Statistics } from "./components/Statistics";
import { Gallery } from "./components/Gallery";
import { Subscription } from "./components/Subscription";
import { Footer } from "./components/Footer";

export default function Aboutus() {
  return (
    <main>
      <Navbar />
      <section className="relative h-[60vh] md:h-[80vh]">
        <Image
          src="/Banner.png"
          alt="Banner"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <BreadCrumb title="About us" path="About us" />
      </section>
      <br />
      <Features />
      <br />
      <Testimonials />
      <br />
      <Statistics />
      <br />
      <Gallery />
      <br />
      <Subscription />
      <br />
      <Footer />
    </main>
  );
}
