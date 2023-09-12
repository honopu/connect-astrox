import type { Principal } from "@dfinity/principal";
import type { ActorMethod } from "@dfinity/agent";

export interface AccountBalance {
  balance0: bigint;
  balance1: bigint;
}
export interface ClaimArgs {
  operator: Principal;
  positionId: bigint;
}
export interface CycleInfo {
  balance: bigint;
  available: bigint;
}
export interface DecreaseLiquidityArgs {
  operator: Principal;
  liquidity: string;
  amount0Min: string;
  amount1Min: string;
  positionId: bigint;
}
export interface DepositArgs {
  token: string;
  amount: bigint;
}
export type Error =
  | { CommonError: null }
  | { InternalError: string }
  | { UnsupportedToken: string }
  | { InsufficientFunds: null };
export interface GetPositionArgs {
  tickUpper: bigint;
  tickLower: bigint;
}
export interface IncreaseLiquidityArgs {
  operator: Principal;
  amount0Min: string;
  amount1Min: string;
  positionId: bigint;
  amount0Desired: string;
  amount1Desired: string;
}
export interface MintArgs {
  fee: bigint;
  tickUpper: bigint;
  operator: Principal;
  amount0Min: string;
  amount1Min: string;
  token0: string;
  token1: string;
  amount0Desired: string;
  amount1Desired: string;
  tickLower: bigint;
}
export interface Page {
  content: Array<UserPositionInfoWithId>;
  offset: bigint;
  limit: bigint;
  totalElements: bigint;
}
export interface Page_1 {
  content: Array<UserPositionInfoWithTokenAmount>;
  offset: bigint;
  limit: bigint;
  totalElements: bigint;
}
export interface Page_2 {
  content: Array<TickInfoWithId>;
  offset: bigint;
  limit: bigint;
  totalElements: bigint;
}
export interface Page_3 {
  content: Array<TickLiquidityInfo>;
  offset: bigint;
  limit: bigint;
  totalElements: bigint;
}
export interface Page_4 {
  content: Array<PositionInfoWithId>;
  offset: bigint;
  limit: bigint;
  totalElements: bigint;
}
export interface Page_5 {
  content: Array<[Principal, AccountBalance]>;
  offset: bigint;
  limit: bigint;
  totalElements: bigint;
}
export interface PoolMetadata {
  fee: bigint;
  key: string;
  sqrtPriceX96: bigint;
  tick: bigint;
  liquidity: bigint;
  token0: Token;
  token1: Token;
  maxLiquidityPerTick: bigint;
}
export interface PositionInfo {
  tokensOwed0: bigint;
  tokensOwed1: bigint;
  feeGrowthInside1LastX128: bigint;
  liquidity: bigint;
  feeGrowthInside0LastX128: bigint;
}
export interface PositionInfoWithId {
  id: string;
  tokensOwed0: bigint;
  tokensOwed1: bigint;
  feeGrowthInside1LastX128: bigint;
  liquidity: bigint;
  feeGrowthInside0LastX128: bigint;
}
export interface PushError {
  time: bigint;
  message: string;
}
export type Result = { ok: bigint } | { err: Error };
export type Result_1 = { ok: bigint } | { err: Error };
export type Result_10 = { ok: Page_2 } | { err: Error };
export type Result_11 = { ok: Page_3 } | { err: Error };
export type Result_12 = { ok: State } | { err: Error };
export type Result_13 = { ok: Principal } | { err: Error };
export type Result_14 = { ok: Page_4 } | { err: Error };
export type Result_15 = { ok: PositionInfo } | { err: Error };
export type Result_16 = { ok: CycleInfo } | { err: Error };
export type Result_17 =
  | {
      ok: {
        nftCid: string;
        infoCid: string;
        ticketCid: string;
        scheduleCid: string;
      };
    }
  | { err: Error };
export type Result_18 = { ok: Array<[string, Principal]> } | { err: Error };
export type Result_19 =
  | { ok: { amount0: bigint; amount1: bigint } }
  | { err: Error };
