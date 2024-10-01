import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

import node from '@astrojs/node'
import { loadEnv } from 'vite'

const { NODE_TLS_REJECT_UNAUTHORIZED } = loadEnv(
    process.env.NODE_ENV,
    process.cwd(),
    ''
)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = NODE_TLS_REJECT_UNAUTHORIZED

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react()],
    output: 'server',
    adapter: node({
        mode: 'standalone',
        ssl: {
            enabled: true,
        },
    }),
})
