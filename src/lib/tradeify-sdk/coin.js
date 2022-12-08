import {
    ObjectId,
    Provider,
    Coin as SuiCoin,
    GetObjectDataResponse,
    JsonRpcProvider,
  } from '@mysten/sui.js'
import { Amount } from './amount'
  

export const stakeTLP = async (provider, wallet, args) => {
  const input = await getOrCreateCoinOfLargeEnoughBalance(
      provider,
      wallet,
      args.tlpType,
      args.tlpAmount
  )
  const tx = stakeTLPSdk([args.tlpType, CONFIG.try], {
      tlpObjectId: input.id,
      stakeAmount: args.tlpAmount,
      ownerAddress: localStorage.getItem('walletAddress'),
      currentTime: args.currentTimestamp,
      lockTime:args.lockTime.toString()
  })
  console.log(tx);
  return await wallet.signAndExecuteTransaction(tx)
}
export class CoinMetadata {
    typeArg
    id
    decimals
    name
    symbol
    description
    iconUrl
  
    constructor(typeArg, fields) {
      this.typeArg = typeArg
      this.id = fields.id
      this.decimals = fields.decimals
      this.name = fields.name
      this.symbol = fields.symbol
      this.description = fields.description
      this.iconUrl = fields.iconUrl
    }
  
    newAmount(value) {
      return Amount.fromInt(value, this.decimals)
    }
}