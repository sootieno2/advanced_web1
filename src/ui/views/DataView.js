// src/ui/views/DataView.js
import { fetchTours } from '../../modules/tours/TourService.js';
import { createCard } from '../components/card.js';

export default {
  async render(container = document.body) {
    container.innerHTML = '<div class="container"><h1>Destinations</h1><ul class="cards" id="dest-cards"></ul></div>';
    const listEl = container.querySelector('#dest-cards');
    const tours = await fetchTours();
    tours.forEach(t => listEl.appendChild(createCard(t.toCardData ? t.toCardData() : t)));
  }
};
