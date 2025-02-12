import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts', // TypeScript entry point
  output: [
    {
      file: 'dist/index.js', // CommonJS format
      format: 'cjs',
    },
    {
      file: 'dist/index.mjs', // ES Module format
      format: 'esm',
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [typescript(), resolve(), commonjs()],
};
