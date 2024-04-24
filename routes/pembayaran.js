const routes = require('express').Router()

routes.get('/pembayaran', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman pembayaran method get'
    })
})
routes.post('/pembayaran', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman pembayaran method post'
    })
})
routes.put('/pembayaran', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman pembayaran method put'
    })
})
routes.delete('/pembayaran', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman pembayaran method delete'
    })
})

module.exports = routes