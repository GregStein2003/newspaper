module.exports = function(application, MongoClient){
    application.get("/delete/:id", function(req, res){
        application.app.controllers.index.delete(application, req, res, MongoClient)
    })
}