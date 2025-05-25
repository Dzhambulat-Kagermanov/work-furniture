import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'

const cherryPickedKeys = ['VITE_ADMIN_USER_NAME', 'VITE_ADMIN_USER_PASSWORD']

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')
	const processEnv = {}
	cherryPickedKeys.forEach(key => (processEnv[key] = env[key]))
	return {
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
		define: {
			'process.env': processEnv,
		},
	}
})
