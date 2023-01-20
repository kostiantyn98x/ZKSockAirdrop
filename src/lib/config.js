
export const CONFIG = {       
    rpcUrl: 'https://fullnode.devnet.vincagame.com:443/',
    suiUrl: 'https://fullnode.devnet.sui.io:443/',
    // link: 'http://localhost:3000/',
    link: 'https://tradeify.app/',

    // mint, buy/sell, swap package
    tradeifyPackageId: '0xff3db17c31ad40c43d118103a29e384fc096903d',
    poolRegistryId: '0x3a1d7de517d83cb23c8cc5db5e0e5440fbd7745c',
    TLPStorageId: '0xa3c2c8a397cbf286c2f31ee32876dc3f0b63b7ba',

    // referral package
    referralPackageId: '0xff3db17c31ad40c43d118103a29e384fc096903d',
    referRegistryId: '0x5bbc69d18ca94d47e031634be44274705fcb2a15',
    refTraderRegistryId: '0x96b21602d763a5041088f7f6a6218441c1758d37',
    referralStaus: '0xba47f3c1316f4f8564574129dd5d7d0f45ef7c4a',

    // trading package
    tradingPoolID: '0xefa3180c74b886f87b3ad7c1c801c59b7ce825cd',

    nullAddress: '0x0000000000000000000000000000000000000000',

    eth_binance_api: 'https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT',
    bnb_binance_api: 'https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT',

    // Main default setting parameter
    MainDecimal: 9,
    defaultSlippagePct: 1,
    tradingFee: 1, // this is % value
    TLPPrice: 1, // this is % value
    TRYPrice: 1,
    faucetDurationTime: 10 * 60 * 1000, // 1 hour
    timeIntervalOfPrice: 300,    
    timeIntervalOfReward: 300,    
    referCodeLength: 100000000000,
    TLPDecimal: 100000
}