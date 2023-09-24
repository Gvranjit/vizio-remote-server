import smartcast from "vizio-smart-cast";
import { IP } from "./constants.json";
import readline from "readline";

const tv = new smartcast(IP);

// configure cmd line input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Initiate a pairing request with a smartcast device
tv.pairing
  .initiate()
  .then((response) => {
    // prompt the user for the pin that is displayed on the smartcast device
    rl.question("Enter PIN:", (answer) => {
      // send the pin to the smartcast device to complete the pairing process
      tv.pairing.pair(answer).then((response) => {
        // log the token to be used for future, authenticated requests
        console.log(response.ITEM.AUTH_TOKEN);
      });

      rl.close();
    });
  })
  .catch((err) => console.log(err));

// tv.pairing
//   .pair("1491")
//   .then((success) => console.log(success))
//   .catch((err) => console.log(err));
