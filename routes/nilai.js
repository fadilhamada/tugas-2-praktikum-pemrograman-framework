const routes = require('express').Router()

routes.get('/nilai', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman nilai method get"
    })
})

routes.post('/nilai', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman nilai method post"
    })
})
routes.put('/nilai', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman nilai method put"
    })
})
routes.delete('/nilai', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman nilai method delete"
    })
})

module.exports = routes