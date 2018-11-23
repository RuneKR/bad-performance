
const fs = require('fs')
const path = require('path')

const packagesRoot = path.join(process.cwd(), 'packages', 'node_modules', '@org');

const orgPackages = fs.readdirSync(packagesRoot)

orgPackages.forEach((orgPackage) => {
  fs.symlinkSync(path.join(process.cwd(), 'node_modules'), path.join(packagesRoot, orgPackage, 'node_modules'), 'junction')
})
