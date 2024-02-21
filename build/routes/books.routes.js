"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_bd_1 = __importDefault(require("../controller/controller.bd"));
const router = express_1.default.Router();
// periciones get
router.get('/', (_req, res) => {
    controller_bd_1.default.allData('catalogo')
        .then(rel => res.send(rel))
        .catch(err => console.log(res.status(400).send(err)));
});
router.get('/:colum/:param', (req, res) => {
    const params = {
        colum: req.params.colum,
        param: req.params.param
    };
    controller_bd_1.default.dataParam(params)
        .then(rel => res.send(JSON.stringify(rel)))
        .catch(err => console.error(res.status(404).send(err)));
});
// ------end petciones get------
// peticiones post
router.post('/', (req, _res) => {
    controller_bd_1.default.createData(req.body)
        .then(() => console.log('todo correcto'))
        .catch(err => console.error(err));
});
// ------ebd peticiones post------
// peticiones put
router.put('/:id', (req, _res) => {
    const id = req.params.id;
    const params = Object.assign({ id }, req.body);
    controller_bd_1.default.updateData(params)
        .then(() => console.log('se modifico correctamente'))
        .catch(err => console.error(err));
});
// ------ebd peticiones put------
// peticiones patch
router.patch('/:id', (req, _res) => {
    const id = req.params.id;
    const rel = Object.assign({ id }, req.body);
    controller_bd_1.default.updateDataParam(rel)
        .then(() => console.log('se modifico correcamente'))
        .catch(err => console.error(err));
});
// ------end peticiones patch------
// peticiones delete
router.delete('/:id', (req, _) => {
    controller_bd_1.default.deleteDataID(req.params.id)
        .then(() => console.log('se elimino coreectamente'))
        .catch(err => console.error(err));
});
// ------end peticiones delete------
exports.default = router;
