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


const Airdrop = () => {
  const chainId = Number(STREAM_CHAIN_ID);    
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  return (
    <StreamProvider
      contractAddress={STREAM_CONTRACT_ADDRESS}
      chainId={Number(chainId)}
    >
      
    <StreamClaimingProvider>
    <div>
      <div className="z-10 max-w-lg sm:w-[512px] mx-auto">
        <div className="flex w-full">
          <div className="bg-[#111111] w-full z-50 rounded-2xl p-6 sm:px-6 sm:py-10 flex flex-col items-center justify-center space-y-8">
            <h1 className="text-7xl">🪂</h1>
            <div className="flex w-full items-center sm:flex-row flex-col justify-between ">
              <div className="sm:text-left text-center">
                <h2 className="font-medium text-lg sm:text-xl">
                  Your total claimed{" "}
                </h2>
                <h4 className="font-medium text-base sm:text-lg">
                  Sum of all previous claims
                </h4>
              </div>
              <h3 className="font-medium text-lg sm:text-xl"> <StreamTotalClaimed /></h3>
            </div>
            <div className="w-full bg-[#28A0F0] h-px"></div>
            <div className="flex items-center sm:flex-row flex-col font-medium text-lg w-full justify-between">
              <h3>Claimable now for you</h3>
              <h3><StreamClaimableAmount /></h3>
            </div>
            <ConnectButton
                className={buttonClass}
                label="Connect to claim"
                disabled
            >
                <SwitchChainButton
                    requiredChainId={Number(chainId)}
                    className={buttonClass}
                >
                    <StreamClaimButton className={buttonClass} />
                </SwitchChainButton>
            </ConnectButton>
            {/* <button className="bg-[#28A0F0] z-40 py-2 px-10 sm:px-16 rounded-xl font-semibold text-xl">
              Connect to Claim
            </button> */}
          </div>
        </div>
      </div>
      <div className="z-40">
        <Circles />
      </div>
    </div>
    </StreamClaimingProvider>
    </StreamProvider>
  );
};

export default Airdrop;

{/* <div>
  <div className="w-full max-w-md sm:w-[448px] ">
    <div className="bg-[#111111] flex flex-col  items-center space-y-4 sm:space-y-8 rounded-3xl p-6 md:p-8 z-50"></div>
  </div>
  <Circles />
</div>; */}
