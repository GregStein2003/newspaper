module.exports.register = function(application, req, res, MongoClient){

    const connectionString = process.env.keyMongoDB;

    MongoClient.connect(connectionString, {
            useUnifiedTopology: true
        })
        .then(client => {
            const db = client.db("newsletter")

            const newsletterCollection = db.collection("list-news")

            newsletterCollection.insertOne(req.body)
                .then(console.error)
        })
        
}