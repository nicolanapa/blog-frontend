import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        allowedHosts: [process.env.VITE_HOSTNAME],
        port: process.env.VITE_PORT,
    },
});
