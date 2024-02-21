"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllerBd = __importStar(require("../services/services"));
function validateColum(colum) {
    let res;
    const columsBd = ['id', 'producto', 'descripcion', 'categoria', 'precio'];
    columsBd.includes(colum) ? res = true : res = false;
    return res;
}
function allData(table) {
    return __awaiter(this, void 0, void 0, function* () {
        const date = yield controllerBd.getData(table);
        return JSON.stringify(date);
    });
}
function dataParam(params) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!validateColum(params === null || params === void 0 ? void 0 : params.colum))
            return `Lo sentimos ${params === null || params === void 0 ? void 0 : params.colum} no es valido.`;
        return yield controllerBd.getDataParam(params === null || params === void 0 ? void 0 : params.colum, params === null || params === void 0 ? void 0 : params.param);
    });
}
function createData(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const [, ...lista] = Object.values(params);
        yield controllerBd.addData(lista);
    });
}
function updateData(params) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof parseInt(params === null || params === void 0 ? void 0 : params.id) !== 'number')
            throw new Error('Lo sentimos no se pudo actualizar');
        const [id, ...resto] = Object.values(params);
        yield controllerBd.modifyData(id, resto);
    });
}
function updateDataParam(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const str = Object.keys(params).join('=?,').concat('=?');
        if (typeof parseInt(params === null || params === void 0 ? void 0 : params.id) !== 'number')
            throw new Error('Lo sentimos no se pudo actualizar');
        yield controllerBd.modifyDataParam(params === null || params === void 0 ? void 0 : params.id, str, Object.values(params));
    });
}
function deleteDataID(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield controllerBd.deleteData(parseInt(id));
    });
}
exports.default = {
    allData,
    dataParam,
    deleteDataID,
    createData,
    updateData,
    updateDataParam
};
