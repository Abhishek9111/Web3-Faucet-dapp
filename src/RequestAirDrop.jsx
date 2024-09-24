import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirDrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  function requestAirDrop() {
    // alert("Ram Ram Ji");

    const publicKey = wallet.publicKey;
    const amount = document.getElementById("amount").value;
    connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginLeft: "8px" }}
    >
      <div style={{ display: "flex", marginBottom: "6px" }}>
        <input type="text" id="amount" placeholder="Amount..." />
        <button onClick={requestAirDrop}>Request airdrop</button>
      </div>

      {wallet.publicKey?.toBase58()}
    </div>
  );
}
