import { Link } from "react-router-dom";
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

const buttonClass = "flex w-full md:justify-center md:border-none md:w-40 items-center space-x-4 md:space-2 border-2 border-[#FFFFFF]   md:bg-[#28A0F0] rounded-md py-1 px-1 sm:px-2 text-white";
const STREAM_CHAIN_ID = "42161";
const STREAM_CONTRACT_ADDRESS = "0x01d356f2a9c7d72d311ccce2670c956a8af9d9b4";

const NavButtons = ({ setIsOpen }) => {
  const chainId = Number(STREAM_CHAIN_ID);    
  return (
    <div className="flex md:items-center md:space-y-0 space-y-6 md:flex-row flex-col md:space-x-4 lg:space-x-4">
      <Link
        onClick={() => {
          setIsOpen(false);
        }}
        to={"/status"}
        className="flex w-full md:justify-center md:border-none md:w-40 items-center space-x-4 md:space-x-2 border-2 border-[#FFFFFF]  md:bg-[#28A0F0] rounded-md py-1 px-1 sm:px-2 text-white"
      >
        {" "}
        <img src="./assets/icons/flame.svg" alt="flame" /> <span> 0</span>{" "}
        <span> Redeemed</span>
      </Link>
      <IfWalletConnected>
          <WalletDropdown />
      </IfWalletConnected>
      <IfWalletNotConnected>
        {/* <button
          onClick={() => {
            setIsOpen(false);
          }}
          className="flex w-full md:justify-center md:border-none md:w-40 items-center space-x-4 md:space-2 border-2 border-[#FFFFFF]   md:bg-[#28A0F0] rounded-md py-1 px-1 sm:px-2 text-white"
        > */}
          {" "}
          <ConnectButton
              className={buttonClass}
              label="Connect"
          >
            <img src="./assets/icons/avatar.svg" alt="avatar" />
              <SwitchChainButton
                  requiredChainId={Number(chainId)}
                  className={buttonClass}
              >
                  <StreamClaimButton className={buttonClass} />
              </SwitchChainButton>
          </ConnectButton>
        {/* </button> */}
      </IfWalletNotConnected>
      
    </div>
  );
};

export default NavButtons;
