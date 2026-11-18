// Keep existing readers linked to the latest published selection.
export async function currentCV() {
  return {
    pdf: new URL("./CV-OnePage.pdf", import.meta.url).href,
    image: new URL("./CV-OnePage-page-1.png", import.meta.url).href
  };
}
