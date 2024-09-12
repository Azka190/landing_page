import Companies from "@/components/Companies";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return(
    <div className="bg-[#f2f6ff]">
      <Navbar />
      <Hero />
      <Companies />
    </div>
  );
}
