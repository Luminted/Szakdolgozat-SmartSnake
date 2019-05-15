import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import builtins from 'rollup-plugin-node-builtins';

export default {
  input: './simulate.js',
  output: {
    file: './dist/simulate.bundle.js',
    format: 'iife',
    sourcemap: 'inline',


  },
  plugins: [
    commonjs(),
    resolve(),
    builtins(),
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