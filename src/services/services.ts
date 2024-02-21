import conn from '../database/bd'

export async function getData (table: string): Promise<string> {
  return await (await conn).query(`SELECT * FROM ${table}`)
}

export async function getDataParam (colum: string, param: string): Promise<string> {
  return await (await conn).query(`SELECT * FROM catalogo WHERE ${colum} = '${param}';`)
}

export async function addData (params: string[]): Promise<void> {
  await (await conn).query('INSERT INTO catalogo (img , producto, descripcion, categoria, precio) VALUES (?,?,?,?,?)', params)
}

export async function modifyData (id: string, params: string[]): Promise<void> {
  await (await conn).query(`UPDATE catalogo SET img=?, producto=?, descripcion=?, categoria=?, precio=? WHERE id = '${id}';`, params)
}

export async function modifyDataParam (id: string, params: string, values: string[]): Promise<void> {
  await (await conn).query(`UPDATE catalogo SET ${params} WHERE id = '${id}';`, values)
}

export async function deleteData (id: number): Promise<void> {
  return await (await conn).query(`DELETE FROM catalogo WHERE id = '${id}';`)
}
