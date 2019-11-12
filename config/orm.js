var connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    };

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
                value = '"' + value + '"';
            arr.push(key + '=' + value);
        };
        return arr.toString();
    };
var orm = {
    all: function (tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput;
        
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table;
        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    update: function (table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table;
        queryString += 'SET';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

};

// Export from the orm object for the model (burger.js)
module.exports = orm;