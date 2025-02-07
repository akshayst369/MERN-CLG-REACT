var demo = new Promise((resolve,reject)=>
{
    if(true) {
        resolve("Successfull");
    }
    else {
        reject("Failed");
    }
});
demo
    .then((message)=>console.log(message))
    .catch((message)=>console.log(message));