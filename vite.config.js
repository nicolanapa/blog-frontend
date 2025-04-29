import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        allowedHosts: [import.meta.env.VITE_HOSTNAME],
        port: import.meta.env.VITE_PORT,
    },
});
