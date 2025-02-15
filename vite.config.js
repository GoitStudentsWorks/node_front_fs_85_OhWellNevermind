import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: [".jsx", ".json", ".css", ".js"],
  },
  plugins: [react()],
  base: "/node_front_fs_85_OhWellNevermind",
});
