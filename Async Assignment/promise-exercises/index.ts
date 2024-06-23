//                               Async Assignment

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

let fetchDataWithValue = (): Promise<{ id: number, name: string, field: string }> => {
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
    return new Promise<string>((reject) => {
        setTimeout(() => {
            reject("ERROR SOMETHING WENT WRONG")
        }, 1000);
    })
}
let handleRejectionPromise = async () => {
    try {
        let result = await rejectedPromise();
        return result;
    } catch (error) {
        return error as string;


    }

}
handleRejectionPromise()
    .then((res) => {
        console.log("Async function returned:", res);
    })
    .catch((error) => {
        console.log("Caught an error:", error);
    })

//                             XXXXXXXXXXXXXXXXXXXX   