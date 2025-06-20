document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    
    event.preventDefault();

    
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const guests = form.guests.value.trim();
    const attendance = form.attendance.value;
    const food = form.food.value;

   
    let valid = true;
    let messages = [];

   
    if (name === '') {
      valid = false;
      messages.push('Please enter your full name.');
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      valid = false;
      messages.push('Please enter a valid email address.');
    }

    
    const phoneRegex = /^[0-9]{7,}$/;
    if (!phoneRegex.test(phone)) {
      valid = false;
      messages.push('Please enter a valid phone number with at least 7 digits.');
    }

    
    if (guests === '' || isNaN(guests) || Number(guests) < 0) {
      valid = false;
      messages.push('Please enter a valid number of guests (0 or more).');
    }

   
    const attendanceOptions = form.querySelectorAll('input[name="attendance"]');
    let attendanceSelected = false;
    attendanceOptions.forEach(option => {
      if (option.checked) attendanceSelected = true;
    });
    if (!attendanceSelected) {
      valid = false;
      messages.push('Please select whether you will attend or not.');
    }

   

    if (!valid) {
      alert(messages.join('\n'));
    } else {
      
      form.submit();
    }
  });
});
