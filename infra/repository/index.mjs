import * as queries from './Mongo/queries/index.mjs'

import { default as MongoImpl } from './Mongo/index.mjs'

class RepositoryWrapper {
  constructor(impl, queryString) {
    this.queries = queryString
    this.impl = impl
  }

  save(collection, data) {
    return this.impl.save(collection, data)
  }

  update(collection, data) {
    return this.impl.update(collection, data)
  }

  updateOne(collection, data) {
    return this.impl.updateOne(collection, data)
  }
  
  get(collection, id) {
    return this.impl.get(collection, id)
  }
  

  getAll(collection) {
    return this.impl.getAll(collection)
  }

 

  getAllReservationsByCpf( idTravel, paramDto) {
    const statement = this.queries.getAllReservationsByCpf
    return this.impl.aggregate(
      statement.collection,
      statement.query( idTravel, paramDto)
    )
  }

  searchUserByCpf(userCpf) {
    const statement = this.queries.searchUserByCpf
    return this.impl.aggregate(
      statement.collection,
      statement.query(userCpf)
    )
  }

  searchUserByEmail(userEmail) {
    const statement = this.queries.searchUserByEmail
    return this.impl.aggregate(
      statement.collection,
      statement.query(userEmail)
    )
  }


  remove(collection, id) {
    return this.impl.remove(collection, id)
  }

  searchByIdentity(collection, params) {
    const statement = this.queries.searchByIdentity
    return this.impl.find(
      collection,
      statement.query(params)
    )
  }

  searchUserById(collection, params) {
    const statement = this.queries.searchUserById
    return this.impl.aggregate(
      collection,
      statement.query(params)
    )
  }

  getSeatByNumber( idTravel, paramDto) {
    const statement = this.queries.getSeatByNumber
    return this.impl.aggregate(
      statement.collection,
      statement.query( idTravel, paramDto)
    )
  }

  getSeatByCpf( idTravel, paramDto) {
    const statement = this.queries.getSeatByCpf
    return this.impl.aggregate(
      statement.collection,
      statement.query( idTravel, paramDto)
    )
  }

 
  removeSeatByCpf(reservationDto, idTravel, collection) {
    return this.impl.removeReservation(reservationDto, idTravel, collection)
  }
  
  
  getAllReservationsByCpf( paramDto) {
    const statement = this.queries.getAllReservationsByCpf
    return this.impl.aggregate(
      statement.collection,
      statement.query( paramDto)
    )
  }

  getAllTravelActive() {
    const statement = this.queries.getAllTravelActive
    return this.impl.aggregate(
      statement.collection,
      statement.query()
    )
  }

  createReservation(reservationDto, idTravel, collection) {
    return this.impl.createReservation(reservationDto, idTravel, collection)
  }
  

  searchAuthUsers(params) {
    const statement = this.queries.searchAuthUsers
    return this.impl.aggregate(
      statement.collection,
      statement.query(params)
    )
  }

  searchByCode(code) {
    const statement = this.queries.searchByCode
    return this.impl.aggregate(
      statement.collection,
      statement.query(code)
    )
  }
  
}

export { Implementation } from './Mongo/index.mjs'
export default new RepositoryWrapper(MongoImpl, queries)
