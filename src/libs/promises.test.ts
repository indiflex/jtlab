import { promiseAll, promiseAllAsync, randTime } from './promises';

describe('promises', () => {
  test('promise-all', async () => {
    const arrAll = await promiseAll([randTime(1), randTime(2), randTime(3)]);
    const arrAsync = await promiseAllAsync([
      randTime(1),
      randTime(2),
      randTime(3),
    ]);
    console.table(arrAll);
    console.table(arrAsync);
    expect(arrAll).toStrictEqual([1, 2, 3]);
    expect(arrAsync).toStrictEqual([1, 2, 3]);
  });

  test('promise-allSettled', async () => {
    const arrOrg = await Promise.allSettled([
      randTime(1),
      randTime(2),
      randTime(3),
    ]);
    // const arrNew = await promiseAllSettled([
    //   randTime(1),
    //   randTime(2),
    //   randTime(3),
    // ]);
    // console.table(arrNew);
    console.log(JSON.stringify(arrOrg));
    // expect(arrOrg).toStrictEqual(arrNew);
  });
  test('promise-allSettled-with-rejected', async () => {
    const arrOrg = await Promise.allSettled([
      randTime(11),
      Promise.reject('RRR'),
      randTime(33),
    ]);
    // const arrNew = await promiseAllSettled([
    //   randTime(1),
    //   randTime(2),
    //   randTime(3),
    // ]);
    // console.table(arrNew);
    console.log(JSON.stringify(arrOrg));
    // expect(arrOrg).toStrictEqual(arrNew);
  });
});

// console.time('PALL');
// console.timeEnd('PALL');

// try {
//   const array = await promiseAllAsync([
//     randTime(11),
//     Promise.reject('RRR'),
//     randTime(33),
//   ]);

//   console.table(array);
//   console.log(JSON.stringify(array, null, '  '));
//   console.log('여긴 과연 호출될까?!');
// } catch (error) {
//   console.log('reject!!!!!!>>', error);
// }

// // original version
// promiseAll([randTime(1), randTime(2), randTime(3)])
//   .then((arr) => {
//     console.table(arr);
//     console.timeEnd('PALL');
//     // assert.deepStrictEqual(arr, vals);
//   })
//   .catch(console.error);

// promiseAll([randTime(11), Promise.reject('RRR'), randTime(33)])
//   .then((array) => {
//     console.table(array);
//     console.log(JSON.stringify(array, null, '  '));
//     console.log('여긴 과연 호출될까?!');
//   })
//   .catch((error) => {
//     console.log('reject!!!!!!>>', error);
//   });

// Promise.all([randTime(11), Promise.reject('RRR'), randTime(33)])
//   .then((array) => {
//     console.table(array);
//     console.log(JSON.stringify(array, null, '  '));
//     console.log('여긴 과연 호출될까?!');
//   })
//   .catch((error) => {
//     console.log('reject!!!!!!>>', error);
//   });
