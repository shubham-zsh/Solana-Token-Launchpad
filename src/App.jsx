import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { TokenLaunchpad } from './components/TokenLaunchpad'

import './App.css';
import '@solana/wallet-adapter-react-ui/styles.css'; // ✅ needed for wallet buttons

function App() {
  const endpoint = "https://solana-devnet.g.alchemy.com/v2/RWU7SfEV3OADb2pXtI5x0";

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <TokenLaunchpad/>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;