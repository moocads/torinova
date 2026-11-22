import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { env } from "@/lib/env";
import { STRAPI_CACHE_TAG } from "@/lib/strapi";

/**
 * Strapi webhook target. In Strapi admin → Settings → Webhooks:
 *   URL:     https://<site>/api/revalidate
 *   Header:  x-revalidate-secret: <STRAPI_REVALIDATE_SECRET>
 *   Events:  entry.publish / unpublish / update / delete
 */
export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidate-secret");
  if (!env.STRAPI_REVALIDATE_SECRET || secret !== env.STRAPI_REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const payload = (await request.json().catch(() => null)) as { model?: string } | null;

  revalidateTag(STRAPI_CACHE_TAG, "max");
  if (payload?.model) revalidateTag(payload.model, "max");

  return NextResponse.json({ ok: true, revalidated: payload?.model ?? STRAPI_CACHE_TAG });
}
