"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import mysql from 'promise-mysql'
const promise_mysql_1 = require("promise-mysql");
const config_1 = __importDefault(require("../app/config"));
const conect = (0, promise_mysql_1.createPool)({
    user: config_1.default.user,
    password: config_1.default.pass,
    host: config_1.default.host,
    database: config_1.default.bd
});
exports.default = conect;
