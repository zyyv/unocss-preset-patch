import { definePreset } from 'unocss'

export function presetPatch() {
  return definePreset({
    name: 'unocss-preset-patch',
    extractors: [
      /**
       * This extractor is used to extract base64 strings.
       * https://github.com/unocss/unocss/pull/2485
       */
      {
        name: 'unocss-preset-useful-extractor-includes-base64',
        order: 0,
        extract({ code }) {
          return [...new Set(code.split(/[\\:]?[\s'"`{}]|;(?!base64)+/g))]
        },
      },
    ],
  })
}
