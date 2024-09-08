"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var hangul_1 = require("../src/libs/hangul");
function testing() {
    assert_1.default.strictEqual("\uACE0\uC131\uAD70".concat((0, hangul_1.iga)('고성군')), '고성군이');
    assert_1.default.strictEqual("\uACE0\uC131\uAD70".concat((0, hangul_1.eunun)('고성군')), '고성군은');
    assert_1.default.strictEqual("\uACE0\uC131\uAD70".concat((0, hangul_1.eulul)('고성군')), '고성군을');
    assert_1.default.strictEqual("\uC131\uB3D9\uAD6C".concat((0, hangul_1.iga)('성동구')), '성동구가');
    assert_1.default.strictEqual("\uC131\uB3D9\uAD6C".concat((0, hangul_1.eunun)('성동구')), '성동구는');
    assert_1.default.strictEqual("\uC131\uB3D9\uAD6C".concat((0, hangul_1.eulul)('성동구')), '성동구를');
    assert_1.default.strictEqual("\uACE0\uC131\uAD70".concat((0, hangul_1.eyuya)('고성군')), '고성군이어야');
    assert_1.default.strictEqual("\uC131\uB3D9\uAD6C".concat((0, hangul_1.eyuya)('성동구')), '성동구여야');
}
testing();
