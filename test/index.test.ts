import { describe, expect, test } from 'vitest'
import { createGenerator, presetUno } from 'unocss'
import { presetPatch } from '../src'

describe('presetPatch test', () => {
  const code = '<div class="bg-red bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIwAAAABJRU5ErkJggg==)]"></div>'
  test('extract normal string', async () => {
    const uno = createGenerator({
      presets: [
        presetUno(),
      ],
    })
    const { matched } = await uno.generate(code, { preflights: false })

    expect(Array.from(matched)).toEqual(['bg-red'])
  })

  test('extract base64 string', async () => {
    const uno = createGenerator({
      presets: [
        presetUno(),
        presetPatch(),
      ],
    })
    const { matched } = await uno.generate(code, { preflights: false })

    expect(Array.from(matched).sort()).toEqual(
      [
        'bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIwAAAABJRU5ErkJggg==)]',
        'bg-red',
      ],
    )
  })
})
