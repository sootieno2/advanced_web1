 // src/modules/tours/TourService.js
import Tour from './Tourmodel.js';

const MOCK = [
  { id: '1', title: 'Safari Sunrise', description: 'See wildlife at dawn...', image: '/img/flamingos.png' },
  { id: '2', title: 'Coastal Trails', description: 'Walk serene beaches...', image: '/img/nyali.png' },
  { id: '3', title: 'Cultural Nights', description: 'Taste local cuisine...', image: '/img/site1.png' }
];

export async function fetchTours() {
  return new Promise(resolve => {
    setTimeout(() => resolve(MOCK.map(m => new Tour(m))), 150);
  });
}
