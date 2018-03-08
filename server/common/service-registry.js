const serviceMap = {}

let registerService = function (serviceName, service) {
    serviceMap[serviceName] = service;
}

let retrieveService = function (serviceName) {
    return serviceMap[serviceName];
}

module.exports = {
    registerService: registerService,
    retrieveService: retrieveService
}