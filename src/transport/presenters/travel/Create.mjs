import UUIDGenerator from '../../../support/UUIDGenerator.mjs'


const presenterMap = (data) => {
  const resultUserSpecifications = data.map((Temp) => {
    let id = UUIDGenerator.from(Temp._id)

    let result = {
      id: id.toString(),
      language: Temp.language,
      type: Temp.type,
      idType: Temp.idType,
      yearsUsefulLife: Temp.yearsUsefulLife
    }

    return result
  })

  return resultUserSpecifications
}

const presenter = async (data) => {
  let id = UUIDGenerator.from(data._id).toString()
  data.idBus = UUIDGenerator.from(data.idBus).toString(),
  data.idRoute = UUIDGenerator.from(data.idRoute).toString(),
  delete data._id
  
  const result = { id, ...data}
  return result
}

export default {
  present: presenter,
  presentMap: presenterMap
}
