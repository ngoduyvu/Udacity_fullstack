"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//import { runInContext } from 'vm';
//import sharp from 'sharp';
//import resize from './utilities/resize';
//import logger from './utilities/logger';
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var port = 3000;
app.use('/api', index_1.default);
// app.get('/api/image', async function(req, res, next) {
//   try {
//     let filename = String(req.query.filename);
//     let width = Number(req.query.width);
//     let height = Number(req.query.height);
//     console.log(typeof(filename));
//     console.log(width);
//     console.log(height);
//     await resize(filename, width, height)
//     res.send(`${filename} has width: ${width} and height: ${height}`);
//   } catch (error) {
//     next(error);
//   }
// });
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
exports.default = app;
