/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import validate from './validate';

test.each([
  ['valid', '4276864025488162', true],
  ['valid', '6011000990139424', true],
  ['invalid', '223134345', false],
  ['invalid', '456', false],
  ['invalid', '21345272725679854', false],
  ['invalid', '0000000000000000', false],

])(('it should be %s'), (_, value, expected) => {
  expect(validate(value)).toBe(expected);
});
