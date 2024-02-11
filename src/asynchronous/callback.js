function factorializeNumber(number, successCallback, failureCallback) {
    if (number < 0) {
        failureCallback(
            new Error('Factorials are only defined for positive numbers'));
    }
    else if (number !== Math.trunc(number)) {
        failureCallback(new Error('Factorials are only defined for integers'));
    }
    else {
        setTimeout( () => {
            if (number === 0 || number === 1) {
                successCallback(1);
            }
            else {
                let result = number;
                while (number > 1) {
                    number -= 1;
                    result *= number;
                }
                successCallback(result);
            }
        }, 5000);  // This hard-coded 5-second delay simulates a long async process
    }
}

//use
function logResult(result) {
    console.log(`5! = ${result}`);
}

function logError(error) {
    console.log(`Error: ${error.message}`);
}

factorializeNumber(5, logResult, logError);

function factorializeNumberPromise(number) {
    return new Promise((resolve, reject) => {
        factorializeNumber(number,
            result => {
                resolve(result);
            },
            error => {
                reject(error);
            });
    });
}
factorializeNumberPromise(5)
    .then( result => {
        console.log(`5! = ${result}`);
    });

/*factorializeNumberPromise('Bad value')
    .then( result => {
        console.log(`6! = ${result}`);
    })
    .catch( error => {
        console.log(error);
    });*/
