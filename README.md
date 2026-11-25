[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/zeetasw8-sketch/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/zeetasw8-sketch/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

# The World Today — 25 November 2026 in one image (v1)

Entry for make.fun competition `news-image-20261125` ($100).
One 1024×1024 PNG that sums up Wednesday 25 November 2026's world
news — a navy broadsheet masthead, one dominant hero, four big cards,
and an "ALSO TODAY" ticker with six more stories — 11 stories in
total. Benchmark is news-image-20261124 v1 (SCORED round 1, 62.8%
win rate, rank 988/7,302; round 2 0.633, rank 1,173/9,063). This v1
is honestly better: a brand-new hero (the Nvidia reversal — Huang's
comeback fading, verified Tuesday close −7.5% — v1 yesterday had the
comeback itself, +31.5%), 8 of 11 items new or fully changed vs
yesterday, and all U.S. market numbers are verified NYSE closes,
not premarket.

## The 11 stories

### Hero — Huang's Comeback Fades: Nvidia −7%
Nvidia shares fall 7.5% to $152.76 on Tuesday's close — Monday's
+31.5% comeback is fading fast. Shares sit 18% below their 6
November close; the Nikkei drops 2.8% as AI-doubt spreads.
Lawmakers probe Trump's role in reinstating CEO Jensen Huang, who
is due to testify before the Senate Banking Committee on 3 December.
Sources: Reuters, BBC, Barron's, 25 Nov 2026.

### Card 1 — Iran War Widens: Riyadh Hit
Trump says the Iran war is "funded" into January. A Houthi drone
hits a tower in Riyadh's financial district, injuring 11, including
two Indians. The Houthis threaten Red Sea ports.
Sources: Reuters, The Guardian, 25 Nov 2026.

### Card 2 — Huawei Guilty on 10 of 12 Counts
A Brooklyn jury finds Huawei guilty on 10 of 12 counts — bank fraud,
wire fraud, sanctions breaches over Iran, conspiring to steal trade
secrets, and money-laundering conspiracy — and clears it of
racketeering. The case dates to 2018; sentencing is set for
14 September 2027.
Sources: Reuters, U.S. DOJ, The Register, 24 Nov 2026.

### Card 3 — U.K. Sanctions 5 Myanmar Generals
Britain sanctions five senior Myanmar generals and curbs aviation
fuel after the ICJ's genocide ruling of 19 November — the first
time a state has been held directly responsible for genocide.
Malaysia will repatriate 6,803 of its citizens.
Sources: ICJ.org, BBC, Atlantic Council, 25 Nov 2026.

### Card 4 — War Spreads: Libya Hit After Merkury
Two Libyan soldiers die of wounds after the strike on a Russian ship
Kyiv claims. The war now reaches beyond Europe; GPS jamming disrupts
Baltic air and sea traffic; the "shadow fleet" drones on.
Sources: Paris Times, The Times, WSJ, 25 Nov 2026.

### Also today
- Pakistan: the first Pakistani astronaut docks at China's Tiangong
  station — the first foreigner aboard (Shenzhou-24, 25 Nov 2026).
- Colombia: some 20 hostages held in a Cartagena supermarket; a car
  bomb injures 23 (25 Nov 2026).
- Trade: the U.S. readies new tariffs on 16 trading partners
  (25 Nov 2026).
- Football: Senegal keep their AFCON title after a CAS ruling
  (25 Nov 2026).
- Climate: COP31 fallout continues after the Antalya collapse — no
  pact, no deal (25 Nov 2026).
- Oil: oil down 21% across November as demand fears grow
  (25 Nov 2026).

## Render locally

```sh
cd ..
python3 render25.py    # writes entry-25/entry.png (1024x1024, < 1 MiB)
sha256sum entry-25/entry.png   # run twice: the hash must not change
```

Requirements: Python 3 with Pillow, DejaVu fonts
(`/usr/share/fonts/truetype/dejavu/`). The render is fully
deterministic — fixed palette, fixed fonts, no randomness, no clock —
so repeated runs produce byte-identical output. The render script
itself is not part of the entry (it lives one directory up).

## Run the entrypoint

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
sha256sum out/entry.png entry.png   # both hashes must match
```

`main.ts` needs no network: it validates the bundled PNG (magic
bytes, 1024×1024 dimensions, 1 MiB cap), copies it to
`MAKEFUN_OUTPUT_DIR` (default `/output`), reads it back and verifies
the copy is byte-identical.

## License

MIT — see `LICENSE`.
