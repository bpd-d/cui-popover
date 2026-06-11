# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Type-check with tsc, then bundle with Vite
npm run preview   # Serve the production build locally
```

There is no test runner or linter configured.

## Architecture

This is a **vanilla TypeScript custom element** — no framework, no component library. The entire component lives in `src/main.ts`.

- `src/popover.ts` — defines `CuiPopover extends HTMLElement` and registers it as `<cui-popover>` via `customElements.define`.
- `index.html` — dev harness; loads `src/popover.ts` directly via Vite's native ESM transform.

The component wraps the [native HTML Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) (`popover` attribute, `showPopover()`/`hidePopover()`). Keep implementation logic inside the custom element class rather than introducing external utilities.

TypeScript is configured in bundler mode (`moduleResolution: "bundler"`, `noEmit: true`); `tsc` is type-check only — Vite/Rolldown handles the actual bundling. Strict unused-variable rules are enabled (`noUnusedLocals`, `noUnusedParameters`).
