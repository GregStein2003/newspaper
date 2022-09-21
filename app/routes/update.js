module.exports = function(application, MongoClient, check, validationResult){
    application.get("/update/:id", function(req, res){
        application.app.controllers.update.update(application, req, res, MongoClient)
    }) 

    application.post("/update/post/:id", [
        check("title", "Título é um campo obrigatório").notEmpty(),
        check("areaText", "Mensagem é um campo obrigatório").notEmpty(),
        check("date", "Data é um campo obrigatório").notEmpty()
    ], function(req, res){
        application.app.controllers.update.ship(application, req, res, validationResult, MongoClient)
    })
}
    