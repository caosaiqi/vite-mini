const connect = require('connect')
const http = require('http')
const fs = require('fs')

const middleware = connect()

const resolveHttpServer = http.createServer(middleware)

const startServer = (listen = 9000) => resolveHttpServer.listen(listen)

// transform index.html
function indexHtmlMiddleware(req, res, next) {
    const filename = '/Users/admin/Desktop/demo/index.html'
    if (fs.existsSync(filename)) {
        const html = fs.readFileSync(filename, 'utf-8')
        res.end(html)
    }

    next()
}

middleware.use(indexHtmlMiddleware)

startServer()