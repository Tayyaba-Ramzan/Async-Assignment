"use strict";
//                               Async Assignment
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Create a function getStaticData that returns a
// Promise.
// 1.
// The Promise should resolve with a static piece of data,
// such as an object or string.
// 2.
// 3. Use async and await to return the data.
let getStaticData = () => __awaiter(void 0, void 0, void 0, function* () {
    let data = {
        message: "This is Static Data."
    };
    return new Promise((resolve) => {
        resolve(data);
    });
});
getStaticData()
    .then((res) => {
    console.log(res);
});
//                             XXXXXXXXXXXXXXXXXXXX   
// Create a function delay that takes a single parameter
// ms (milliseconds).
// 1.
// The function should return a Promise that resolves
// after the specified number of milliseconds.
// 2.
// 3. Use setTimeout to implement the delay.
function delay(ms) {
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
let delayPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise resolved After 3 Seconds!");
        }, 3000);
    });
};
delayPromise()
    .then((res) => {
    console.log(res);
});
//                             XXXXXXXXXXXXXXXXXXXX  