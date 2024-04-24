const routes = require('express').Router()

routes.get('/karyawan', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman karyawan method get"
    })
})

routes.post('/karyawan', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman karyawan method post"
    })
})
routes.put('/karyawan', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman karyawan method put"
    })
})
routes.delete('/karyawan', (req, res) => {
    res.json({
        status: 200,
        message: "ini adalah halaman karyawan method delete"
    })
})

module.exports = routes