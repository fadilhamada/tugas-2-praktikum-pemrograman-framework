const routes = require('express').Router()

routes.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah method get"
    })
})

routes.post('/', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah method post"
    })
})
routes.put('/', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah method put"
    })
})
routes.delete('/', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah method delete"
    })
})

module.exports = routes