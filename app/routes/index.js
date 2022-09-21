module.exports = function(application, MongoClient){
    application.get("/", function(req, res){
        application.app.controllers.index.index(application, req, res, MongoClient)
    })
}