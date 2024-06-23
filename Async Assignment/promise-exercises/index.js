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
// 1)Create a normal JavaScript function that returns a promise. The promise should be resolved with an object inside it. Then, use the .then method to access and display the object. (NOTE: Promise should be resolved after 4 seconds)
let fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let personData = {
                id: 1,
                name: "Tayyaba",
                field: "Software Engineering"
            };
            resolve(personData);
        }, 4000);
    });
};
fetchData()
    .then((res) => {
    console.log("Promise resolved with data:", res);
})
    .catch((error) => {
    console.log("Promise rejected with error:", error);
});
//                             XXXXXXXXXXXXXXXXXXXX   
// 2)Repeat the same program but modify the program so that inside the first .then method, you access any value of the object and return it. Chain another .then method to receive and display the returned value.
let fetchDataWithValue = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let personData = {
                id: 1,
                name: "Tayyaba",
                field: "Software Engineering"
            };
            resolve(personData);
        }, 4000);
    });
};
fetchDataWithValue()
    .then((res) => {
    console.log("Promise resolved with data:", res);
    return res.name;
})
    .then((name) => {
    console.log("The name value is ", name);
})
    .catch((error) => {
    console.log("Promise rejected with error:", error);
});
//                             XXXXXXXXXXXXXXXXXXXX   
// 3) Write a simple promise that rejects. Inside the rejected promise, pass a message "ERROR SOMETHING WENT WRONG". Create an async function that uses await to handle the promise. As the promise is settled, return the value from the async function. Use .catch with the caller of the async function to handle the rejection and capture the returned value. 
let rejectedPromise = () => {
    return new Promise((reject) => {
        setTimeout(() => {
            reject("ERROR SOMETHING WENT WRONG");
        }, 1000);
    });
};
let handleRejectionPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield rejectedPromise();
        return result;
    }
    catch (error) {
        return error;
    }
});
handleRejectionPromise()
    .then((res) => {
    console.log("Async function returned:", res);
})
    .catch((error) => {
    console.log("Caught an error:", error);
});
//                             XXXXXXXXXXXXXXXXXXXX   
