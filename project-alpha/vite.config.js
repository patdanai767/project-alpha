import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      proxy: {
        "/api": {
          target: 'https://demo-backend-omsj.onrender.com',
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace('/api', ''),
        },
      },
    },
    plugins: [react()],
  };
});
