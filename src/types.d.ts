type colums = 'id' | 'producto' | 'descripcion' | 'categoria' | 'precio'

interface dic {
  colum: string
  param: string
}

interface insert {
  id: string
  img: string
  producto: string
  descripcion: string
  categoria: string
  precio: number
}

export {
  dic,
  colums,
  insert
}
