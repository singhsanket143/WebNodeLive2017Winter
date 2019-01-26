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
        }, 3000);
    })
}
// Concurrent
// helloSayer(3, 'Sanket')
//     .then(helloSayer(2, 'Sarthak'))
//     .then(helloSayer(5, 'Prateek'));

// Sequenctial
helloSayer(3, 'Sanket')
    .then(() => helloSayer(2, 'Sarthak'))
    .then(() => helloSayer(5, 'Prateek'));