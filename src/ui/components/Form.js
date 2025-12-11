 import { sanitize } from "../../utils/sanitize.js";

export function createBookingForm(store) {
  const form = document.createElement("form");

  form.innerHTML = `
    <label>Name</label>
    <input id="name" required>

    <label>Email</label>
    <input id="email" type="email" required>

    <button type="submit">Send</button>
  `;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = sanitize(form.name.value);
    const email = sanitize(form.email.value);

    if (!email.includes("@")) {
      alert("Invalid email.");
      return;
    }

    store.dispatch({
      type: "BOOKING_UPDATE",
      payload: { name, email }
    });
  });

  return form;
}
