import { jest } from '@jest/globals';
import { debounce, throttle } from './timer';
describe('timer', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');

  test('debounce', () => {
    const callback = jest.fn();

    const dfn = debounce(callback, 100);
    for (let i = 0; i < 10; i++) {
      dfn(i);
    }
    expect(callback).not.toHaveBeenCalled();

    jest.runAllTimers();
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('throttle', () => {
    const callback = jest.fn();

    const tfn = throttle(callback, 100);
    for (let i = 0; i < 10; i++) {
      tfn(i);
    }
    expect(callback).not.toHaveBeenCalled();

    jest.runAllTimers();
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
