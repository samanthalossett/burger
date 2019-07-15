//require connection.js in the orm.js file//
var connection = require("../config/connection");

//create the Qmark function to use in the "insertOne" //
function createQmarks(num){
    var arr= [];
    for (var i=0; i<num; i++){
        arr.push("?");
    }
    return arr.toString();
}

//create the -- function//
function translateSql(obj){
    var arr = [];
    for (var key in ob){
        var value= ob[key];
        if (Object.hasOwnProperty.call(ob, key)){
            if (typeof value === "string" && value.indexOf(" ") >=0){
                value = "'" + value + "'" ;
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}

//In the orm.js file, create the methods that will execute the necessary MySQL 
// commands in the controllers. These are the methods you will need to use in order
//  to retrieve and store data in your database.
var orm = {
    selectAll: function (table, callback) {
        var dbQuery = "SELECT * FROM" + table + ";";

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        })
    },
    insertOne: function (table, columns, values, callback) {
        var dbQuery = "INSERT INTO" + 
        table + 
        " (" + 
        columns.toString() + 
        ") " + 
        "VALUES (" + 
        createQmarks(values.length) + 
        ") ";

        console.log(dbQuery)
        connection.query(dbQuery, values, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    },
    updateOne: function (table, objColVals, condition, callback){
        var dbQuery= "UPDATE" + 
        table + 
        "SET" + 
        translateSql(objColVals) + 
        "WHERE" + 
        condition;

        console.log(dbQuery)
        connection.query(dbQuery, values, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    },
    deleteOne: function(table, condition, callback){
        var dbQuery= "DELETE from"+
        table +
        "WHERE" +
        condition;

        console.log(dbQuery)
        connection.query(dbQuery, values, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    },
};


// Export the ORM object in module.exports.
module.exports = orm;