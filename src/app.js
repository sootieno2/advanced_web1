// src/app.js
import store from './store/index.js';
import { registerRoute, startRouter } from './router/index.js';
import HomeView from './ui/views/HomeView.js';
import DataView from './ui/views/DataView.js';
import FormView from './ui/views/FormView.js';

const mount = document.getElementById('app') || document.body;

registerRoute('/', () => HomeView.render(mount));
registerRoute('data', () => DataView.render(mount));
registerRoute('form', () => FormView.render(mount, { store }));
registerRoute('*', () => HomeView.render(mount));

startRouter();
