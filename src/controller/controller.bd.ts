import * as controllerBd from '../services/services'
import { dic, insert } from '../types'

function validateColum (colum: string): boolean {
  let res
  const columsBd = ['id', 'producto', 'descripcion', 'categoria', 'precio']
  columsBd.includes(colum) ? res = true : res = false
  return res
}

async function allData (table: string): Promise<string> {
  const date = await controllerBd.getData(table)
  return JSON.stringify(date)
}

async function dataParam (params: dic): Promise<string> {
  if (!validateColum(params?.colum)) return `Lo sentimos ${params?.colum} no es valido.`
  return await controllerBd.getDataParam(params?.colum, params?.param)
}

async function createData (params: insert): Promise<void> {
  const [, ...lista] = Object.values(params)
  await controllerBd.addData(lista)
}

async function updateData (params: insert): Promise<void> {
  if (typeof parseInt(params?.id) !== 'number') throw new Error('Lo sentimos no se pudo actualizar')
  const [id, ...resto] = Object.values(params)
  await controllerBd.modifyData(id, resto)
}

async function updateDataParam (params: insert): Promise<void> {
  const str = Object.keys(params).join('=?,').concat('=?')
  if (typeof parseInt(params?.id) !== 'number') throw new Error('Lo sentimos no se pudo actualizar')
  await controllerBd.modifyDataParam(params?.id, str, Object.values(params))
}

async function deleteDataID (id: string): Promise<void> {
  await controllerBd.deleteData(parseInt(id))
}

export default {
  allData,
  dataParam,
  deleteDataID,
  createData,
  updateData,
  updateDataParam
}
