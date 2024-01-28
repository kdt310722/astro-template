/// <reference types="astro/client" />
/// <reference types="unplugin-icons/types/astro" />

type ImportMetaEnv = import('@julr/vite-plugin-validate-env').ImportMetaEnvAugmented<typeof import('../env').default>

interface ImportMeta {
    readonly env: ImportMetaEnv
}
