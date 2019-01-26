function helloSayer(times, name) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let loopId = setInterval(() => {
            count++;
            console.log("hello"+name);
            if(count === times) {
                clearInterval(loopId);
                resolve();
            }
        }, 1000);
    })
}

async function call() {
    await Promise.all([
         helloSayer(2,'arnav'),
         helloSayer(3, 'prateek'),
         helloSayer(1,'garima')
    ]);
    console.log("End of Batch 1");
    await Promise.all([
         helloSayer(4, 'anuj'),
         helloSayer(3,'sanket'),
         helloSayer(2, 'rishab')
    ]);


}

call();