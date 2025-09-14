import { test, expect } from '@jest/globals';
import counterReducer, { increment } from '../features/counter/counterSlice';

test('should return the initial state', () => {
  expect(counterReducer(undefined, { type: 'unknown' })).toEqual({ value: 0 });
});

test('should handle increment', () => {
  expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
});
