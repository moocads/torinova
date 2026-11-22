import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";
import { GA_PLACEHOLDER_ID, siteConfig } from "@/lib/site-config";

// GA4 (Standard §11). Set NEXT_PUBLIC_GA_MEASUREMENT_ID in Vercel; never hardcode the real ID.
export function GoogleAnalytics() {
  const gaId = siteConfig.gaMeasurementId;
  if (!gaId || gaId === GA_PLACEHOLDER_ID) return null;
  return <NextGoogleAnalytics gaId={gaId} />;
}
