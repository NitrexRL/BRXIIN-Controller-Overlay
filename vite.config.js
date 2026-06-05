import { defineConfig } from 'vite';

// Set the base path to the repository name for GitHub Pages deployment.
// This ensures assets resolve correctly when served from https://<user>.github.io/ps5-controller-visualizer/
export default defineConfig({
  base: base: '/BRXIIN-Controller-Overlay/'
  server: {
    host: true,
    open: true,
  },
});
