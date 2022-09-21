module.exports.signing = function (application, req, res, validationResult, MongoClient) {

    const errorFormatter = ({
        location,
        msg,
        param,
        value,
        nestedErrors
    }) => {
        return `${msg}`;
    };

    const result = validationResult(req).formatWith(errorFormatter);

    if (!result.isEmpty()) {
        application.app.models.query.query(application, req, res, MongoClient, null, result)
        return;
    }

    application.app.models.add.register(application, req, res, MongoClient)

    setTimeout(function(){
        application.app.models.query.query(application, req, res, MongoClient, "sucess")
   }, 3000);


}
