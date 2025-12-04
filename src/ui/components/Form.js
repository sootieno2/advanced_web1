// Simple debounce utility (delays validation firing)
function debounce(fn, delay = 350) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Create booking form with live UX validation
export function createBookingForm(store) {
  const form = document.createElement('form');
  form.className = 'booking-form';
  form.innerHTML = `
    <div class="form-group">
      <label for="name">Full name</label>
      <input id="name" name="name" type="text" required>
    </div>

    <div class="form-group">
      <label for="email">Email address</label>
      <input id="email" name="email" type="email" required>
      <small id="email-help" class="helper"></small>
    </div>

    <div class="form-actions">
      <button type="submit" class="btn primary">Send request</button>
      <button type="reset" class="btn">Reset</button>
    </div>
  `;

  const emailInput = form.querySelector('#email');
  const emailHelp  = form.querySelector('#email-help');

  // Debounced validation handler
  const validateEmail = debounce(() => {
    const value = emailInput.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!value) {
      emailHelp.textContent = '';
      emailInput.classList.remove('error');
      return;
    }

    if (!valid) {
      emailHelp.textContent = 'Invalid email address';
      emailInput.classList.add('error');
    } else {
      emailHelp.textContent = '';
      emailInput.classList.remove('error');
    }
  }, 350);

  // Fire debounced validation on user input
  emailInput.addEventListener('input', validateEmail);

  // Dispatch booking info on submit
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
      name: form.name.value,
      email: form.email.value
    };
    store.dispatch({ type: 'BOOKING_UPDATE', payload: data });
    alert('Booking dispatched (demo)');
  });

  return form;
}
