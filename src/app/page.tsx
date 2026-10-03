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

export default function Home() {
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
