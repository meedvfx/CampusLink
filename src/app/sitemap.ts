import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://campuslink-france.vercel.app";
  const routes = [
    "",
    "/procedures",
    "/housing",
    "/health",
    "/money",
    "/jobs",
    "/eco-impact",
    "/blood-donation",
    "/volunteering",
    "/community",
    "/resources",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
