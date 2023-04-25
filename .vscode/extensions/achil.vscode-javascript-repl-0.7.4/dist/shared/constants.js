const cvVar = '_cv_stuvxyz';
const entryFile = 'stuvxyz-54321';

const TYPE_JS = 'javascript';
const TYPE_TS = 'typescript';
const TYPE_COFFEE = 'coffeescript';
const TYPE_VUE = 'vue';
const TYPE_MARKDOWN = 'markdown';

const supportedFiles = {
  [TYPE_JS]: '.js',
  [TYPE_VUE]: '.vue',
  [TYPE_TS]: '.ts',
  [TYPE_COFFEE]: '.coffee',
  javascriptreact: '.jsx',
  typescriptreact: '.tsx',
  [TYPE_MARKDOWN]: '.md'
};

module.exports = {
  extName: 'javascript-repl',
  unhandledError: '$~Repl-Unhandled-Error~$=',
  tempId: '_uid',
  cacheDir: '.cache',
  outRootDir: '.js-repl',
  tempDir: 'temp',
  guttersDir: 'images',
  logsDir: 'logs',
  tempFile: `${entryFile}-temp`,
  consoleName: cvVar,
  entryFile,
  memFile: 'entry-stuvxyz',
  cvVar,
  domPlugin: '@achil/repl-dom',
  asyncEndPlugin: '@achil/async-run-ended',
  domPluginError:
    ', JS Repl uses this plugin in order to support dom properties',
  asyncEndPluginError: ', JS Repl uses this during testing',
  supportedFiles,
  TYPE_JS,
  TYPE_TS,
  TYPE_COFFEE,
  TYPE_VUE,
  TYPE_MARKDOWN
};
