/* eslint-env node */
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('node:fs')
const path = require('node:path')
const ts = require('typescript')

const projectRoot = path.resolve(__dirname, '..')
const previousTsLoader = require.extensions['.ts']

require.extensions['.ts'] = (loadedModule, filename) => {
  const relativePath = path.relative(projectRoot, filename)
  const isTargetModule = relativePath === 'middleware.ts' || relativePath.startsWith(`lib${path.sep}`)
  if (!isTargetModule) {
    if (previousTsLoader) return previousTsLoader(loadedModule, filename)
    throw new Error(`No TypeScript loader is configured for ${relativePath}`)
  }

  const source = fs.readFileSync(filename, 'utf8')
  const output = ts.transpileModule(source, {
    fileName: filename,
    compilerOptions: {
      esModuleInterop: true,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText
  loadedModule._compile(output, filename)
}
