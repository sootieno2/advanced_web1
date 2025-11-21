 // src/ui/views/FormView.js
import { createBookingForm } from '../components/Form.js';

export default {
  render(container = document.body, { store } = {}) {
    container.innerHTML = '<div class="container" id="form-root"><h1>Contact & Booking</h1></div>';
    const root = container.querySelector('#form-root');
    root.appendChild(createBookingForm(store));
  }
};
