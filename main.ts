// The World Today — 25 November 2026 in one image
// (make.fun news-image-20261125 entry, v1).
//
// Wednesday 25 November 2026's world news, drawn as a single
// broadsheet front page: the hero is the Nvidia reversal — Jensen
// Huang's comeback fading fast, shares down 7.5% to $152.76 on
// Tuesday's close, 18% below the 6 November close, with lawmakers
// probing Trump's role in reinstating the CEO and Huang due to
// testify before the Senate Banking Committee on 3 December (Nikkei
// -2.8% as the AI-doubt mood spread); four supporting stories (the
// Iran war widening as a Houthi drone hits a tower in Riyadh's
// financial district, 11 hurt; a Brooklyn jury finds Huawei guilty
// on 10 of 12 counts — bank fraud, sanctions breaches over Iran,
// trade-secret theft; Britain sanctions five senior Myanmar generals
// after the ICJ's genocide ruling of 19 November; the war spreading
// beyond Europe as two Libyan soldiers die of wounds after the
// strike on a Russian ship Kyiv claims), and an "ALSO TODAY" ticker
// with six more (first Pakistani astronaut docks at China's Tiangong
// station; some 20 hostages held in a Cartagena supermarket and a
// car bomb injuring 23; U.S. readies new tariffs on 16 trading
// partners; Senegal keep their AFCON title after a CAS ruling; COP31
// fallout after the Antalya collapse; oil down 21% across November).
// Sources: Reuters, BBC, Barron's, WSJ, The Guardian, DOJ.
//
// The page was rendered ahead of time with Python + Pillow (flat
// colours, simple pictograms, DejaVu type) into entry.png, which sits
// next to this file. This program has one job only: place an exact
// copy of that image at $MAKEFUN_OUTPUT_DIR/entry.png (default
// /output/entry.png) and prove the copy is intact. It needs no
// network and takes no arguments.
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

const destDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = dirname(fileURLToPath(import.meta.url));
const bundled = join(here, "entry.png");
const target = join(destDir, "entry.png");

function digest(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

// The bundled image must exist, be a genuine PNG, and fit the size
// cap — verify all three before writing anything to the output dir.
const info = statSync(bundled, { throwIfNoEntry: false });
if (info === undefined) {
  throw new Error(`bundled entry.png is missing: ${bundled}`);
}
if (info.size > MAX_BYTES) {
  throw new Error(`entry.png is ${info.size} bytes, over the 1 MiB limit`);
}
const image = readFileSync(bundled);
if (!image.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)) {
  throw new Error("entry.png does not start with the PNG magic bytes");
}
// The PNG header (IHDR) stores the pixel dimensions at fixed offsets;
// this entry must be exactly 1024x1024, so check both numbers.
const [picWidth, picHeight] = [image.readUInt32BE(16), image.readUInt32BE(20)];
if (picWidth !== 1024 || picHeight !== 1024) {
  throw new Error(`entry.png is ${picWidth}x${picHeight}, expected 1024x1024`);
}

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
