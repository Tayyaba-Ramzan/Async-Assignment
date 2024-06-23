//                               Async Assignment

// Question 1:
// 1. Create three functions (asyncOperation1, asyncOperation2, asyncOperation3) that each return a Promise resolving after different delays (i.e. 1000ms, 2000ms, 1500ms respectively) with specific messages.
// 2. Define an async function (performOperations) that awaits these three functions in sequence, logging "All operations completed" or any errors.
// 3. Call performOperations() to execute the sequence.

let asyncOperation1 = async () => {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Async Operation 1 Completed!");
        }, 1000);
    })

}

let asyncOperation2 = async () => {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Async Operation 2 Completed!");
        }, 2000);
    })

}

let asyncOperation3 = () => {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Async Operation 3 Completed");
        }, 1500);
    })

}
let performAllOperation = async () => {
    try {
        let operation1 = await asyncOperation1();
        console.log(operation1);
        let operation2 = await asyncOperation2();
        console.log(operation2);
        let operation3 = await asyncOperation3();
        console.log(operation3);
        console.log("All Operations Completed!");
    } catch (error) {
        console.log("An error occured:",error);

    }

}
performAllOperation();

//                             XXXXXXXXXXXXXXXXXXXX

// Question 2:
// 1. Create a Promise: Define myPromise to generate a random number (between 0-100) and resolve if <50 or reject if >=50 after a 1000ms delay.
// 2. Define an async function: Create checkComputation, use try/await to handle myPromise, and log the result or error.
// 3. Execute the function: Call checkComputation().

let myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * 101);
        if (randomNumber > 50) {
            resolve(randomNumber);
        } else {
            reject(randomNumber);
        }
    }, 1000);
})
let checkComputation = async () => {
    try {
        let result = await myPromise;
        console.log("Promise resolved with result:", result);
    } catch (error) {
        console.error("Promise rejected with error:", error);

    }
}
checkComputation();

//                             XXXXXXXXXXXXXXXXXXXX