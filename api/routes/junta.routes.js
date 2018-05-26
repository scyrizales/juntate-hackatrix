module.exports = (app) => {
    const juntaController = require('../controllers/junta.controller');

    app.get('/junta/findAll', juntaController.findAll);
    app.get('/junta/findOne/:id', juntaController.findOne);
    app.get('/junta/create', juntaController.create)
    
}