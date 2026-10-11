import type { Metadata } from "next";
import {
  HomeHero,
  HomeProblem,
  HomeLiveToday,
  HomeOverview,
  HomeRoom,
  HomeMethod,
  HomeBeingBuilt,
  HomeCredibility,
  HomeNoProof,
  HomeObjection,
  HomeForWhom,
  HomeFAQ,
  HomePricing,
  HomeClose,
} from "@/components/home/HomeSections";

export const metadata: Metadata = {
  title: "Host Insider Pro — a private community for Airbnb hosts",
  description:
    "A private, hosts-only community for Airbnb hosts and co-hosts worldwide, run by a former Airbnb Resolutions agent who mediated 3,000+ disputes. Independent, with no guaranteed outcomes.",
};

/**
 * Section order follows the Offer-First blueprint for a solution-aware
 * audience: orient, name the problem, show what is live, show what is not,
 * establish credibility, handle the money objection, qualify, answer
 * questions, price, close.
 *
 * Price appears once, in HomePricing, after value is established — and
 * nothing public-facing follows the final CTA.
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProblem />
      <HomeLiveToday />
      <HomeOverview />
      <HomeRoom />
      <HomeMethod />
      <HomeBeingBuilt />
      <HomeCredibility />
      <HomeNoProof />
      <HomeObjection />
      <HomeForWhom />
      <HomeFAQ />
      <HomePricing />
      <HomeClose />
    </>
  );
}
