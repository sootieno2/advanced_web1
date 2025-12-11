export async function loadView(name) {
  const root = document.querySelector("#app");

  if (name === "data") {
    const module = await import("./ui/views/DataView.js");
    return module.default(root);
  }

  if (name === "home") {
    const module = await import("./ui/views/HomeView.js");
    return module.default(root);
  }
}
