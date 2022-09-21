module.exports.update = function(application, req, res, MongoClient, message, resultValidation){

    let id = req.params.id;

    message != undefined ? message : message = null;

    resultValidation != undefined ? resultValidation : resultValidation = null
    
    const connectionString = process.env.keyMongoDB;

    MongoClient.connect(connectionString, {
            useUnifiedTopology: true
        })
        .then(client => {

            const db = client.db("newsletter")

            const newsletterCollection = db.collection("list-news");

            const ObjectID = require('mongodb').ObjectId;

            async function listAllNews(newsletterCollection) {
                return newsletterCollection.find({}).toArray()
            }

            // Utilizando o método then
            var newsPromise = listAllNews(newsletterCollection)

            newsPromise.then(news => {

                newsletterCollection.findOne({_id : ObjectID(id)}, function (error, response) {
               
                    if(error){
                     console.log(error)
                    }
     
                    data = {
                     id: id,
                     date: response.date,
                     title: response.title,
                     areaText: response.areaText
                    }
     
                    res.render('index', {
                     news: news,
                     validation: resultValidation,
                     message: message,
                     update: data
                     });
                  });
            })
        })
}

module.exports.edit = function(application, req, res, MongoClient, message, resultValidation){
    let id = req.params.id;

    message != undefined ? message : message = null;

    resultValidation != undefined ? resultValidation : resultValidation = null

    const connectionString = process.env.keyMongoDB;
    
    MongoClient.connect(connectionString, {
            useUnifiedTopology: true
        })
        .then(client => {
            const db = client.db("newsletter")

            const newsletterCollection = db.collection("list-news")
                
            const date = req.body.date;
            const title = req.body.title;
            const areaText = req.body.areaText;

            const ObjectID = require('mongodb').ObjectId;

            const query = {_id: new ObjectID(id)};

            var newvalues = {$set: {date: date, title: title, areaText: areaText }};

            newsletterCollection.updateOne(query, newvalues, (error, res) => {
                if (error) throw error;
            });

        })


}