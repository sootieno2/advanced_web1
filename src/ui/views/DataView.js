// src/ui/views/DataView.js
import { fetchTours } from "../../modules/tours/TourService.js";
import { store } from "../../store/index.js";

export default function DataView(root) {
  root.innerHTML = `
    <h1>Destinations</h1>
    <div id="state-msg"></div>
    <ul id="tour-list"></ul>
  `;

  const msg = root.querySelector("#state-msg");
  const list = root.querySelector("#tour-list");

  // Request start
  store.dispatch({ type: "TOURS_REQUEST" });

  // Fetch API data
  fetchTours().then(result => {
    if (result.status === "success") {
      store.dispatch({ type: "TOURS_SUCCESS", payload: result.data });
    } else {
      store.dispatch({ type: "TOURS_FAILURE", error: result.message });
    }
  });

  // State listener
  store.subscribe(() => {
    const state = store.getState().tours;

    // Loading state
    if (state.loading) {
      msg.textContent = "Loading tours…";
      msg.className = "loading";
      return;
    }

    // Error state
    if (state.error) {
      msg.textContent = "Failed to load tours: " + state.error;
      msg.className = "error";
      list.innerHTML = "";
      return;
    }

    // Success state
    msg.textContent = "";
    msg.className = "";
    list.innerHTML = state.tours
      .map(t => `<li><strong>${t.title}</strong><br>${t.description}</li>`)
      .join("");
  });
}
