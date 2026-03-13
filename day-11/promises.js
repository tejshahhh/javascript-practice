// function savetoDb(data, success, failure) {
//     let internet = Math.floor(Math.random() * 10) + 1;
//     if (internet > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb("Tej Shah",
//     () => {
//         console.log("success : your data1 was saved");
//         savetoDb("Hello World",
//             () => {
//                 console.log("success2 data2 saved")
//                 savetoDb("Hiii",
//                     () => {
//                         console.log("success3 : data3 saved")
//                     },
//                     () => {
//                         console.log("failure3 : weak connection");
//                     }
//                 )
//             },
//             () => {
//                 console.log("failure2 : weak connection")
//             }
//         )
//     },
//     () => {
//         console.log("failure : weak connection. data was not saved");
//     }
// );

function savetoDb(data) {    
    return new Promise((resolve,reject) =>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("Success : data was saved");
        } else {
            reject("Failure : weak connection");
        }
    });
}
