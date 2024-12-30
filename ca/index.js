import "./styles.css";

// Use the following when using umd file as script tag in html
// const { CA } = window.arcana.ca
import { CA } from "@arcana/ca-sdk";

let ca;

let provider = window.ethereum;

//Assumption: window.ethereum has MetaMask wallet enabled in the browser

if (!provider){
  console.log("Initialize MetaMask before running the playground");
  exit;
}

const initCA = () => {
    console.log("Initializing CA SDK");
    ca = new CA(window.ethereum, {
        network: "testnet",
  });
 
  if (!ca){
    console.log("Failed to create CA object!!!");
    return;
  }

  document.querySelector("#result").innerHTML =
    "CA Object created using MetaMask.";

  console.log("CA SDK init call....");
  async () => {
    try {
      await ca.init();
      console.log("CA SDK initialized!");
      document.querySelector("#result").innerHTML =
        "CA SDK Initialized for MetaMask. Add code for allowance, transfers, transactions via the SDK";
    } catch (e) {
        console.log({ e });
    }
 }
}

document.querySelector("#Btn-InitCA").addEventListener("click", initCA);
