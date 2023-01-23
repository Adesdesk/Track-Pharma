import '@/styles/globals.css'
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { polygon, polygonMumbai, hardhat } from "wagmi/chains";
import Nav from '../components/Nav'
import ContextWrapper from '../context/ContextWrapper';
import styles from '@/styles/Home.module.css'

// const alchemyId = process.env.ALCHEMY_ID;
const alchemyId = 'SFH9QsvWk9aagTGGHdHjmsmzAiCWy0m1';

// Choose which chains you'd like to show
const chains = [polygon, polygonMumbai, hardhat];

const client = createClient(
  getDefaultClient({
    appName: "Track Pharma",
    alchemyId,
    chains,
  }),
);

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <ContextWrapper>
          <div className={styles.landingpage}>
            <div className='h-full w-full bg-gray-100'>
              <Nav />
              <div className=''>
                  <Component {...pageProps} />
              </div>
            </div>
          </div>
        </ContextWrapper>
      </ConnectKitProvider>
    </WagmiConfig>
  );
};
