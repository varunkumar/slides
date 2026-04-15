# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static site hosting presentation slides by Varunkumar Nagarajan, served at `{slides}.varunkumar.me`. The root `public/index.html` is the landing page with a timeline listing all talks. Each talk lives in its own subdirectory under `public/`.

## Presentations

Each presentation follows the same structure built on the Google I/O HTML5 slide template:

- `index.html` / `template.html` — the slide deck (generated or hand-authored)
- `slide_config.js` — talk metadata (title, presenter, hashtags)
- `serve.sh` — local dev server script
- `app.yaml` — Google App Engine deployment config
- `scripts/md/slides.md` — Markdown source for the slides
- `scripts/md/render.py` — Python 2 script that compiles `slides.md` → `index.html`

Current talks:
- `public/node-friends/` — Node.js and friends (Jul 2012)
- `public/js-tools/` — JavaScript debugging tools (Oct/Dec 2012)
- `public/webcomponents/` — Web Components (Feb 2013)
- `public/openstack/` — OpenStack (Mar 2013)
- `public/web-training/` — Web training
- `public/webintro/` — Web intro

## Local Development

Start a local HTTP server for any presentation:

```bash
cd public/<presentation-name>
./serve.sh            # defaults to port 8000
./serve.sh 3000       # custom port
```

This opens `template.html` in the browser and starts `python -m SimpleHTTPServer`.

**Note:** `serve.sh` uses Python 2's `SimpleHTTPServer`. On modern systems use `python3 -m http.server` instead.

## Authoring Slides in Markdown

From within a presentation's `scripts/md/` directory:

```bash
cd public/<presentation-name>/scripts/md
python render.py
```

This converts `slides.md` → `../../index.html` using Jinja2 and the Python `markdown` library (Python 2).

**Slide format:** Slides are separated by `\n---\n`. Each slide can have optional `key: value` metadata at the top (e.g. `build_lists: true` to animate list items).

## Adding a New Talk to the Index

Update `public/index.html`:
1. Add a `<li>` entry in the `<ul>` list with the date and link.
2. Add a corresponding event to the `events` array in the Chronoline timeline JavaScript at the bottom.
