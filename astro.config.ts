import sitemap from '@astrojs/sitemap'
import { ValidateEnv } from '@julr/vite-plugin-validate-env'
import { isTrueLike } from '@kdt310722/utils/common'
import meta from 'astro-meta-tags'
import { defineConfig } from 'astro/config'
import uno from 'unocss/astro'
import Icons from 'unplugin-icons/vite'
import { loadEnv } from 'vite'

const env = loadEnv(process.env.NODE_ENV!, process.cwd(), '') as ImportMetaEnv

export default defineConfig({
    site: env.APP_URL,
    integrations: [
        meta(),
        sitemap(),
        uno({ injectReset: 'src/styles/reset.css' }),
    ],
    vite: {
        plugins: [
            Icons({ compiler: 'astro' }),
            ValidateEnv(),
        ],
        css: {
            devSourcemap: true,
        },
        esbuild: {
            legalComments: 'none',
        },
        envPrefix: 'APP_',
        build: {
            sourcemap: isTrueLike(process.env.VITE_SOURCEMAP),
            cssMinify: 'lightningcss',
        },
    },
    build: {
        assets: 'assets',
    },
})
