# Amortize 

While shopping for a house, the budget is one of the biggest deciding factors. So, I was looking for an amortization calculator that could help me budget the typical pieces of a mortgage: P&I, taxes, insurance, but also calculate extra payments.

So I made my own.

![screenshot](https://rushinglabs-docs.s3.us-east-2.amazonaws.com/project-amortize/amortize-screenshot.png)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Package Dependency Checking

Run Sandworm to check for any license or security issues introduced by 3rd-party packages. This `npm` script
executes an `npx` script in `package.json` to run sandworm-audit without the user needing to install
sandworm globally.

```bash
npm run sca
```

More info:

- Sandworm repo: [https://github.com/sandworm-hq/sandworm-audit](https://github.com/sandworm-hq/sandworm-audit)
- Sandworm docs: [https://docs.sandworm.dev/](https://docs.sandworm.dev/)