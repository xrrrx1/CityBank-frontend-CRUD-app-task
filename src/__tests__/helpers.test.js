/* global test expect */

import { getNewUserId } from '../helpers';

test('adds 1 + id(2) to equal number 3', () => {
  expect(getNewUserId(2)).toBe(3);
});
