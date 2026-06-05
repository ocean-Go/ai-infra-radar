# Watchlist Index

**Last updated:** 2026-06-05

## Active Tickers

| Ticker | Position | Cost | Spot | Unrealized | Status | NCP Tier | File |
|---|---|---|---|---|---|---|---|
| IREN | 2.51 sh | ~$50 | $61.94 | +23.58% | PILOT (hold) | Tier-1 (NVIDIA 5GW) | [IREN.md](./IREN.md) |
| CRWV | 0 sh | — | (track) | — | WATCH (staged build) | Tier-1 (NVIDIA 5GW, demand-side anchor) | [CRWV.md](./CRWV.md) |

## Pending Watchlist (queue)

| Ticker | Theme | NCP Position | Status | File |
|---|---|---|---|---|
| MERLIN (MRL.MC) | Data center shell / EU landlord | Supply-side (shell twin) | Pending | `./MERLIN.md` |
| Solaria (SLR.MC) | Powered land / PPA / BESS | Supply-side (power twin) | Pending | `./Solaria.md` |
| Nebius (NBIS) | European AI Cloud / sovereign | Demand-side (EU twin) | Pending | `./Nebius.md` |

## Files

- [IREN.md](./IREN.md) — Full thesis, Macquarie model reverse-engineering, decision framework
- [IREN-checklist.md](./IREN-checklist.md) — Tier-1/2/3 monitoring signals + pre-earnings template + action map
- [CRWV.md](./CRWV.md) — Damodaran 4-layer valuation framework (revenue visibility + capital efficiency + capital structure + **Layer 4: asset securitizability**), NCP demand-side anchor thesis, staged build plan
- [CRWV-checklist.md](./CRWV-checklist.md) — Tier-1/2/3 monitoring + **alpha layer (NDA-protected)** + Q2 2026 pre-earnings template

## Conventions

- **Position tier definitions:**
  - `PILOT` — $100–$500 size, learning ticket, no daily watch
  - `CONVICTION` — sized to portfolio target (3–5%), tracked weekly
  - `CORE` — >5%, tracked in every heartbeat
  - `WATCH` — no position, staged build pending trigger
- **Status flow:** WATCH → PILOT (via Stage 1 trigger) → CONVICTION (via Stage 2 trigger) → TRIM (via Trim trigger) → EXIT (via Exit trigger)
- **Review cadence:** pre-earnings + on-news for active tickers; quarterly for dormant; trigger-based for WATCH

## Next Review

- **CRWV (WATCH):** Q2 2026 earnings ~Aug 2026 (Stage 1 entry window)
- **IREN (PILOT):** Sweetwater anchor tenant PR, or Q1 FY27 earnings ~Nov 2026
- **MERLIN (queue):** corporate action window 30-60 days
- **Solaria (queue):** CNMV powered land portfolio monetization filing
- **Nebius (queue):** Q2 2026 earnings + EU sovereign customer updates

## NCP Framework Cross-Reference

This watchlist tracks the **demand-side / supply-side** loop of the European AI Factory thesis:

```
DEMAND SIDE: CRWV (US bellwether) | IREN (power-to-AI) | NBIS (EU sovereign)
        ↕ 5GW partnership / 5-year take-or-pay / customer concentration
SUPPLY SIDE: MERLIN (shell) | Solaria (powered land) | Goldman (capital)
```

Any thesis change in one ticker should trigger a 48h review of the cross-tickers.
