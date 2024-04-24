const routes = require('express').Router()

routes.get('/siswa', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman siswa method get"
    })
})

routes.post('/siswa', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman siswa method post"
    })
})
routes.put('/siswa', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman siswa method put"
    })
})
routes.delete('/siswa', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman siswa method delete"
    })
})

module.exports = routes