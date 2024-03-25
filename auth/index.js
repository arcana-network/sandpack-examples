import "./styles.css"

// Use the following when using umd file as script tag in html
const { AuthProvider } = window.arcana.auth

let provider;
let from = ""; // get from eth_accounts call
let userPK; // public key corresponding to the email ID, verifier

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

const auth = new AuthProvider(ENV_ARCANA_CLIENTID, {
  network: ENV_ARCANA_NETWORK,
  position: 'left',
  theme: 'light', //defaults to dark
  alwaysVisible: ENV_ARCANA_WALLET_VISIBLE, //defaults to true which is Full UI mode
  //appMode: "1",
  connectOptions: {
    compact: false, 
  },
  chainConfig: {
    chainId: 80001
  }
});

provider = auth.provider;
document.querySelector("#event").innerHTML = "----";
setHooks();

function setHooks() {
  provider.on("connect", async (params) => {
    console.log({ type: "connect", params: params });
    document.querySelector("#event").innerHTML = "connect Event";
  });
  provider.on("accountsChanged", (params) => {
    console.log({ type: "accountsChanged", params: params });
    document.querySelector("#event").innerHTML = "accountsChanged Event";
  });
  provider.on("chainChanged", async (params) => {
    console.log({ type: "chainChanged", params: params });
    document.querySelector("#event").innerHTML = "chainChanged Event";
  });
  provider.on("disconnect", async (params) => {
    console.log({ type: "disconnect", params: params });
    document.querySelector("#event").innerHTML = "disconnect Event";
  });
  provider.on("message", async (params) => {
    console.log({ type: "message", params: params });
    document.querySelector("#event").innerHTML = "message Event";
  });
}

async function initAuth() {
  try {
    console.log("Intantiating Auth... ");
    document.querySelector("#result").innerHTML =
      "Initializing Auth. Please wait...";
    console.time("auth_init");
    await auth.init();
    console.timeEnd("auth_init");
    console.log("Init auth complete!");
    document.querySelector("#result").innerHTML =
      "Auth initialized. Now you can continue.";
    console.log({ provider });
  } catch (e) {
    console.log({ e });
  }
}

async function getLogins() {
  let authOptions = "";
  try {
    console.log("Get logins");
    const logins = await auth.getLogins();
    for (var i = 0; i < logins.length; i++) {
      authOptions = authOptions + logins[i].toString() + ", ";
    }
    authOptions = authOptions.slice(0, -1);
    document.querySelector("#result").innerHTML =
      "Available Auth Options: \n" + authOptions;
    console.log({ logins });
  } catch (e) {
    console.log(e);
  }
}

async function connect() {
  try {
    await auth.connect();
    document.querySelector("#result").innerHTML =
      "Connect: User logged in successfully!";
  } catch (e) {
    console.log(e);
  }
}

async function isLoggedIn() {
  try {
    let ans = await auth.isLoggedIn();
    if (true == ans)
      document.querySelector("#result").innerHTML =
        "Yes, User: " +
        ENV_USER_LOGIN_EMAIL +
        "is logged in aready!";
    else
      document.querySelector("#result").innerHTML =
        "No, user is not yet logged in!";
  } catch (e) {
    console.log(e);
  }
}

async function emailCallback() {
  console.log("Received emailsent callback");
  document.querySelector("#result").innerHTML =
    "Login With Link: Link Emailed!";
}

async function loginWithOTP() {
  try {
    console.log("Login OTP will be sent to:", ENV_USER_LOGIN_EMAIL);

    const login = await auth.loginWithOTPStart(ENV_USER_LOGIN_EMAIL)
    await login.begin()

    if(login.isCompleteRequired) {
      console.log("isCompleteRequired is True");
      await loginWithOTPComplete(ENV_USER_LOGIN_EMAIL, emailCallback)
    }
    document.querySelector("#result").innerHTML =
      "Login With Link: Link Emailed to emailID=", ENV_USER_LOGIN_EMAIL;
  } catch (e) {
    console.log(e);
  }
}

async function loginWithLink() {
  try {
    console.log("Login email link will be sent to:", ENV_USER_LOGIN_EMAIL);
    await auth.loginWithLink(ENV_USER_LOGIN_EMAIL, emailCallback());
    document.querySelector("#result").innerHTML =
      "Login With Link: Link Emailed to emailID=", ENV_USER_LOGIN_EMAIL;
  } catch (e) {
    console.log(e);
  }
}

