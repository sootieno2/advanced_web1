// src/ui/components/Card.js
export function createCard(tour) {
  const li = document.createElement('li');
  li.className = 'card';
  li.innerHTML = `
    <img src="${tour.image}" alt="${tour.title}">
    <div class="card-body">
      <h3>${tour.title}</h3>
      <p>${tour.description}</p>
      <a href="#/data" class="btn small">Explore</a>
    </div>
  `;
  return li;
}
