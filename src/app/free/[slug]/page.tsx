import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourcePage from "@/components/resource/ResourcePage";
import { RESOURCE_LIST, getResource } from "@/content/resources";

export function generateStaticParams() {
  return RESOURCE_LIST.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};

  return {
    title: `${resource.title} — Host Insider Pro`,
    description: resource.metaDescription,
    openGraph: {
      title: `${resource.title} — Host Insider Pro`,
      description: resource.metaDescription,
      type: "article",
    },
  };
}

export default async function FreeResource({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  return <ResourcePage resource={resource} />;
}
