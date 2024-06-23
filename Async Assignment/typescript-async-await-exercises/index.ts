//                               Async Assignment

// Question 1: Write a TypeScript function that uses async/await to wait for 2 seconds and then returns a string "Hello World".

let sayHello = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    })
}
let hello = async () => {
    let greeting = await sayHello();
    console.log(greeting);

}
hello();

//                             XXXXXXXXXXXXXXXXXXXX

// Question 2: Create a TypeScript function that takes a callback function as an argument and uses setTimeout to call the callback after 1 second.

type CallbackFunction = () => void;
let callAfterTimeout = (callback: CallbackFunction) => {
    setTimeout(() => {
        callback();
    }, 1000);

}
let myCallback = () => {
    console.log("Callback called after 1 second.");

}
callAfterTimeout(myCallback);

//                             XXXXXXXXXXXXXXXXXXXX

// Question 3: Write a TypeScript function that returns a Promise that resolves with the value "Resolved!" after 3 seconds.

let promise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved")
        }, 3000);
    })
}
let result = promise()
    .then((res) => {
        console.log(res);
    })

//                             XXXXXXXXXXXXXXXXXXXX

// Question 4: Create a TypeScript function that uses async/await to wait for two Promises to resolve and then returns their results as an array.

let fetchResult = async () => {
    let promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Successed Data 1")
        }, 2000);
    })
    let promise2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Successed Data 2")
        }, 2000);
    })
    let output1 = await promise1;
    let output2 = await promise2;
    return [output1, output2]

}
fetchResult().then((results) => {
    console.log(results);
})

//                             XXXXXXXXXXXXXXXXXXXX

// Question 5: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then logs the result to the console.

let waitForPromise = async (promise: Promise<string>) => {
    try {
        let result = await promise;
        console.log("Promise resolved with result:", result);
    } catch (error) {
        console.error("Error occurred while waiting for the Promise:", error);
    }

}
let myPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Promise Result")
    }, 2000);
})
waitForPromise(myPromise);

//                             XXXXXXXXXXXXXXXXXXXX

// Question 6: Write a TypeScript function that uses async/await to wait for a Promise to reject and then logs the error to the console.

let waitForRejection = async (promise: Promise<string>) => {
    try {
        await promise;
        console.log("Promise did not reject.");
    } catch (error) {
        console.error("Promise rejected with error:", error);
    }

}
let myRejectedPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        reject("Promise Reject");
    }, 2000);
})
waitForRejection(myRejectedPromise)

//                             XXXXXXXXXXXXXXXXXXXX

// Question 7: Create a TypeScript function that takes a number as an argument and returns a Promise that resolves with the square of the number after a delay of 1 second.

let squareRoot = (num: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num);
        }, 1000);
    })
}
squareRoot(6)
    .then((res) => {
        console.log(res);
    })

//                             XXXXXXXXXXXXXXXXXXXX

// Question 8: Write a TypeScript function that uses async/await to wait for an array of Promises to resolve and then returns an array of their results.

let waitForAllPromises = async (promises: Promise<string>[]) => {
    try {
        let results = await Promise.all(promises);
        return results;
    } catch (error) {
        console.error("One or more promises rejected with error:", error);
        throw error;
    }
}
let promise1 = () => {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Result 1")
        }, 1000);
    })
}
let promise2 = () => {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Result 2")
        }, 2000);
    })
}
let promise3 = () => {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Result 3")
        }, 3000);
    })
}
waitForAllPromises([promise1(), promise2(), promise3()])
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    })

//                             XXXXXXXXXXXXXXXXXXXX

// Question 9: Create a TypeScript function that uses setTimeout to call a function repeatedly every 2 seconds.

let repeatedFunctionEveryTwoSecond = (callback: () => void) => {
    let callFunction = () => {
        callback()
        setTimeout(() => {
        }, 2000);
        setTimeout(() => {
            callFunction();
        }, 2000);
    }
    callFunction();

}
let myRepeatedFunction = () => {
    console.log("Function Called!");

}
repeatedFunctionEveryTwoSecond(myRepeatedFunction);

//                             XXXXXXXXXXXXXXXXXXXX

// Question 10: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then returns a new Promise that resolves with the result multiplied by 2.

let multiplicationByTwo = async (promise: Promise<number>): Promise<number> => {
    try {
        let result = await promise;
        return Promise.resolve(result * 2);
    } catch (error) {
        return Promise.reject(error);
    }
};

const myResult = new Promise<number>((resolve) => {
    setTimeout(() => {
        resolve(5);
    }, 2000);
});

multiplicationByTwo(myResult)
    .then((result) => {
        console.log("Result multiplied by 2:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

//                             XXXXXXXXXXXXXXXXXXXX    