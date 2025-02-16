import UUIDGenerator from '../../../support/UUIDGenerator.mjs'


const presenterMap = (data) => {
  const resultUserSpecifications = data.map((Temp) => {
    let id = UUIDGenerator.from(Temp._id).toString()
    //Temp.idBus = UUIDGenerator.from(Temp.idBus).toString(),
    //Temp.idRoute = UUIDGenerator.from(Temp.idRoute).toString(),
    delete Temp._id

    let result = { id, ...Temp }
    return result
  })

  return resultUserSpecifications
}


const presenterMapEmb = (data) => {
  const resultUserSpecifications = data.map((Temp) => {
    let id = UUIDGenerator.from(Temp._id).toString()
    delete Temp._id

    let result = { id, ...Temp }
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

const presenterReservation = async (data) => {
   const idTravel = UUIDGenerator.from(data._id).toString()
   data.idBus = UUIDGenerator.from(data.idBus).toString(),
   data.idRoute = UUIDGenerator.from(data.idRoute).toString(),
  delete data._id
  delete data.create_at
  
  const result = { idTravel, ...data}
  return result
}

export default {
  present: presenter,
  presentMap: presenterMap,
  presentMapEmb: presenterMapEmb,
  presentReservation: presenterReservation
  
}
