"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    pass: process.env.PASS,
    bd: process.env.BD
};
