"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rang = exports.eyuya = exports.eulul = exports.eunun = exports.iga = exports.josa = void 0;
exports.isEndJaum = isEndJaum;
var ㄱ = 'ㄱ'.charCodeAt(0);
var ㅎ = 'ㅎ'.charCodeAt(0);
var 가 = '가'.charCodeAt(0);
var 힣 = '힣'.charCodeAt(0);
var 자음알파벳숫자 = __spreadArray([], 'LMNRlmnr136780', true).map(function (a) { return a.charCodeAt(0); });
function isEndJaum(str) {
    var s = str.charCodeAt(str.length - 1);
    return ((s >= ㄱ && s <= ㅎ) ||
        자음알파벳숫자.includes(s) ||
        (s >= 가 && s <= 힣 && (s - 가) % 28 !== 0));
}
var josa = function (str, ja_mo) {
    var _a = ja_mo.split('/'), ja = _a[0], mo = _a[1];
    return isEndJaum(str) ? ja : mo;
};
exports.josa = josa;
var iga = function (str) { return (0, exports.josa)(str, '이/가'); };
exports.iga = iga;
var eunun = function (str) { return (0, exports.josa)(str, '은/는'); };
exports.eunun = eunun;
var eulul = function (str) { return (0, exports.josa)(str, '을/를'); };
exports.eulul = eulul;
var eyuya = function (str) { return (0, exports.josa)(str, '이어야/여야'); };
exports.eyuya = eyuya;
var rang = function (str) { return (0, exports.josa)(str, '이랑/랑'); };
exports.rang = rang;
