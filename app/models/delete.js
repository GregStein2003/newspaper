module.exports.delete = function(application, req, res, MongoClient){

    let id = req.params.id;

    const connectionString = process.env.keyMongoDB;
    
    MongoClient.connect(connectionString, {
            useUnifiedTopology: true
        })
        .then(client => {
            const db = client.db("newsletter")

            const newsletterCollection = db.collection("list-news");

            const ObjectID = require('mongodb').ObjectId;

            newsletterCollection.deleteOne({_id : ObjectID(id)}, function (error, response) {
                if(error){
                     return console.log(error)
                 }
             });
        })

    application.app.models.query.query(application, req, res, MongoClient, "delete")
}