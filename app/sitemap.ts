import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/products/em200", "/partnership", "/faq"];

  return routes.map((route, index) => ({
      url: `${siteConfig.url}${route}`,
      changeFrequency: "monthly",
      priority: index === 0 ? 1 : route === "/products/em200" ? 0.9 : 0.7,
    }));
}
