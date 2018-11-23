
const fs = require('fs')
const path = require('path')
const child_proccess = require('child_process')

const packagesRoot = path.join(process.cwd(), 'packages', 'node_modules', '@org');


const orgPackages = fs.readdirSync(packagesRoot)

orgPackages.forEach((orgPackage) => {

  child_proccess.exec(`npm run build --prefix ${path.join(packagesRoot, orgPackage)}`, (err, out) => {

    if (err) {
      throw err
    }

    console.log(out)
  })
})
