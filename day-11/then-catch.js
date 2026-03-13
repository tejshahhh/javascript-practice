function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success : data was saved");
        } else {
            reject("Failure : weak connection");
        }
    });
}

savetoDb("Tej Shah")
    .then((result) => {        
        console.log("data 1 saved.");
        console.log("result of promise :",result);
        return savetoDb("Hello world");
    })
    .then((result) => {        
        console.log("data 2 saved");
        console.log("result of promise :",result);
        return savetoDb("third data");
    })
    .then((result) => {        
        console.log("data 3 saved");
        console.log("result of promise :",result);
    })
    .catch((error) => {        
        console.log("some promise was rejected");
        console.log("error of promise :",error);
    });