export type Result_2 = { ok: SnapshotCumulativesInsideResult } | { err: Error };
export type Result_20 =
  | {
      ok: {
        tokenIncome: Array<
          [bigint, { tokensOwed0: bigint; tokensOwed1: bigint }]
        >;
        totalTokensOwed0: bigint;
        totalTokensOwed1: bigint;
      };
    }
  | { err: Error };
export type Result_21 = { ok: Page_5 } | { err: Error };
export type Result_3 =
  | {
      ok: { tokensOwed0: bigint; tokensOwed1: bigint };
    }
  | { err: Error };
export type Result_4 = { ok: PoolMetadata } | { err: Error };
export type Result_5 =
  | { ok: { balance0: bigint; balance1: bigint } }
  | { err: Error };
export type Result_6 = { ok: Page } | { err: Error };
export type Result_7 = { ok: Page_1 } | { err: Error };
export type Result_8 = { ok: UserPositionInfo } | { err: Error };
export type Result_9 =
  | {
      ok: {
        swapFee0Repurchase: bigint;
        token0Amount: bigint;
        token1Amount: bigint;
        swapFee1Repurchase: bigint;
      };
    }
  | { err: Error };
export interface SnapshotCumulativesInsideArgs {
  tickUpper: bigint;
  tickLower: bigint;
}
export interface SnapshotCumulativesInsideResult {
  tickCumulativeInside: bigint;
  secondsPerLiquidityInsideX128: bigint;
  secondsInside: bigint;
}
export interface State {
  infoCid: string;
  records: Array<SwapRecordInfo>;
  errors: Array<PushError>;
  retryCount: bigint;
  infoCanisterAvailable: boolean;
}
export interface SwapArgs {
  operator: Principal;
  amountIn: string;
  zeroForOne: boolean;
  amountOutMinimum: string;
}
export interface SwapRecordInfo {
  to: string;
  feeAmount: bigint;
  action: TransactionType;
  feeAmountTotal: bigint;
  token0Id: string;
  token1Id: string;
  token0AmountTotal: bigint;
  liquidityTotal: bigint;
  from: string;
  tick: bigint;
  feeTire: bigint;
  recipient: string;
  token0ChangeAmount: bigint;
  token1AmountTotal: bigint;
  liquidityChange: bigint;
  token1Standard: string;
  TVLToken0: bigint;
  TVLToken1: bigint;
  token0Fee: bigint;
  token1Fee: bigint;
  timestamp: bigint;
  token1ChangeAmount: bigint;
  token0Standard: string;
  price: bigint;
  poolId: string;
}
export interface TickInfoWithId {
  id: string;
  initialized: boolean;
  feeGrowthOutside1X128: bigint;
  secondsPerLiquidityOutsideX128: bigint;
  liquidityNet: bigint;
  secondsOutside: bigint;
  liquidityGross: bigint;
  feeGrowthOutside0X128: bigint;
  tickCumulativeOutside: bigint;
}
export interface TickLiquidityInfo {
  tickIndex: bigint;
  price0Decimal: bigint;
  liquidityNet: bigint;
  price0: bigint;
  price1: bigint;
  liquidityGross: bigint;
  price1Decimal: bigint;
}
export interface Token {
  address: string;
  standard: string;
}
export type TransactionType =
  | { decreaseLiquidity: null }
  | { claim: null }
  | { swap: null }
  | { addLiquidity: null }
  | { increaseLiquidity: null };
