const serviceRegistry = require('../common').serviceRegistry

const getOrders = function () {
    return new Promise(resolve => {
        resolve('from get order')
    })
}

module.exports = {
    getOrders: getOrders
}

serviceRegistry.registerService('getOrders', getOrders)
