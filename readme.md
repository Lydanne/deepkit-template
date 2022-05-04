# Deepkit Template

a deepkit quick start template, help you quickly build a development environment.

## Feature

- [x] Automatic identification environment.(local,dev,prod,...)
- [x] Support npm and pnpm.
- [x] Minimize permissions for integrating user and role (RBAC).
- [x] Neat directory structure.
- [x] Automatic reload.
- [x] Jest unit test integration.
- [ ] E2E auto test.
- [ ] Git commit verify.
- [ ] Client apisdk generation.
- [ ] Integrating eslint and prettier(Look forward to using Rome instead).
- [ ] Automatic version change and generate changelog.

## Bootstrap

### start

```bash
git clone https://github.com/WumaCoder/deepkit-template.git
pnpm i # or npm i
pnpm dev # npm run dev
```

### build

```base
pnpm build
```

visit `http://localhost:3000`.

## Environment

We can access it automatically through `e(key, defaultValue)` method `.env `or `.env.dev` or `.env.local` or `.env.prod` file.

Order:

```
       .env.dev
.env < .env.local
       .env.prod
```

Environment switching:

```
1.`.env` file
NODE_ENV = prod # dev or local

2.system env
export NODE_ENV = prod
```

.env > system env

## About

WumaCoder
