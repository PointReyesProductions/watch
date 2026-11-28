// POST /api/decide  {id, decision: "greenlit"|"sentback", note}
// Michael's TV remote calls this from the Screening room. It can only move an item in
// feed.screening from "waiting" to a decision, with one of the preset notes, so the page
// never needs the feed's write token.
// IMPORTANT: STORE and KEY must match what netlify/functions/data uses to save the feed.
import { getStore } from "@netlify/blobs";
const STORE = "hq", KEY = "data";
const NOTES = ["", "Tighten it", "Wrong tone", "Go bigger", "Let’s talk"];
export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  let b; try { b = await req.json(); } catch { return new Response("Bad JSON", { status: 400 }); }
  const id = String(b.id || ""), decision = b.decision, note = String(b.note || "");
  if (!id || !["greenlit", "sentback"].includes(decision) || !NOTES.includes(note))
    return new Response("Bad request", { status: 400 });
  const store = getStore(STORE);
  const d = await store.get(KEY, { type: "json" });
  const it = (d && Array.isArray(d.screening) ? d.screening : []).find((x) => x && x.id === id);
  if (!it || it.status !== "waiting") return new Response("Not found", { status: 404 });
  it.status = decision; it.decidedAt = new Date().toISOString(); it.notes = note;
  d.generatedAt = it.decidedAt;
  await store.setJSON(KEY, d);
  return Response.json({ ok: true });
};
export const config = { path: "/api/decide" };
