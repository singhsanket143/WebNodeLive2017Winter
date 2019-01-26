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
    await helloSayer(2,'arnav');
    await helloSayer(3, 'prateek');
    await helloSayer(1,'garima');
    await helloSayer(4, 'anuj');
    await helloSayer(3,'sanket');
    await helloSayer(2, 'rishab');
}

call();