# Troublefree v3 TypeScript API Client

Unofficial TypeScript API client for the [Troublefree Retail API](https://retail.troublefree.nl/v3/api/documentation).

## Installation


### npm

```bash
npm install troublefree-v3
```

### yarn

```bash
yarn add troublefree-v3
```

## Usage

### Creating a client

```typescript
import { Troublefree } from "troublefree-v3"

const client = new Troublefree({
  username: "[USERNAME]",
  password: "[PASSWORD]",
  company: "[COMPANY]",
})
```
