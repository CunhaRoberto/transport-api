import UUIDGenerator from '../../support/UUIDGenerator.mjs'

const presenterMap = (data) => {
  const result = data.map((Temp) => {
    let id = UUIDGenerator.from(Temp._id)
    delete Temp._id
   

    let result = {
      id: id.toString(),
      ...Temp
    }

    return result
  })

  return result
}

const presenter = async (data) => {
  delete data._id
  delete data.password

  let result = {
    ...data
  }

  return result
}

export default {
  present: presenter,
  presentMap: presenterMap
}
