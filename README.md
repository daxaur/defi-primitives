# defi primitives

lightweight utils for defi development. no framework dependencies.

**status:** research phase. coming soon.

---

## idea

```typescript
import { approveToken, getPrice, estimateGas } from 'defi-primitives'

// check price
const ethPrice = await getPrice('ETH', 'USDC')

// approve token
await approveToken(usdcAddress, spenderAddress, amount)

// estimate gas
const estimate = await estimateGas(tx)
```

---

## why?

lots of defi projects rewrite the same utils. token approvals, gas estimation, price feeds, balance checks.

make a tiny library that just works. no bloat.

---

## when?

after ctrl launches. extract common patterns from ctrl codebase.

---

building in public: [@daxaur](https://x.com/daxaur)
