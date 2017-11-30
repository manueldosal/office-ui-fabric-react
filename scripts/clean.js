const rimraf = require('rimraf').sync;
const path = require('path');

[
  'lib',
  'temp',
  'dist',
  'lib-amd',
  'lib-es2015',
  'coverage'
].forEach(folder => {
  rimraf(path.resolve(process.cwd(), folder));
});