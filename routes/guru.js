const routes = require('express').Router()

routes.get('/guru', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman guru method get'
    })
})
routes.post('/guru', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman guru method post'
    })
})
routes.put('/guru', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman guru method put'
    })
})
routes.delete('/guru', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman guru method delete'
    })
})

module.exports = routes