// Create the promise
const promise = fetch('https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg');

// Supply a function that logs successful requests
promise.then( function onSuccess(response) {
    console.log(`HTTP status: ${response.status}`);
});

// Supply a function that logs errors
promise.catch( function onError(error) {
    console.error(`Error: ${error}`);
});

// Supply a function that runs either way
promise.finally( function onFinally() {
    console.log('All done');
});
//==========2==============
fetch('https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg')
    .then(response => {
        console.log(`HTTP status: ${response.status}`);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    })
    .finally(() => {
        console.log('All done');
    });