async function loginWithSocial() {
  try {
    await auth.loginWithSocial(ENV_USER_LOGIN_VERIFIER);
    document.querySelector("#result").innerHTML =
      "Login With Social Provider: " +
      ENV_USER_LOGIN_VERIFIER +
      " Logged in!";
  } catch (e) {
    console.log(e);
  }
}

async function requestAccounts() {
  console.log("Requesting accounts");
  try {
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    console.log({ accounts });
    document.querySelector("#result").innerHTML =
      "RequestAccounts: " + JSON.stringify(accounts);
    console.log({ e });
  } catch (e) {
    console.log({ e });
  }
}

async function logout() {
  console.log("Requesting logout");
  try {
    await auth.logout();
    document.querySelector("#result").innerHTML =
      "Logout: You are now logged out!";
  } catch (e) {
    console.log({ e });
  }
}

async function getAccounts() {
  console.log("Requesting accounts");
  try {
    const accounts = await auth.provider.request({ method: "eth_accounts" });
    console.log({ accounts });
    from = accounts[0];
    document.querySelector("#result").innerHTML = accounts[0];
  } catch (e) {
    console.log(e);
  }
}

async function getUser() {
  console.log("Get User Information...");
  try {
    const userInfo = await auth.getUser();
    console.log({ userInfo });
    document.querySelector("#result").innerHTML =
      "Email: " +
      userInfo.email.toString() +
      "," +
      "Name: " +
      userInfo.name.toString() +
      "," +
      "Login Type: " +
      userInfo.loginType.toString() +
      "," +
      "Public Key: " +
      userInfo.publicKey.toString() +
      "," +
      "Arcana JWT Token: " +
      userInfo.loginToken.toString();
  } catch (e) {
    console.log(e);
  }
}

async function getPublicKey() {
  console.log("Get User's Public Key...");
  try {
    const pKey = await auth.getPublicKey(
      ENV_USER_LOGIN_EMAIL,
      ENV_USER_LOGIN_VERIFIER
    );
    console.log(pKey.toString());
    document.querySelector("#result").innerHTML = pKey.toString();
  } catch (e) {
    console.log(e);
  }
}

let contractAddress;

// Get Public Key
// associated with the current account
// and  used for encryption

async function getEncryptPK() {
  console.log("Requesting logged in user's public key");
  try {
    const pk = await auth.provider.request({
      method: "eth_getEncryptionPublicKey",
      params: [from]
    });
    console.log({ pk });
    document.querySelector("#result").innerHTML =
      "Logged in User's Public Key =" + pk;
  } catch (e) {
    console.log({ e });
    document.querySelector("#result").innerHTML =
      "eth_getEncryptionPublicKey failed!!! error = " + e;
  }
}

async function getUserPK() {
  console.log(
    "Requesting public for user with email id:",
    ENV_QUERY_PUBLIC_KEY_FOR_ID
  );
  try {
    userPK = await auth.provider.getPublicKey(
      ENV_QUERY_PUBLIC_KEY_FOR_ID,
      ENV_QUERY_PUBLIC_KEY_FOR_ID_VERIFIER
    );
    console.log({ userPK });
    document.querySelector("#result").innerHTML =
      "Public key for input email ID = " +
     ENV_QUERY_PUBLIC_KEY_FOR_ID +
      " is" +
      userPK;
  } catch (e) {
    console.log({ e });
    document.querySelector("#result").innerHTML =
      "Public key for input email ID failed with error =  " + e;
  }
}

async function showWallet() {
  console.log("Display wallet...");
  try {
    await auth.showWallet();
    document.querySelector("#result").innerHTML =
      "Wallet displayed on the " +
      ENV_ARCANA_WALLET_UI_POSITION +
      " side of the screen.";
  } catch (e) {
    console.log({ e });
  }
}

document.querySelector("#Btn-InitAuth").addEventListener("click", initAuth);
document.querySelector("#Btn-GetLogins").addEventListener("click", getLogins);
document
document.querySelector("#Btn-Connect").addEventListener("click", connect);
document
  .querySelector("#Btn-GetAccounts")
  .addEventListener("click", getAccounts);
document.querySelector("#Btn-GetUser").addEventListener("click", getUser);
document.querySelector("#Btn-ShowWallet").addEventListener("click", showWallet);
document.querySelector("#Btn-Logout").addEventListener("click", logout);
