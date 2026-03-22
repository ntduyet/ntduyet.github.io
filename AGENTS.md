# Agent context

## Stack

- **Framework**: Next.js (App Router), React, TypeScript (`strict`).
- **Styling**: Tailwind CSS, global styles under `app/ui/global.css`.
- **Lint / format**: ESLint (flat config, `typescript-eslint` strict + stylistic) + Prettier; `eslint-config-prettier` disables conflicting rules.
- **Tests**: Vitest, jsdom, Testing Library (`tests/**/*.test.*`).

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Serve static `./build` |
| `npm run test` | Vitest (watch) |
| `npm run coverage` | Vitest with coverage |
| `npm run lint` | ESLint |
| `npm run format` | Prettier write |

## Key directories

- `app/` — `layout.tsx`, `page.tsx`, UI in `app/ui/`, data in `app/services/` (YAML / resume loading).
- `tests/` — specs; helpers in `tests/utils/` (`makeSut`, `mockComponent`). Not linted by ESLint (see `eslint.config.mjs`).
- `scripts/` — ignored by ESLint.

Imports use `@/*` → repository root (e.g. `@/app/...`, `@/tests/...`).

## AI workflow

- Project rules live in `.cursor/rules/` (always-on + globs for `app/` and `tests/`).
- After non-trivial edits, run `npm run test` and `npm run lint`; use `npm run format` when formatting matters.
