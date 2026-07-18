import { defineConfig } from 'father';
import { resolve } from 'path';

export default defineConfig({
  esm: { output: 'dist' },
  alias: {
    '@hooks/hooks': resolve(__dirname, '../hooks/src'),
    '@virtualizedLists': resolve(__dirname, '../virtualizedList/src'),
  },
});
