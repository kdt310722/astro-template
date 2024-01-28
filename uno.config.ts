import { presetForms } from '@julr/unocss-preset-forms'
import { theme } from '@unocss/preset-wind'
import { defineConfig, presetIcons, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetExtra } from 'unocss-preset-extra'
import transformerAlias from 'unocss-transformer-alias'

export default defineConfig({
    shortcuts: [
        // Flex layout, e.g. `ifcc` -> `inline-flex justify-center items-center`
        [
            /^(i?f)([a-ces])([ces])$/,
            ([, f, j, i]) => {
                const specifiers = { a: 'around', b: 'between', c: 'center', e: 'end', s: 'start' }
                const flex = f === 'if' ? 'inline-flex' : 'flex'

                return [flex, `justify-${specifiers[j]}`, `items-${specifiers[i]}`].join(' ')
            },
        ],
    ],
    theme: {
        fontFamily: {
            sans: `Inter, ${theme.fontFamily?.sans ?? 'sans-serif'}`,
        },
    },
    presets: [presetUno(), presetIcons(), presetTypography(), presetForms(), presetExtra()],
    transformers: [transformerVariantGroup(), transformerDirectives(), transformerAlias()],
    content: {
        pipeline: {
            include: ['./**/*.{jsx,tsx,html,astro}', './src/components/**/*.{js,ts}'],
        },
    },
})
