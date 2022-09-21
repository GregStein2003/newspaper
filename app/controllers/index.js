module.exports.index = function(application, req, res, MongoClient){
    application.app.models.query.query(application, req, res, MongoClient)
}

module.exports.delete = function(application, req, res, MongoClient){
    application.app.models.delete.delete(application, req, res, MongoClient)
}