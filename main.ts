// The World Today — 25 November 2026 in one image
// (make.fun news-image-20261125 entry, v2).
//
// Wednesday 25 November 2026's world news, drawn as a single
// broadsheet front page with 35 dated stories across 9 regions:
// three heroes — leaked Rosstat data putting Russian military
// deaths at 490,334 (Feb 2022–Sep 2026, via BBC Russian /
// Mediazona); the 100th Macy's Thanksgiving Parade POSTPONED to
// Saturday 28 Nov, the first postponement in 100 years, as a
// nor'easter brings gusts up to 65 mph and New Jersey declares
// an emergency in 21 counties; Nvidia closing down 3.9% to
// $149.30 (verified close, not the $142.90 intraday low) as Wall
// Street stages a Wednesday comeback, with U.S. GDP revised to
// +4.3% — plus ten medium cards (2 tankers hit by mines in
// Hormuz, Houthi strike on the Ras Tanura refinery, Solomon
// Islands–Australia security pact, all Cartagena hostages freed,
// first Pakistani in orbit, Bangladesh garment wage +36%, U.S.
// tariffs on 14 partners, Australia CPI +4.9%, Huang returns to
// Nvidia, Champions League Matchday 5), a UTC timeline strip,
// a world map with 13 numbered pins, 22 more dated briefs, a
// DATE CHECK footer, and a HOW SURE verification legend
// (OFFICIAL / CONFIRMED / REPORTED / CLAIM).
// Sources: Reuters, BBC, Mediazona, WSJ, NY Post, NWS/NOAA,
// Xinhua, USTR, ABS/RBA, DOJ, CGTN/WHO, BEA, Finnhub, UEFA.
//
// The page was rendered ahead of time with Python + Pillow (flat
// colours, simple pictograms, DejaVu type) into entry.png, which
// sits next to this file. This program has one job only: place an
// exact copy of that image at $MAKEFUN_OUTPUT_DIR/entry.png
// (default /output/entry.png) and prove the copy is intact. It
// needs no network and takes no arguments.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//   sha256sum out/entry.png entry.png   # the two hashes must match

import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 1024 * 1024; // the rules cap the image at 1 MiB
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;
const ENTRY_FILENAME = "entry.png";

function digest(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function readBundledImage(path) {
  // The bundled image must exist, be a genuine PNG, and fit the size
  // cap — verify all three before writing anything to the output dir.
  const info = statSync(path, { throwIfNoEntry: false });
  if (info === undefined) {
    throw new Error(`bundled entry.png is missing: ${path}`);
  }
  if (info.size > MAX_BYTES) {
    throw new Error(`entry.png is ${info.size} bytes, over the 1 MiB limit`);
  }
  const bytes = readFileSync(path);
  if (!bytes.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)) {
    throw new Error("entry.png does not start with the PNG magic bytes");
  }
  // The PNG header (IHDR) stores the pixel dimensions at fixed offsets;
  // this entry must be exactly 1024x1024, so check both numbers.
  const [picWidth, picHeight] = [bytes.readUInt32BE(16), bytes.readUInt32BE(20)];
  if (picWidth !== EXPECTED_WIDTH || picHeight !== EXPECTED_HEIGHT) {
    throw new Error(
      `entry.png is ${picWidth}x${picHeight}, expected ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`,
    );
  }
  return bytes;
}

function main() {
  const destDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const here = dirname(fileURLToPath(import.meta.url));
  const bundled = join(here, ENTRY_FILENAME);
  const target = join(destDir, ENTRY_FILENAME);

  const image = readBundledImage(bundled);

  mkdirSync(destDir, { recursive: true });
  copyFileSync(bundled, target);

  // Read the copy back and compare it byte for byte: a truncated or
  // corrupted write must fail loudly instead of grading a broken image.
  const delivered = readFileSync(target);
  if (!delivered.equals(image)) {
    throw new Error("output entry.png differs from the bundled entry.png");
  }
  console.log(
    `wrote ${target} (${delivered.length} bytes, sha256=${digest(delivered)}, verified identical)`,
  );
}

main();
