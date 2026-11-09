import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/offer";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/intensive", "/about", "/events"].map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
  }));
}
