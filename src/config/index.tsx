
// config/index.tsx

import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// Your WalletConnect Cloud project ID
export const projectId = '80b94027f509d4a3bcc43bad682bbd94'

// Create a metadata object
const metadata = {
  name: 'cat_wins',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [sepolia] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  auth: {
    email: true, // default to true
    socials: ['google', 'apple'],
    showWallets: false, // default to true
    walletFeatures: true // default to true
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
})
