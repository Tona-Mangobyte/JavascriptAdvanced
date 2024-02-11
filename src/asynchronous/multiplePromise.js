function randomWaitPromise() {
    return new Promise((resolve, reject) => {
        // Decide how long to wait
        const waitMilliseconds = Math.round(Math.random() * 10000);

        // Simulate an asynchronous task with setTimeout()
        setTimeout(() => {
            console.log(`Resolved after ${waitMilliseconds}`);

            // Return the number of seconds waited
            resolve(waitMilliseconds);
        }, waitMilliseconds);
    });
}

// Create three promises
const promise1 = randomWaitPromise();
const promise2 = randomWaitPromise();
const promise3 = randomWaitPromise();
const promises = [promise1, promise2, promise3];

// Wait for all of them, then log the result
Promise.all(promises).then(values => {
    console.log(`All done with: ${values}`);
});
