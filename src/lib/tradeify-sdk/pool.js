import {
    ObjectId,
    Provider,
    SignableTransaction,
    SuiObject,
    SuiTransactionResponse,
  } from '@mysten/sui.js'
import { mint_test_token_eth } from './core/run/sdk'
import { WalletAdapter } from '@mysten/wallet-adapter-base'
import { Type } from './core/type'
import { CoinMetadataLoader } from './core/run/MetaDataLoader';
import { Pool as PoolObj } from './core/run/pool';
import { getOrCreateCoinOfLargeEnoughBalance } from '../../control/main';
import { maybeSplitThenDeposit, maybeSplitThenWithdraw, newSwap } from './core/run/sdk';
import { ceilDiv } from './core/math';
import { CONFIG } from '../config';
const BPS_IN_100_PCT = BigInt(100 * 100)





// Sell tlp function
export const sellTLPSdk = async (provider, wallet, args) => {
  console.log(args.amount);
  const [inputTLP] = await Promise.all([
    await getOrCreateCoinOfLargeEnoughBalance(
      provider,
      wallet,
      CONFIG.tlp,
      args.amount
    )])
  
  let tx = maybeSplitThenWithdraw({first: args.pool.data.typeArgs[0]}, {
    pool: args.pool.id,
    lpIn: inputTLP.id,
    price: Number(args.price).toFixed(0),
    amount: args.amount,
  })
  console.log(tx);
  return await wallet.signAndExecuteTransaction(tx)
}