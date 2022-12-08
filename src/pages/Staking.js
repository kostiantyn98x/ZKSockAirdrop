import Circles from "../components/Circles";

const Staking = () => {
  return (
    <div>
      <div className="z-50 max-w-lg md:w-[512px] mx-auto">
        <div className="flex w-full">
          <div className="bg-[#111111] w-full z-50 rounded-2xl p-6 sm:p-6  flex flex-col items-center justify-center space-y-4">
            <h1 className="text-5xl">🤑</h1>
            <div className="flex items-center font-medium text-lg w-full justify-between">
              <h3>Your ArbiSocks NFTs</h3>
              <h3>0</h3>
            </div>
            <div className="bg-[#28A0F0] h-px w-full"></div>
            <div className="flex items-center font-medium text-lg w-full justify-between">
              <h3>Your total Claimed</h3>
              <h3>0 ZKSOCKS</h3>
            </div>
            <div className="bg-[#28A0F0] h-px w-full"></div>
            <div className="space-y-2 w-full">
              <div className="flex items-center font-medium text-base w-full justify-between">
                <h3>Emission Rate</h3>
                <h3>0 ZKSOCKS/24 Hours</h3>
              </div>
              <div className="flex items-center font-medium text-base w-full justify-between">
                <h3>Claim Window</h3>
                <h3>Every 24 hours</h3>
              </div>
            </div>
            <div className="bg-[#28A0F0] h-px w-full"></div>
            <div className="flex items-center font-medium text-lg w-full justify-between">
              <h3>Claimable Rewards</h3>
              <h3>0 ZKSOCKS</h3>
            </div>
            <button className="bg-[#28A0F0] z-40 py-2 px-16 rounded-xl font-semibold text-xl">
              Claim
            </button>
          </div>
        </div>
      </div>
      <div className="z-40">
        <Circles />
      </div>
    </div>
  );
};

export default Staking;
