const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulating a condition
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("There was an error.");
    }
  });
  
  // Handling the promise
  myPromise
    .then(result => {
      console.log(result); // Logs: "Operation was successful!"
    })
    .catch(error => {
      console.error(error);
    });
  