#! /usr/local/bin/node
const {
  generateSymbolsFile
} = require('../src/')

const args = process.argv.slice(2)

const run = async () => {
  if (args.find(arg => arg === 'generate')) {
    try {
      await generateSymbolsFile()
      console.info('✓ Built ALL.json file.')
    } catch (e) {
      console.error(e)
      process.exit(1)
    }
  }

  process.exit(0)
}

run()
