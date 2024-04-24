const routes = require('express').Router()

routes.get('/user', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman user method get'
    })
})
routes.post('/user', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman user method post'
    })
})
routes.put('/user', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman user method put'
    })
})
routes.delete('/user', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman user method delete'
    })
})

module.exports = routes