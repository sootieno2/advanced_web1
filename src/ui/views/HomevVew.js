// src/ui/views/HomeView.js
export default {
  render(container = document.body) {
    container.innerHTML = `
      <div class="container">
        <h1>Welcome to Tournow</h1>
        <p class="lead">Curated tours and experiences.</p>
        <p><a class="btn primary" href="#/data">Explore Destinations</a></p>
      </div>
    `;
  }
};
