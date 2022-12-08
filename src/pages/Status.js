const Status = () => {
  return (
    <div className="z-50 md:space-y-20 max-w-2xl px-5 mx-auto space-y-14">
      <div>
        <h1 className="font-bold text-4xl">ArbiSocks Stats</h1>
        <p className="font-medium text-sm">
          The price of socks changes when $ZKSOCKS tokens are traded
        </p>
      </div>

      <div className="flex items-center max-w-[180px] sm:max-w-none mx-auto flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6">
        <div className="border-2 sm:w-auto w-full lg:w-80 md:w-52 space-x-4 cursor-pointer flex items-center border-[#28A0F0] rounded-3xl py-3 px-3">
          <img src="./assets/icons/logo.svg" alt="logo" />

          <div>
            <h1 className="text-[#28A0F0] font-bold text-2xl">5000</h1>
            <p className="font-light text-xs">Total ArbiSocks</p>
          </div>
        </div>
        <div className="border-2 sm:w-auto w-full lg:w-80 md:w-52 space-x-4 cursor-pointer flex items-center border-[#28A0F0] rounded-3xl py-3 px-3">
          <img src="./assets/icons/flame-2.svg" alt="flame-2" />

          <div>
            <h1 className="text-[#28A0F0] font-bold text-2xl">0</h1>
            <p className="font-light text-xs">Redeemed Socks</p>
          </div>
        </div>
        <div className="border-2 sm:w-auto w-full lg:w-80 md:w-52 space-x-4 cursor-pointer flex items-center border-[#28A0F0] rounded-3xl py-3 px-3">
          <img src="./assets/icons/drops.svg" alt="drops" />

          <div>
            <h1 className="text-[#28A0F0] font-bold text-2xl">0</h1>
            <p className="font-light text-xs">liquidity Pool</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
