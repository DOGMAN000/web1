import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'your-repository-name' with the actual name of your GitHub repository.
// For example, if your repository is named 'my-awesome-app', it would be '/my-awesome-app/'.
const GITHUB_REPO_NAME = 'your-repository-name'; // <--- CHANGE THIS LINE!

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/web1/`, 
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});