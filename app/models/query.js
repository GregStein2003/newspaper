module.exports.query = function (application, req, res, MongoClient, message, resultValidation) {

    message != undefined ? message : message = null;

    resultValidation != undefined ? resultValidation : resultValidation = null

    const connectionString = process.env.keyMongoDB;
    
    MongoClient.connect(connectionString, {
            useUnifiedTopology: true
        })
        .then(client => {
            const db = client.db("newsletter")

            const newsletterCollection = db.collection("list-news");


            newsletterCollection.find({}).toArray(function (err, result) {
                if (err) throw err;
                res.render('index', {
                    news: result,
                    validation: resultValidation,
                    message: message,
                    update: null
                });
            });
        })
}

