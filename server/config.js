module.exports = {
    token: {
        issuer: 'kikstart',
        secret:  process.env.TOKEN_SECRET || '',
        expiresIn: 60 * 60
    },
    server: {
        port: 3000
    },
    database: {
        dilect: 'mysql',
        host: process.env.DATABASE_HOST || 'localhost',
        database: process.env.DATABASE_DATABASE || 'kikstart',
        username: process.env.DATABASE_USERNAME || 'root',
        password: process.env.DATABASE_PASSWORD || ''
    },
    modules: [
        'auth',
        'user'
    ]
}