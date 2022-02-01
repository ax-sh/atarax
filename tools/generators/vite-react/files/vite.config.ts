import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import VitePluginHtmlEnv from 'vite-plugin-html-env';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [WindiCSS(), VitePluginHtmlEnv()],
	// plugins: [react(), WindiCSS()],
	server: { host: true },
});
