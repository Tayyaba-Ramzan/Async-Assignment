//                               Async Assignment

// Create a function getStaticData that returns a
// Promise.
// 1.
// The Promise should resolve with a static piece of data,
// such as an object or string.
// 2.
// 3. Use async and await to return the data.

let getStaticData=async():Promise<{message:string}>=>{
    let data={
        message:"This is Static Data."
    }
    return new Promise((resolve) => {
        resolve(data)
    })
}
getStaticData()
.then((res)=>{
    console.log(res);
})

//                             XXXXXXXXXXXXXXXXXXXX   


// Create a function delay that takes a single parameter
// ms (milliseconds).
// 1.
// The function should return a Promise that resolves
// after the specified number of milliseconds.
// 2.
// 3. Use setTimeout to implement the delay.

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
delay(2000).then(() => {
    console.log("Resolved after 2 seconds");
});

//                             XXXXXXXXXXXXXXXXXXXX  

// Create a function delayPromise that takes no
// parameters.
// 1.
// Inside the function, create a Promise that resolves
// after 3 seconds using setTimeout.
// 2.
// 3. Return the Promise from the function.

let delayPromise=()=>{
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Promise resolved After 3 Seconds!")
        }, 3000);
    })
}
delayPromise()
.then((res)=>{
    console.log(res);
})

//                             XXXXXXXXXXXXXXXXXXXX  