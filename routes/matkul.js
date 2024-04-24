const routes = require('express').Router()

routes.get('/matkul', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman matkul method get"
    })
})

routes.post('/matkul', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman matkul method post"
    })
})
routes.put('/matkul', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman matkul method put"
    })
})
routes.delete('/matkul', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman matkul method delete"
    })
})

module.exports = routes