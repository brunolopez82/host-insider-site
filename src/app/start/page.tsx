import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustStrip, ProblemSection } from "@/components/TrustAndProblem";
import { WhatsInside } from "@/components/WhatsInside";
import { Academy } from "@/components/Academy";
import { NewHostPath } from "@/components/NewHostPath";
import { RealCases } from "@/components/RealCases";
import { AIMarketing } from "@/components/AIMarketing";
import { WhyBruno } from "@/components/WhyBruno";
import { Differentiator } from "@/components/Differentiator";
import { FoundingMembers } from "@/components/FoundingMembers";
import { Principles } from "@/components/Principles";
import { WhoThisIsFor } from "@/components/WhoThisIsFor";
import { FinalCTA, Footer } from "@/components/FinalCTAAndFooter";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "What's Inside — Host Insider Pro",
  description:
    "Everything inside Host Insider Pro: listing optimization, pricing, AI and automation, host protection, the Academy, and the Monthly Host Hangout. Built by a former Airbnb Resolutions agent.",
};

export default function StartPage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <WhatsInside />
      <Academy />
      <NewHostPath />
      <RealCases />
      <AIMarketing />
      <WhyBruno />
      <Differentiator />
      <FoundingMembers />
      <Principles />
      <WhoThisIsFor />
      <FinalCTA />
      <FAQ />
      <Footer />
    </>
  );
}