export interface UserPositionInfo {
  tickUpper: bigint;
  tokensOwed0: bigint;
  tokensOwed1: bigint;
  feeGrowthInside1LastX128: bigint;
  liquidity: bigint;
  feeGrowthInside0LastX128: bigint;
  tickLower: bigint;
}
export interface UserPositionInfoWithId {
  id: bigint;
  tickUpper: bigint;
  tokensOwed0: bigint;
  tokensOwed1: bigint;
  feeGrowthInside1LastX128: bigint;
  liquidity: bigint;
  feeGrowthInside0LastX128: bigint;
  tickLower: bigint;
}
export interface UserPositionInfoWithTokenAmount {
  id: bigint;
  tickUpper: bigint;
  tokensOwed0: bigint;
  tokensOwed1: bigint;
  feeGrowthInside1LastX128: bigint;
  liquidity: bigint;
  feeGrowthInside0LastX128: bigint;
  token0Amount: bigint;
  token1Amount: bigint;
  tickLower: bigint;
}
export type Value =
  | { Int: bigint }
  | { Nat: bigint }
  | { Blob: Uint8Array | number[] }
  | { Text: string };
export interface WithdrawArgs {
  token: string;
  amount: bigint;
}
export interface _SERVICE {
  allTokenBalance: ActorMethod<[bigint, bigint], Result_21>;
  batchRefreshIncome: ActorMethod<[Array<bigint>], Result_20>;
  claim: ActorMethod<[ClaimArgs], Result_19>;
  claimSwapFeeRepurchase: ActorMethod<[bigint, Principal], Result>;
  decreaseLiquidity: ActorMethod<[DecreaseLiquidityArgs], Result_19>;
  deposit: ActorMethod<[DepositArgs], Result>;
  depositFrom: ActorMethod<[DepositArgs], Result>;
  getAccessControlState: ActorMethod<
    [],
    {
      owners: Array<Principal>;
      admins: Array<Principal>;
      clients: Array<Principal>;
    }
  >;
  getAddressPrincipals: ActorMethod<[], Result_18>;
  getAvailabilityState: ActorMethod<
    [],
    { whiteList: Array<Principal>; available: boolean }
  >;
  getConfigCids: ActorMethod<[], Result_17>;
  getCycleInfo: ActorMethod<[], Result_16>;
  getPosition: ActorMethod<[GetPositionArgs], Result_15>;
  getPositions: ActorMethod<[bigint, bigint], Result_14>;
  getPrincipal: ActorMethod<[string], Result_13>;
  getSwapRecordState: ActorMethod<[], Result_12>;
  getTickInfos: ActorMethod<[bigint, bigint], Result_11>;
  getTicks: ActorMethod<[bigint, bigint], Result_10>;
  getTokenAmountState: ActorMethod<[], Result_9>;
  getTokenBalance: ActorMethod<[], { token0: bigint; token1: bigint }>;
  getTokenMeta: ActorMethod<
    [],
    { token0: Array<[string, Value]>; token1: Array<[string, Value]> }
  >;
  getUserPosition: ActorMethod<[bigint], Result_8>;
  getUserPositionWithTokenAmount: ActorMethod<[bigint, bigint], Result_7>;
  getUserPositions: ActorMethod<[bigint, bigint], Result_6>;
  getUserUnusedBalance: ActorMethod<[Principal], Result_5>;
  increaseLiquidity: ActorMethod<[IncreaseLiquidityArgs], Result>;
  init: ActorMethod<[bigint, bigint, bigint], undefined>;
  metadata: ActorMethod<[], Result_4>;
  mint: ActorMethod<[MintArgs], Result>;
  quote: ActorMethod<[SwapArgs], Result>;
  refreshIncome: ActorMethod<[bigint], Result_3>;
  setAvailable: ActorMethod<[boolean], undefined>;
  setClients: ActorMethod<[Array<Principal>], undefined>;
  setOwners: ActorMethod<[Array<Principal>], undefined>;
  setSyncInfoAvailable: ActorMethod<[boolean], undefined>;
  setTokenStandard: ActorMethod<[Token], undefined>;
  setWhiteList: ActorMethod<[Array<Principal>], undefined>;
  snapshotCumulativesInside: ActorMethod<
    [SnapshotCumulativesInsideArgs],
    Result_2
  >;
  sumTick: ActorMethod<[], Result_1>;
  swap: ActorMethod<[SwapArgs], Result>;
  task: ActorMethod<[string], undefined>;
  withdraw: ActorMethod<[WithdrawArgs], Result>;
}
