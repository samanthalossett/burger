//require connection.js in the orm.js file//
var connectionJS= require("connection");

//In the orm.js file, create the methods that will execute the necessary MySQL 
// commands in the controllers. These are the methods you will need to use in order
//  to retrieve and store data in your database.
var burgerobject=[
    {
        burgername: "sams burger name",
        boolean: true,
    }
]
selectAll()
insertOne()
updateOne()

// Export the ORM object in module.exports.
module.exports= burgerobject;