import "./styles.css";

// Use the following when using umd file as script tag in html
// const { CA } = window.arcana.ca
import { CA } from "@arcana/ca-sdk";

let ca: CA | null = null;

let provider;
//Assumption: window.ethereum has MetaMask wallet enabled in the browser
ca = new CA(window.ethereum, {
    network: "testnet",
});

async function initCA() {
  console.log("Initializing CA SDK");
  try {
    await ca.init();
    console.log(CA SDK initialized!));
  } catch (e) {
      console.log({ e });
  }
}

document.querySelector("#Btn-InitCA").addEventListener("click", initCA);
