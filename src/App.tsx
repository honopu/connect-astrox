import { AstroXWebViewHandler } from "@astrox/sdk-webview";

import { idlFactory } from "./Pool.did";
import { _SERVICE } from "./Pool";

import { enumResultFormat, ResultStatus } from "./utils";

const astrox = new AstroXWebViewHandler();

function App() {
  const handleConnect = async () => {
    // @ts-ignore
    if (!window.astrox_webview) return;

    await astrox.init();

    const boolean = await astrox.connect({
      // if delegationTargets includes "3ejs3-eaaaa-aaaag-qbl2a-cai", the actor.deposit will return a InsufficientFunds message
      // if not, will throw a call error.

      delegationTargets: ["ryjl3-tyaaa-aaaaa-aaaba-cai"],
      // delegationTargets: [
      //   "ryjl3-tyaaa-aaaaa-aaaba-cai",
      //   "3ejs3-eaaaa-aaaag-qbl2a-cai",
      // ],
      host: "https://icp0.io",
      customDomain: "https://icp0.io",
    });

    // @ts-ignore
    alert(`astrox.agent.host0: ${astrox.agent?._host}`);
  };

  const handlePrincipal = async () => {
    // This principal is not same as identity's principal
    // from doc(https://astroxnetwork.github.io/sdk_docs/docs/Integrate%20with%20ME%20wallet/Transaction#windowicxaddress), i thought them could be the same
    const { principal } = astrox.address();

    alert(`astrox.address principal: ${principal} `);

    alert(
      `astrox.identity principal: ${astrox.identity.getPrincipal().toString()} `
    );
  };

  const handleDeposit = async () => {
    // if the delegationTargets is not include "3ejs3-eaaaa-aaaag-qbl2a-cai", after createActor, the host could change to 'window.location.origin'( _handleWebViewConnectResponse )
    const actor = await astrox.createActor<_SERVICE>(
      "3ejs3-eaaaa-aaaag-qbl2a-cai", // This canister is on ic
      idlFactory
    );

    // @ts-ignore
    alert(`astrox.agent.host1: ${astrox.agent?._host}`);

    // deposit 10000000 icp
    const result = enumResultFormat<bigint>(
      await actor.deposit({
        token: "ryjl3-tyaaa-aaaaa-aaaba-cai", // icp ledger
        amount: BigInt(1000000000000000),
      })
    );

    alert(result);

    if (result.status === ResultStatus.OK) {
      alert(`deposit success: ${result.data}`);
    } else {
      alert(`error: ${result.message}`);
    }
  };

  return (
    <div className="App">
      <div onClick={handleConnect}>connect</div>

      <div style={{ margin: "20px 0 0 0" }} onClick={handlePrincipal}>
        principal
      </div>

      <div style={{ margin: "20px 0 0 0" }} onClick={handleDeposit}>
        deposit
      </div>
    </div>
  );
}

export default App;
