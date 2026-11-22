import { notFound } from "next/navigation";

// Unknown paths inside a locale → localized app/[locale]/not-found.tsx
export default function CatchAllPage() {
  notFound();
}
