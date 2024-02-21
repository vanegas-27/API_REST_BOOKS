import express from 'express'
import controller from '../controller/controller.bd'
import { dic } from '../types'

const router = express.Router()

// periciones get
router.get('/', (_req, res) => {
  controller.allData('catalogo')
    .then(rel => res.send(rel))
    .catch(err => console.log(res.status(400).send(err)))
})

router.get('/:colum/:param', (req, res) => {
  const params: dic = {
    colum: req.params.colum,
    param: req.params.param
  }

  controller.dataParam(params)
    .then(rel => res.send(JSON.stringify(rel)))
    .catch(err => console.error(res.status(404).send(err)))
})

// ------end petciones get------

// peticiones post
router.post('/', (req, _res) => {
  controller.createData(req.body)
    .then(() => console.log('todo correcto'))
    .catch(err => console.error(err))
})

// ------ebd peticiones post------

// peticiones put
router.put('/:id', (req, _res) => {
  const id = req.params.id
  const params = {
    id,
    ...req.body
  }
  controller.updateData(params)
    .then(() => console.log('se modifico correctamente'))
    .catch(err => console.error(err))
})

// ------ebd peticiones put------

// peticiones patch

router.patch('/:id', (req, _res) => {
  const id = req.params.id
  const rel = {
    id,
    ...req.body
  }
  controller.updateDataParam(rel)
    .then(() => console.log('se modifico correcamente'))
    .catch(err => console.error(err))
})

// ------end peticiones patch------

// peticiones delete
router.delete('/:id', (req, _) => {
  controller.deleteDataID(req.params.id)
    .then(() => console.log('se elimino coreectamente'))
    .catch(err => console.error(err))
})

// ------end peticiones delete------

export default router
