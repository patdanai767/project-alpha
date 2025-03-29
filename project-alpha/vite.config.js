import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      proxy: {
        "/api": {
          target: 'http://localhost:8080',
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace('/api', ''),
        },
      },
    },
    plugins: [react()],
  };
});
