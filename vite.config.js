import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@app': '/src/app',
			'@layouts': '/src/components/layouts',
			'@modules': '/src/components/modules',
			'@segments': '/src/components/segments',
			'@widgets': '/src/components/widgets',
			'@screens': '/src/screens',
			'@shared': '/src/shared',
		},
	},
})
