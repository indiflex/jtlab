import { describe, expect, test } from '@jest/globals';
import { iga, josa } from './hangul';

describe('josa', () => {
  test('iga - 고성군"이"', () => {
    expect(iga('고성군')).toBe('이');
    expect(iga('삼성동')).toBe(josa('삼성동', '이/가'));
  });
});
