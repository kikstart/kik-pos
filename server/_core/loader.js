const loadFiles = function () {
  const config = require('../config')
  config.modules.forEach(moduleName => {
    require(`../${moduleName}`)
  })
}

module.exports = {
  loadFiles: loadFiles
}
