[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/zeetasw8-sketch/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/zeetasw8-sketch/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

# The World Today — 25 November 2026 in one image (v2)

Entry for make.fun competition `news-image-20261125` ($100).
One 1024×1024 PNG that sums up Wednesday 25 November 2026's world
news — a navy broadsheet masthead, 3 heroes, 10 medium cards, a UTC
timeline, a world map with 13 numbered pins, and 22 more dated briefs
— 35 stories in total, each dated and labelled OFFICIAL / CONFIRMED /
REPORTED / CLAIM, plus a DATE CHECK footer. Benchmark is the news-23
winner regian (35 dated stories + Date-Check Audit, $20). v2 replaces
v1 (11 stories): density tripled, and the Nvidia close is corrected
to the verified $149.30 (−3.91%) — the $142.90/−8.03% in v1's research
was the intraday low, not the close.

## The 35 stories

### Heroes
- **Russia: 490,334 troops dead** (Feb 2022–Sep 2026; >700,000 incl. missing) — leaked Rosstat data via BBC Russian / Mediazona. CONFIRMED, 24–25 Nov.
- **Macy's 100th Parade POSTPONED to Sat 28 Nov** — first postponement in 100 years; nor'easter gusts up to 65 mph; New Jersey emergency, 21 counties. OFFICIAL, 25 Nov.
- **Nvidia −3.9% to $149.30** (verified close; $142.90 was intraday) — Wall Street comeback; Dow +0.33%, Nasdaq −0.62%; U.S. GDP +4.3%, core PCE +3.3%. CONFIRMED / OFFICIAL, 25 Nov.

### 10 medium cards
Hormuz: 2 tankers hit by mines (IRGC claim) · Houthi hit Ras Tanura refinery (550,000 bbl/day) · Solomon Islands–Australia security pact (no foreign base) · All Cartagena hostages freed · First Pakistani in orbit (Shenzhou-24) · Bangladesh garment wage +36% (17,000 taka) · U.S. tariffs on 14 partners · Australia CPI +4.9% · Huang returns to Nvidia · Champions League Matchday 5 (Barça 4–1, Liverpool 3–0).

### 22 more dated briefs (numbered 11–32 in the image)
RSF strikes in Sudan (19 dead) · Hamas colonel killed in Gaza · Odesa strike (2 dead) · Libya vows revenge for Merkury hit · ~60 Patriot missiles delayed · N0n claims Next · Ahmadi flogged 74 lashes · Huawei guilty 10/12 · Shanghai party chief probed · Venezuela $237.5bn debt · Cessna crash (6 dead) · CIA/ODNI OSINT hacked · Microsoft "Code Red" · Ebola 11,042 cases · Senegal boat (35–39 dead) · ANC 30.76% · Uganda gold $8.9bn · DR Congo cobalt halt · Pete Edochie dies, 79 · Indian banks write off ₹1.44 lakh crore · IPL 1,220 players · Sooryavanshi 204 off 53 balls.

### DATE CHECK — excluded
Kraków shooting was 7 Nov (not 25) · Novaya Gazeta closed 9 Nov (not 25) · ICJ Myanmar ruling was 19 Nov · Microsoft outage was 12–13 Nov · Nvidia $142.90/−8% was intraday — close was $149.30/−3.9% · No Nvidia price 26 Nov — U.S. markets closed (Thanksgiving).

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
