import type { Resource } from "./types";
import { photoShotList } from "./photo-shot-list";
import { strikethroughPricing } from "./strikethrough-pricing";
import { cancellationPolicy } from "./cancellation-policy";
import { guestMessages } from "./guest-messages";
import { fiveStarReviews } from "./five-star-reviews";

/**
 * Every published free resource, in the order they should be listed.
 * Add a lesson by writing one content file and registering it here.
 */
const ALL: Resource[] = [
  photoShotList,
  guestMessages,
  cancellationPolicy,
  fiveStarReviews,
  strikethroughPricing,
];

export const RESOURCES: Record<string, Resource> = Object.fromEntries(
  ALL.map((r) => [r.slug, r]),
);

export const RESOURCE_LIST: Resource[] = ALL;

export function getResource(slug: string): Resource | undefined {
  return RESOURCES[slug];
}

export type { Resource };
