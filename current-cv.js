export async function currentCV() {
  const manifest = new URL("./current.json", import.meta.url);
  const response = await fetch(manifest, { cache: "no-store" });
  if (!response.ok) throw new Error("CV unavailable");
  const { pdf, image } = await response.json();
  return { pdf: new URL(pdf, manifest).href, image: new URL(image, manifest).href };
}
