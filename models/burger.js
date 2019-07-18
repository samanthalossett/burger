// import orm.js into burger.js
var orm= require ("../config/orm");

// Also inside burger.js, create the code that will call the ORM functions 
// using burger specific input for the ORM.
var burger = {
    selectAll: function (callback){
        orm.selectAll("burgers", function (res){
            callback(res);
        });
    },
    insertOne: function (columns, values, callback){
        orm.selectAll("burgers", columns, values, function (res){
            callback(res);
        });
    },
    updateOne: function (objColVals, condition, callback){
        orm.selectAll("burgers", objColVals, condition, function (res){
            callback(res);
        });
    },
    deleteOne: function (condition, callback){
        orm.selectAll("burgers", condition, function (res){
            callback(res);
        });
    }
}




// Export at the end of the burger.js file.

// module.exports= code...