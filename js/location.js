const lat = document.querySelector('input#latVal').val;
const lon = document.querySelector('input#lonVal').val;
const form = document.querySelector('form');

form.addEventListener('submit', loadData);