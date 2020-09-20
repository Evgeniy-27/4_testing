/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-destructuring */
// eslint-disable-next-line no-console
import accessoryCard from './cards';
import validate from './validate';

if (typeof document !== 'undefined') {
  const input = document.querySelector('input');

  input.addEventListener('input', () => {
    const type = accessoryCard(input.value);
    if (type) document.querySelector(type).style.opacity = 1;
  });

  input.parentNode.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = document.getElementById('result');
    result.textContent = '';
    validate(input.value) ? result.textContent = 'Valid' : result.textContent = 'Not valid';
  });
}
