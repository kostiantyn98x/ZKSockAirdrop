import Circles from "../components/Circles";

import {
  ConnectButton,
  StreamClaimableAmount,
  StreamClaimButton,
  StreamClaimingProvider,
  StreamRateByTokens,
  StreamEmissionTimeUnit,
  StreamTotalClaimed,
  SwitchChainButton,
  WalletDropdown,
  StreamClaimingStatusBar,
  IfWalletConnected,
  StreamProvider,
  IfWalletNotConnected,
} from "flair-sdk";

import { useMediaQuery } from 'react-responsive';

const STREAM_CHAIN_ID = "42161";
const STREAM_CONTRACT_ADDRESS = "0x01d356f2a9c7d72d311ccce2670c956a8af9d9b4";
const buttonClass = "btn btn-primary bg-blue2 m-auto w-50";

const Home = () => {
  
  const chainId = Number(STREAM_CHAIN_ID);    
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <div>
      <div className="w-full px-4 py-5 flex h-full items-center flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10 lg:space-x-16">
        <div className="bg-[#111111] md:max-w-xs w-full z-50  rounded-3xl px-5 pt-5 pb-6">
          <div>
            <h2 className="font-semibold text-sm sm:text-base">
              ArbiSocks ZK Edition
            </h2>
            <h1 className="text-[#817878] font-semibold text-base sm:text-lg">
              $ZKSOCKS
            </h1>
          </div>
          <div className="border-2 flex items-center justify-center border-[#28A0F0] rounded-2xl mt-4 mb-8">
            <img src="./assets/images/socks.png" alt="socks" />
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-base md:text-lg">
              5000/5000 Available{" "}
            </h4>
            <h4 className="bg-gradient-to-b from-[#FFFFFF] to-[#BCA29E] rounded-md">
              💙
            </h4>
          </div>
        </div>

        <div className="max-w-xl space-y-8 z-50 w-full">
          <h1 className="font-bold text-3xl sm:text-5xl">
            Extraordinary
            <br className="hidden lg:block" />{" "}
            <span className="text-[#28A0F0]">SOCKS</span> for{" "}
            <span className="text-[#F7BD01]">Arbinauts</span>
            👨‍🚀
          </h1>

          <p className="opacity-90 font-light text-base sm:text-lg">
            ArbiSocks utilizes the advanced Optimistic Rollup technology to
            design a unique, limited-edition tokenized socks.
          </p>
          <div>
            <a href="https://opensea.io/collection/arbitrumsocks">
              <button className="py-1.5 px-8 text-[#28A0F0] rounded-md font-semibold hover:border-[#28A0F0] duration-300 border-2 relative border-[#FDFDFD]">
                <div className="absolute py-1 top-1/2 -translate-y-1/2 -right-4 bg-[#38a0] backdrop-blur-3xl	">
                  <img src="./assets/icons/arrow.svg" alt="arrow" />
                </div>
                Get a Socks
              </button>
            </a>
          </div>
        </div>
      </div>

      <div>
        <Circles />
      </div>
    </div>
  );
};

export default Home;
