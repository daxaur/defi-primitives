/**
 * defi primitives - lightweight utilities for defi development
 * no dependencies on ctrl - works everywhere
 */

export { approveToken, checkAllowance } from './token'
export { estimateGas, getGasPrice } from './gas'
export { getPrice, getPriceWithFallback } from './price'
export { connectWallet, getBalance } from './wallet'

// coming soon
// export { multicall } from './multicall'
// export { permit2 } from './permit2'
// export { safeBatch } from './batch'
