var controllers = require('./controllers')

module.exports = function(app){
    app.get('/authors', controllers.getallauthors)
    app.get('/authors/:id', controllers.getauthor)
    app.post('/authors', controllers.addauthor)
    app.put('/authors/:id', controllers.updateauthor)
    app.delete('/authors/:id', controllers.deleteauthor)
}