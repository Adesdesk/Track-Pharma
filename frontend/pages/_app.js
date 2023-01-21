import '@/styles/globals.css'
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { polygon, polygonMumbai, hardhat } from "wagmi/chains";
import Nav from '../components/Nav'
import ContextWrapper from '../context/ContextWrapper';

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
          <div className='h-full w-full bg-gray-100'>
            <Nav />
            <div className='p-4 md:w-10/12 md:mx-auto'>
                <Component {...pageProps} />
            </div>
          </div>
        </ContextWrapper>
      </ConnectKitProvider>
    </WagmiConfig>
  );
};
