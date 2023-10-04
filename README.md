# Troublefree v3 TypeScript API Client

[![Build Status](https://github.com/AhsanFazal/Troublefree-v3/actions/workflows/build.yml/badge.svg)](https://github.com/AhsanFazal/Troublefree-v3/actions)
[![NPM Version](https://img.shields.io/npm/v/troublefree-v3.svg)](https://www.npmjs.com/package/troublefree-v3)
[![NPM Downloads](https://img.shields.io/npm/dm/troublefree-v3.svg)](https://www.npmjs.com/package/troublefree-v3)

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
  username: "[USERNAME]",   // Troublefree username
  password: "[PASSWORD]",   // Troublefree password
  company: "[COMPANY]",     // Troublefree company (administration name)
})
```
