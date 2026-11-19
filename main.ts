// gta6-meme-x-01 entry: hand the X post's address to the grader.
//
// The post itself is the entry — the house reads it from X (its first
// picture, then its text) and an AI judge compares it against the other
// memes. All this program has to do is carry POST.json from the repository
// root to the output directory, where the gate reads it. Nothing the program
// writes about the post is judged.
//
// Runs under Node 22 with the standard library only, no network, no clock,
// no files outside the repository. It takes its directories from the
// environment the grader sets (MAKEFUN_BOT_DIR for the repository,
// MAKEFUN_OUTPUT_DIR for /output), falling back to the grader's own paths
// (/bot and /output) when they are not set, so the same file works both in
// the grading sandbox and on a developer's machine:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// On success it prints nothing and exits 0. If POST.json cannot be read or
// copied, it says why on stderr and exits 1.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

// Read POST.json first so a malformed file fails loudly here instead of
// silently copying garbage to the output directory. A valid file is an
// object with a "url" string naming the X post; the copied bytes are
// unchanged, so the two grading runs still write the same output.
const postPath = join(botDir, "POST.json");
let post: unknown;
try {
  post = JSON.parse(readFileSync(postPath, "utf8")) as unknown;
} catch (err) {
  console.error(`POST.json could not be read from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post !== "object" || post === null || typeof (post as { url?: unknown }).url !== "string") {
  console.error(`POST.json in ${botDir} is not an object with a "url" string`);
  process.exit(1);
}

try {
  copyFileSync(postPath, join(outputDir, "POST.json"));
} catch (err) {
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
