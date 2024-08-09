//local file in sandpack

// Use the following when using js file as script tag in html
// Following line is how auth SDK works with script in html but SCW does not
//const { SCW } = window.arcana.SCW

//Following is what works locally usually for other SDKs but not for SCW
//import { SCW } from "https://unpkg.com/@arcana/scw@0.0.43/dist/standalone.mjs";

// Following works locally but not in sandpack
/*
const { SCW } = await import(
  "https://unpkg.com/@arcana/scw@0.0.43/dist/standalone.mjs"
);
*/

async function test() {
  //Write ASYNC logic here
  console.log("test function start")

  const { SCW } = await import(
    "https://unpkg.com/@arcana/scw@0.0.43/dist/standalone.mjs"
  ); 

  //const clientId = "xar_dev_1ce3de98ebac47e4196a1380b61422dcf63a9c7b";
  const clientId = "xar_dev_1e3ee6a5cecc593d0dac2e1893dbe7534a174ac4";

  let provider;
  let addr;

  (async () => {
    try {
      provider = window.ethereum;
      addr = await provider.request({
        "method": "eth_requestAccounts",
        "params": []
      });
      console.log("MetaMask Addr:", addr[0]);

    } catch (e) {
        console.log("Exception: ",e);
    }
  })();

  console.log("Creating scw object...");

  // use scw v0.0.43
  const appSCW = new SCW();

  async function initSCW() {
    console.log("Instantiating SCW... ");
    document.querySelector("#result").innerHTML =
      "Initializing SCW. Please wait...";
    try {
      await appSCW.init(clientId, provider, undefined, 0);
      console.log("Init SCW complete!");
      document.querySelector("#result").innerHTML = "SCW initialized.";
    } catch (e) {
      console.log(e);
    }
  }

  async function getSCWAddress() {
    console.log("Get SCW Address");

    try {
      const scwAddress = await appSCW.getSCWAddress();
      document.querySelector("#result").innerHTML = "SCW address:" + scwAddress;
    } catch (e) {
      console.log(e);
    }
  }

  async function gaslessTx() {
    console.log("Initiating gasless transaction...");
    try {
      let amount = ethers.utils.parseUnits("0", 2);

      // Specify the smart contract address as configured via the dashboard
      const erc20Address = "0x06F51271DCe73e3Fb09637e77Bfb0e996DAb39cf";

      const toAddress = "0xD12E6864A0f0f3Ea886400Ae7570E4341889bDa9";
      const Erc20Interface = new ethers.utils.Interface(myerc20abi);

      // Encode an ERC-20 token transfer to recipientAddress of the specified amount

      // Note: the 'transfer' operation  of the smart contract used below
      // must be whitelisted earlier via the dashboard for gasless transaction
      const encodedData = Erc20Interface.encodeFunctionData("transfer", [
        toAddress,
        amount,
      ]);

      // You need to create transaction objects of the following interface
      const tx0 = {
        from: appSCW.getSCWAddress(),
        to: erc20Address, // destination smart contract address
        data: encodedData,
      };

      let tx = await appSCW.doTx(tx0);
      let txDetails = await tx.wait();
      console.log("txHash:(CORRECT) " + txDetails.receipt.transactionHash);
      document.querySelector("#result").innerHTML =
        "txHash:" + txDetails.receipt.transactionHash;
    } catch (e) {
      console.log(e);
    }
    console.log("Gasless transaction done!");
  }

  document.querySelector("#Btn-Init-Auth").addEventListener("click", initSCW);

  document
    .querySelector("#Btn-Get-SCW-Address")
    .addEventListener("click", getSCWAddress);

  document
    .querySelector("#Btn-Do-Gasless-Tx")
    .addEventListener("click", gaslessTx);

  console.log("test function end")
}

test().catch((err)=> {
  console.log("Test function call returns exception err: ", err)
  if(err) {
      console.error(err);
  }
});





