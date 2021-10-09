"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, next) {
    var url = req.url;
    console.log(url + " was visited");
    next();
};
exports.default = logger;
