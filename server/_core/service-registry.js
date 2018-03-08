const serviceMap = {}

let register = function (serviceName, service) {
    serviceMap[serviceName] = service;
    return service
}

let get = function (serviceName) {
    return serviceMap[serviceName];
}

module.exports = {
    get: get,
    register: register
}