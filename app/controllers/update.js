module.exports.update = function(application, req, res, MongoClient, validationResult){
  application.app.models.update.update(application, req, res, MongoClient)
}

module.exports.ship = function(application, req, res, validationResult, MongoClient){

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

  application.app.models.update.edit(application, req, res, MongoClient)

  application.app.models.query.query(application, req, res, MongoClient, "sucess")
}