import "./styles.css";

// Use the following when using umd file as script tag in html
const { CA } = window.arcana.ca
//import { CA } from "@arcana/ca-sdk";

let provider;
let from = ""; // get from eth_accounts call

const defaultEnvVariables = {
  ENV_ARCANA_CLIENTID: 'xar_live_d7c88d9b033d100e4200d21a5c4897b896e60063',
  ENV_ARCANA_NETWORK: 'mainnet',
  ENV_ARCANA_WALLET_VISIBLE: true,
  ENV_USER_LOGIN_EMAIL: 'shaloo@newfang.io',
  ENV_USER_LOGIN_VERIFIER: 'google',
  ENV_QUERY_PUBLIC_KEY_FOR_ID: 'makyl@newfang.io',
  ENV_QUERY_PUBLIC_KEY_FOR_ID_VERIFIER: 'google'
};

// Destructure environment variables with defaults
let {
  ENV_ARCANA_CLIENTID,
  ENV_ARCANA_NETWORK,
  ENV_ARCANA_WALLET_VISIBLE,
  ENV_USER_LOGIN_EMAIL,
  ENV_USER_LOGIN_VERIFIER,
  ENV_QUERY_PUBLIC_KEY_FOR_ID ,
  ENV_QUERY_PUBLIC_KEY_FOR_ID_VERIFIER 
} = defaultEnvVariables;

console.log (" ENV_ARCANA_CLIENTID ", ENV_ARCANA_CLIENTID);
if (process.env.NODE_ENV === 'development') {
  console.log('Happy developing!');
} else {
  console.log('Happy production!');
}

const ca = new CA(window.ethereum);

async function initCA() {
  console.log("Initializing CA SDK");
  try {
    await ca.init();
    console.log(JSON.stringify(await ca.getUnifiedBalance()));
    document.querySelector("#result").innerHTML = "UnifiedBalance: \n";
  } catch (e) {
      console.log({ e });
  }
}

document.querySelector("#Btn-InitCA").addEventListener("click", initCA);
