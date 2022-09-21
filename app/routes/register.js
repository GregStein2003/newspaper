module.exports = function(application, MongoClient, check, validationResult){
    application.post("/signing",[
        check("title", "Título é um campo obrigatório").notEmpty(),
        check("areaText", "Mensagem é um campo obrigatório").notEmpty(),
        check("date", "Data é um campo obrigatório").notEmpty()
    ], function(req, res){
        application.app.controllers.register.signing(application, req, res, validationResult, MongoClient)
    }) 
}
    