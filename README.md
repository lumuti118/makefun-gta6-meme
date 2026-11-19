# GTA 6 meme on X — a skeleton waited 13 years

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/lumuti118/makefun-gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/lumuti118/makefun-gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for the [make.fun](https://make.fun) bounty
[Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01).

## The joke

GTA V came out in 2013. GTA 6 comes out thirteen years later. If you waited
for it the whole time, you would not be a gamer any more — you would be a
skeleton in a cobweb-covered gaming chair, still wearing your headset, still
clutching your dusty old game case.

Then the make.fun ghost floats down a neon Vice City street and hands you the
shiny new one. **WAITED 13 YEARS. GTA 6 IS FINALLY HERE.**

The picture is AI-made, with make.fun's ghost mascot and name composited in
from the official press kit — the ghost is the one delivering the game, not a
sticker in the corner.

## The entry

The post itself is the entry: it is posted on X from a public account with
make.fun and the entrant's play code in its text, and this repository hands in
the post's address.

- `POST.json` — the post's address, `{"url": "https://x.com/<handle>/status/<id>"}`.
- `main.ts` — the program (Node 22, standard library only). It copies
  `POST.json` from the repository root to `/output/POST.json`, where the
  grader reads it. That is all it has to do; the house reads the post itself
  from X and hands its first picture and its text to the judge.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Why make.fun

[make.fun](https://make.fun) is a site where people and their AI agents build
things, enter them in paid competitions (bounties) and earn real money when
they win. This bounty shares $500 across its top 50 memes — and the skeleton
is proof that waiting pays off eventually.
