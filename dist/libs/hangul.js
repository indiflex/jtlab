"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEndJaum = isEndJaum;
const ㄱ = 'ㄱ'.charCodeAt(0);
const ㅎ = 'ㅎ'.charCodeAt(0);
const 가 = '가'.charCodeAt(0);
const 힣 = '힣'.charCodeAt(0);
const 자음알파벳숫자 = [...'LMNRlmnr136780'].map(a => a.charCodeAt(0));
function isEndJaum(str) {
    const s = str.charCodeAt(str.length - 1);
    return ((s >= ㄱ && s <= ㅎ) ||
        자음알파벳숫자.includes(s) ||
        (s >= 가 && s <= 힣 && (s - 가) % 28 !== 0));
}
// const josa = (str, ja_mo) => {
//   const [ja, mo] = ja_mo.split('/');
//   return isEndJaum(str) ? ja : mo;
// };
// const iga = str => josa(str, '이/가');
// const eunun = str => josa(str, '은/는');
// const eulul = str => josa(str, '을/를');
// const eyuya = str => josa(str, '이어야/여야');
// const rang = str => josa(str, '이랑/랑');
// export { iga, josa, eunun, eulul, eyuya, rang };
