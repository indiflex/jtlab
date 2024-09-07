import assert from 'assert';
import { iga, eunun, eulul, eyuya } from '../src/libs/hangul';

function testing() {
  assert.strictEqual(`고성군${iga('고성군')}`, '고성군이');
  assert.strictEqual(`고성군${eunun('고성군')}`, '고성군은');
  assert.strictEqual(`고성군${eulul('고성군')}`, '고성군을');
  assert.strictEqual(`성동구${iga('성동구')}`, '성동구가');
  assert.strictEqual(`성동구${eunun('성동구')}`, '성동구는');
  assert.strictEqual(`성동구${eulul('성동구')}`, '성동구를');

  assert.strictEqual(`고성군${eyuya('고성군')}`, '고성군이어야');
  assert.strictEqual(`성동구${eyuya('성동구')}`, '성동구여야');
}
testing();
