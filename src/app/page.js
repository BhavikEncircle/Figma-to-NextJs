import Image from "next/image";
import { BreadCrumb } from "./components/BreadCrumb";
import { Navbar } from "./components/Navbar";
import Features from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Statistics } from "./components/Statistics";

export default function Aboutus() {
  return (
    <main>
      <Navbar />
      <Image
        src="/Banner.png"
        alt="Banner"
        width={1000}
        height={600}
        className="relative w-full h-full z-[-1]"
        priority
      />
      <BreadCrumb title="About us" path="About us" />
      <br />
      <Features />
      <br />
      <Testimonials />
      <br />
      <Statistics />
    </main>
  );
}
