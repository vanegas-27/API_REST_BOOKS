"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const morgan_1 = __importDefault(require("morgan"));
const books_routes_1 = __importDefault(require("../routes/books.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.set('port', config_1.default.port);
app.use('/api/books/', books_routes_1.default);
app.get('/api', (_, res) => {
    res.send('<h1>REST API DAV.VANEGAS</h1>');
});
exports.default = app;
