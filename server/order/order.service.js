const { serviceRegistry } = require('../_core')

const getOrders = function () {
    return new Promise(resolve => {
        resolve('from get order')
    })
}

module.exports = serviceRegistry.register('orderService', {
    getOrders: getOrders
})
