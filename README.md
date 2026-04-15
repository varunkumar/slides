# slides.varunkumar.dev

A static site hosting presentation slides and talks by [Varunkumar Nagarajan](https://varunkumar.dev), served at [slides.varunkumar.dev](https://slides.varunkumar.dev).

## Talks

| Date        | Title                                                                                                                    | Type   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ | ------ |
| 09 Apr 2026 | [The Hacking Habits](https://slides.varunkumar.dev/hacking-habits)                                                       | Slides |
| 22 Apr 2025 | [Bringing Apache Iceberg and DuckDB Together for a Smarter Data Management](https://www.youtube.com/watch?v=TEGF62q2c1M) | Video  |
| 25 Apr 2024 | [Mastering RocksDB for High Speed Data Processing](https://www.youtube.com/watch?v=7C3it10L-Jg)                          | Video  |
| 06 Mar 2013 | [OpenStack: The Cloud Operating System](https://slides.varunkumar.dev/openstack)                                         | Slides |
| 22 Feb 2013 | [Web Components and the Future of Web Development](https://slides.varunkumar.dev/webcomponents)                          | Slides |
| 07 Dec 2012 | [Do More with JavaScript Tools](https://slides.varunkumar.dev/js-tools/do-more.html)                                     | Slides |
| 20 Oct 2012 | [Tools for Debugging JavaScript](https://slides.varunkumar.dev/js-tools)                                                 | Slides |
| 18 Jul 2012 | [Node.js and Friends](https://slides.varunkumar.dev/node-friends)                                                        | Slides |

## Structure

```
public/
├── index.html          # Landing page (list / tile / timeline views)
├── hacking-habits/     # The Hacking Habits (Apr 2026)
├── openstack/          # OpenStack: The Cloud OS (Mar 2013)
├── webcomponents/      # Web Components (Feb 2013)
├── js-tools/           # JavaScript Tools (Oct & Dec 2012)
├── node-friends/       # Node.js and Friends (Jul 2012)
├── web-training/       # Web Training
└── webintro/           # Web Intro
```

Each local slide deck is built on the [Google I/O HTML5 slide template](https://code.google.com/archive/p/io-2012-slides/).

## Local Development

Serve any presentation with Python's built-in HTTP server:

```bash
cd public
python3 -m http.server 8000
# open http://localhost:8000
```

Or run from the repo root to serve all talks at once.

## Authoring Slides

Slides for older decks are authored in Markdown and compiled to HTML:

```bash
cd public/<presentation>/scripts/md
python render.py   # generates ../../index.html
```

> **Note:** `render.py` targets Python 2. On modern systems you may need to port it or use a compatibility shim.

## Analytics

Google Analytics 4 (`G-R3E62HPYLZ`) is active on all pages under this domain.

## Deployment

Hosted on [Cloudflare Pages](https://pages.cloudflare.com), auto-deployed on push to `main`.
