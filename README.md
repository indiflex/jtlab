# jtlab

JS/TS Laboratory

## JTLab ?

- JS와 TS를 연구하는 개발자들의 모임
- 연구 결과를 많은 개발자에게 공유하고 사용하게 하는데 목적이 있음

## setup

1. typescript & prettier & eslint

```
$> pnpm i -D typescript eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

$> pnpm info "eslint-config-airbnb-base@latest" peerDependencies

$> pnpm i -D eslint-config-airbnb-base eslint-plugin-import

$> pnpm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

2. esbuild

3. Jest test framework

```
$> pnpm i -D jest @types/jest ts-jest
$> pnpm create jest@latest    # node
$> pnpm add --save-dev @babel/preset-typescript
$> pnpm add --save-dev @jest/globals
```

``` babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
```

``` jest.config.ts 
transform: {
    // '^.+\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
```