import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default {
  input: './src/js/main.js',
  output: {
    file: './dist/main.bundle.js',
    format: 'iife',
    sourcemap: 'inline'
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({
      babelrc: false,
      presets: [
        ['env', {
          modules: false
        }]
      ],
    })
  ]
}