import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { TokenLaunchpad } from './components/TokenLaunchpad'

import './App.css';
import '@solana/wallet-adapter-react-ui/styles.css'; // ✅ needed for wallet buttons

function App() {
  const endpoint = "https://solana-devnet.g.alchemy.com/v2/RWU7SfEV3OADb2pXtI5x0";

  return (
    <div className='bg-gradient-to-tl from-gray-700 to-black h-screen'>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className='pt-20'>
              <WalletMultiButton />
              <TokenLaunchpad />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;