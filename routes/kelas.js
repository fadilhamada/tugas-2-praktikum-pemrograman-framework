const routes = require('express').Router()

routes.get('/kelas', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman kelas method get'
    })
})
routes.post('/kelas', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman kelas method post'
    })
})
routes.put('/kelas', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman kelas method put'
    })
})
routes.delete('/kelas', (req, res) => {
    res.json({
        status: 200,
        message: 'ini adalah halaman kelas method delete'
    })
})

module.exports = routes