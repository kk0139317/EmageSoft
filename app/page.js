import Image from "next/image";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import FooterSection from "@/components/FooterSection";
import TestemonialSection from "@/components/TestemonialSection";
import CTSSection from "@/components/CTSSection";
// import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <main className="">
    {/* <NavBar/> */}
    <HeroSection/>
    <FeatureSection/>
    <StatsSection/>
    <TeamSection/>
    <TestemonialSection/>
    {/* <ContactSection/> */}
    <CTSSection/>
    <FooterSection/>
    </main>
  );
}
