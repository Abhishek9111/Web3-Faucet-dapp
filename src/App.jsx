import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import { RequestAirDrop } from "./RequestAirDrop";
import { ShowBalance } from "./ShowBalance";
import { SendTokens } from "./SendTokens";
import { SignMessage } from "./SignMessage";

function App() {
  return (
    <>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div
              style={{
                width: "100vw",
                display: "flex",
                height: "50vw",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex" }}>
                <WalletMultiButton />
                <RequestAirDrop />
              </div>
              <ShowBalance />
              <SendTokens />
              <SignMessage />
              {/* <WalletDisconnectButton /> */}
            </div>
            {/* Your app's components go here, nested within the context providers. */}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
