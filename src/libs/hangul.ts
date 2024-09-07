const ㄱ = 'ㄱ'.charCodeAt(0);
const ㅎ = 'ㅎ'.charCodeAt(0);
const 가 = '가'.charCodeAt(0);
const 힣 = '힣'.charCodeAt(0);
const 자음알파벳숫자 = [...'LMNRlmnr136780'].map(a => a.charCodeAt(0));

export function isEndJaum(str: string) {
  const s = str.charCodeAt(str.length - 1);
  return (
    (s >= ㄱ && s <= ㅎ) ||
    자음알파벳숫자.includes(s) ||
    (s >= 가 && s <= 힣 && (s - 가) % 28 !== 0)
  );
}

export const josa = (str: string, ja_mo: string) => {
  const [ja, mo] = ja_mo.split('/');
  return isEndJaum(str) ? ja : mo;
};

const iga = (str: string) => josa(str, '이/가');
const eunun = (str: string) => josa(str, '은/는');
const eulul = (str: string) => josa(str, '을/를');
const eyuya = (str: string) => josa(str, '이어야/여야');
const rang = (str: string) => josa(str, '이랑/랑');

export { iga, eunun, eulul, eyuya, rang };
