export const serialize = (obj : any) => {
  return JSON.stringify(obj)
}

export const deserialize = (obj: any) => {
  return JSON.parse(obj)
}