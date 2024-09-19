type Settled<T> =
  | {
      status: 'fulfilled';
      value: T;
    }
  | {
      status: 'rejected';
      reason: unknown;
    };

export const randTime = <T>(val: T): Promise<T> =>
  new Promise((resolve) => {
    const rtime = Math.random() * 1000;
    console.log('start>>', val, Math.trunc(rtime));
    setTimeout(() => {
      // console.log('run>>', val);
      resolve(val);
    }, rtime);
  });

// export const promiseAllSettled = <T>(promises: Promise<Settled<T>>[]) => {
//   const results: Promise<Settled<T>>[] = [];

//   return results;
// };

export function promiseAllSettled<T>(promises: Promise<T>[]) {
  // const results: Promise<Settled<T>>[] = [];
  // return Promise.all(
  return promiseAll(
    promises.map((promise) =>
      promise
        .then((value) => ({ status: 'fulfilled', value }))
        .catch((reason) => ({ status: 'rejected', reason }))
    )
  );

  // return results;
}

export const promiseAll = <T>(promises: Promise<T>[]): Promise<T[]> =>
  new Promise((resolve, reject) => {
    if (!promises?.length) reject(new Error('Promise를 전달하세요!'));

    const results: T[] = [];
    let cntToRun = promises.length;
    for (let i = 0; i < promises.length; i += 1) {
      const promise = promises[i];
      // Promise.resolve(promise)
      (promise instanceof Promise ? promise : Promise.resolve(promise))
        .then((succ) => {
          results[i] = succ;
          // results.push(succ); // BAD
          if ((cntToRun -= 1) === 0) resolve(results);
        })
        .catch(reject);
    }
  });

export const promiseAllAsync = async <T>(promises: Promise<T>[]) => {
  const results: T[] = [];
  let idx = 0;
  for (const promise of promises) {
    promise.catch((err) => err);
    // promise.catch(err => {
    //   console.error('EEEEE>>>', err);
    // });
  }

  for (const promise of promises) {
    // results[idx++] = await promise;
    results[idx++] = await promise;
    // results[promises.indexOf(promise)] = await promise;
  }
  // for await (const promise of promises) {
  //   results[idx++] = promise;
  // }

  return results;
};
