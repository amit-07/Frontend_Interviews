const promises = [p1, p2, p3, p4, p5, p6, p7];

const promiseAllPolyfill = (promiseArray) => {
    const outputs = [];
    const settledPromisesCounter = 0;

    return new Promise(function (resolve, reject) {
        promiseArray.forEach((promise, i) => {
          promise
            .then((data) => {
              outputs[i] = data;
              settledPromisesCounter++;
              if (settledPromisesCounter === promiseArray.length) {
                resolve(outputs);
              }
            })
            .catch(reject);
        });
        
    });
    
}