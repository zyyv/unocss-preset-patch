# unocss-preset-patch [![npm](https://img.shields.io/npm/v/unocss-preset-patch)](https://npmjs.com/package/unocss-preset-patch)

Collection of feature presets not integrated into UnoCSS.

## Usage
```shell
pnpm i -D unocss-preset-patch
```

```ts
// unocss.config.ts
import { defineConfig, presetUno } from 'unocss'
import { presetPatch } from 'unocss-preset-patch'

export default defineConfig({
  presets: [
    presetUno(),
    presetPatch(),
  ],
})
```

## License

[MIT](./LICENSE) License © 2023 [zyyv](https://github.com/zyyv)

