/* eslint-disable linebreak-style */
export default function accessoryCard(value) {
  if (/^4/.test(value)) {
    return '.visa';
  } if (/^5[1-5]/.test(value)) {
    return '.master';
  } if (/^3[47]/.test(value)) {
    return '.amex';
  } if (/^(?:2131|1800|35\d{3})\d{11}/.test(value)) {
    return '.jcb';
  } if (/^2||6/.test(value)) {
    return '.mir';
  } if (/^6(?:011|5)/.test(value)) {
    return '.discover';
  } if (/^3(?:0[0-5]|[68])/.test(value)) {
    return '.diners';
  }
  return null;
}
