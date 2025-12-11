export function sanitize(input = "") {
  return String(input)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim();
}
