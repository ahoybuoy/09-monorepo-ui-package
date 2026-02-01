# Test Repo 09: Monorepo with UI Package

## Purpose
Tests Buoy's ability to scan and analyze monorepo structures with shared component libraries.

## What This Tests
- **Monorepo detection**: Turborepo/pnpm workspace structure
- **Cross-package token usage**: Tokens defined in `packages/ui`, consumed in `apps/*`
- **Token drift detection**: Apps have drifted from shared tokens
- **Package boundary analysis**: Understanding which components come from shared vs local

## Structure
```
09-monorepo-ui-package/
├── packages/
│   └── ui/                    # Shared component library
│       └── src/
│           ├── tokens/        # Design tokens (source of truth)
│           └── components/    # Shared components
├── apps/
│   ├── web/                   # Main Next.js application
│   │   └── src/
│   │       ├── components/    # App-specific components (with drift)
│   │       ├── pages/
│   │       └── styles/
│   └── docs/                  # Documentation site
│       └── src/
│           ├── components/    # Doc-specific components
│           └── pages/
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

## Expected Findings
1. **Token Source**: `packages/ui/src/tokens/` should be identified as token source
2. **Drift in web app**: Hardcoded values that should use tokens
3. **Drift in docs app**: Slightly different values for same tokens
4. **Inconsistent imports**: Some files import from `@repo/ui`, others use relative paths
