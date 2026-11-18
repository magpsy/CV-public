export async function currentCV(date = new Date()) {
  const base = new URL(".", import.meta.url);
  const response = await fetch(new URL("editions.json", base), { cache: "no-cache" });
  if (!response.ok) throw new Error("CV editions unavailable");
  const { first, last } = await response.json();
  const current = Number(new Intl.DateTimeFormat("en", {
    year: "numeric", timeZone: "Asia/Taipei"
  }).format(date));
  const year = Math.min(Math.max(current, first), last);
  const folder = year === first ? base : new URL("editions/" + year + "/", base);
  return {
    pdf: new URL("CV-OnePage.pdf", folder).href,
    image: new URL("CV-OnePage-page-1.png", folder).href
  };
}
