module.exports = {
    secret: process.env.SECRET || 'budgetsecret',
    session: { session: false },
    port: process.env.PORT || 3000,
    activeModules: [
        'common',
        'consumer',
        'order'
    ]
}