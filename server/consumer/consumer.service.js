const { serviceRegistry } = require('../_core')

const getOrders = function () {
    serviceRegistry.get('orderService').getOrders()
        .then(message => {
            console.log(message)
        })
}

module.exports = serviceRegistry.register('consumerService', {
    getOrders: getOrders
})