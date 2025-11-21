// src/router/index.js
const routes = new Map();

export function registerRoute(path, handler) {
  routes.set(path, handler);
}

function getPath() {
  return location.hash.replace(/^#/, '') || '/';
}

function onChange() {
  const path = getPath();
  const handler = routes.get(path) || routes.get('*');
  if (handler) handler({ path });
}

export function startRouter() {
  window.addEventListener('hashchange', onChange);
  onChange();
}
