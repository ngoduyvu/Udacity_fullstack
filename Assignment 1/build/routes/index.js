"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("../utilities/logger"));
var processImg_1 = __importDefault(require("./api/processImg"));
var routes = express_1.default.Router();
routes.get('/', logger_1.default, function (req, res) {
    res.status(200).send('OK');
});
routes.use('/image', processImg_1.default);
exports.default = routes;
