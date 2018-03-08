const serviceRegistry = require('../common').serviceRegistry

const getOrders = function () {
    serviceRegistry.retrieveService('getOrders')()
        .then(message => {
            console.log(message)
        })
}

module.exports = {
    getOrders: getOrders
}