export default function parseText(text: string) {
  if (!text.includes(":")) return false;

  return {
    title: text.match(/^[^:]+/)?.[0] || "",
    description: text.replace(/^[^:]+:\s*/, ""),
  };
}
