// src/modules/tours/TourModel.js
export default class Tour {
  constructor({ id, title, description, image }) {
    this.id = String(id);
    this.title = title || '';
    this.description = description || '';
    this.image = image || '/img/placeholder.jpg';
  }

  shortTitle(max = 30) {
    return (this.title.length > max) ? this.title.slice(0, max - 1) + '…' : this.title;
  }

  toCardData() {
    return { id: this.id, title: this.shortTitle(), description: this.description, image: this.image };
  }
}
 