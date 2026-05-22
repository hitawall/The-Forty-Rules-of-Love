# Contributing

## Branch Naming

Use the following prefixes, followed by a short kebab-case description:

| Prefix | When to use |
|--------|-------------|
| `feat/` | New feature |
| `fix/` | Bug fix |
| `refactor/` | Code refactoring without behaviour change |
| `chore/` | Tooling, CI, deps, non-code tasks |
| `docs/` | Documentation only |
| `style/` | CSS / visual changes only |
| `test/` | Tests only |

**Example:** `feat/rule-card-grid`, `fix/modal-scroll-lock`

## Commit Messages

This project follows [Conventional Commits](https://www.conventionalcommits.org/).

```
<type>(<optional scope>): <description>

[optional body]

[optional footer]
```

**Types:** `feat`, `fix`, `refactor`, `chore`, `docs`, `style`, `test`

**Examples:**
```
feat(grid): add card hover animation
fix(modal): restore scroll position on close
chore(deps): update framer-motion to 11.x
```

Commit messages are enforced by `commitlint` via Husky — a non-conforming commit will be rejected.

## Pull Request Process

1. Create a branch from `main` using the naming convention above.
2. Link the relevant GitHub issue in your PR description (`Closes #N`).
3. Fill in the PR template (summary, screenshots, test plan).
4. CI must be green before requesting review.
5. At least one approving review from `@successfulbud` is required before merge.
6. Squash and merge is the preferred merge strategy.

## Local Setup

```bash
npm install
npm run dev        # start dev server at http://localhost:3000
npm run build      # production build
npm run typecheck  # TypeScript check
npm run lint       # ESLint
npm run format     # Prettier (write)
```
