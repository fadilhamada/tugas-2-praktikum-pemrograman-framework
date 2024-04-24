const routes = require('express').Router()

routes.get('/dashboard', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman dashboard method get'
    })
})
routes.post('/dashboard', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman dashboard method post'
    })
})
routes.put('/dashboard', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman dashboard method put'
    })
})
routes.delete('/dashboard', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman dashboard method delete'
    })
})

module.exports = routes