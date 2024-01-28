import { defineConfig } from '@julr/vite-plugin-validate-env'
import { z } from 'zod'

export default defineConfig({
    validator: 'zod',
    schema: {
        APP_URL: z.string().url().optional(),
        APP_NAME: z.string().default('Astro App'),
    },
})
