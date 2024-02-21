"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteData = exports.modifyDataParam = exports.modifyData = exports.addData = exports.getDataParam = exports.getData = void 0;
const bd_1 = __importDefault(require("../database/bd"));
function getData(table) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (yield bd_1.default).query(`SELECT * FROM ${table}`);
    });
}
exports.getData = getData;
function getDataParam(colum, param) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (yield bd_1.default).query(`SELECT * FROM catalogo WHERE ${colum} = '${param}';`);
    });
}
exports.getDataParam = getDataParam;
function addData(params) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (yield bd_1.default).query('INSERT INTO catalogo (img , producto, descripcion, categoria, precio) VALUES (?,?,?,?,?)', params);
    });
}
exports.addData = addData;
function modifyData(id, params) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (yield bd_1.default).query(`UPDATE catalogo SET img=?, producto=?, descripcion=?, categoria=?, precio=? WHERE id = '${id}';`, params);
    });
}
exports.modifyData = modifyData;
function modifyDataParam(id, params, values) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (yield bd_1.default).query(`UPDATE catalogo SET ${params} WHERE id = '${id}';`, values);
    });
}
exports.modifyDataParam = modifyDataParam;
function deleteData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (yield bd_1.default).query(`DELETE FROM catalogo WHERE id = '${id}';`);
    });
}
exports.deleteData = deleteData;
