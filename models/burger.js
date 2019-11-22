var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        // 'burgers' is table in mysql, youre updating it right here through orm
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        })
    },
    deleteOne: function (condition, cb) {
        orm.deleteOne("burgers", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;
