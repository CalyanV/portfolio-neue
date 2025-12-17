import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  // Exclude projects that have dedicated pages
  const excludedSlugs = ['apple', 'forge'];

  return DATA.projects
    .filter((project) => {
      const slug = project.href?.replace("/projects/", "") || "";
      return !excludedSlugs.includes(slug);
    })
    .map((project) => ({
      slug: project.href?.replace("/projects/", "") || "",
    }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  const project = DATA.projects.find(
    (p) => p.href === `/projects/${params.slug}`
  );

  if (!project) {
    return;
  }

  const { title, description } = project;
  const ogImage = project.image
    ? `${DATA.url}${project.image}`
    : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${DATA.url}/projects/${params.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const project = DATA.projects.find(
    (p) => p.href === `/projects/${params.slug}`
  );

  if (!project) {
    notFound();
  }

  return (
    <section id="project" className="container mx-auto px-4 py-12">
      <h1 className="title font-medium text-2xl tracking-tighter mb-4">
        {project.title}
      </h1>
      <p className="text-muted-foreground">
        {project.description}
      </p>
      {/* Project detail components will be added here */}
    </section>
  );
}
