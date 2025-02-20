class Users {
  constructor(repositoryImpl) {
    this.collection = 'travel'      
    this.repository = repositoryImpl
  }

  async save(user) {
    return this
      .repository
      .save(this.collection, user)
  }

  async update(user, id) {
    return this
      .repository
      .update(this.collection, user)
  }

  async remove(id) {
    const data = await this
      .repository
      .remove(this.collection, id) 
    return data
  }

  
  async getAll(collection) {
    const data = await this.repository.getAll(collection? collection:this.collection)
    return data
  }
  
  async getAllTravelActive() {
    const data = await this
    .repository
    .getAllTravelActive()
    return data
  }
 
  async getById(id, collection) {
    const data = await this.repository.get(collection? collection:this.collection, id)
    return data
  }

  async getSeatByNumber( idTravel, paramDto) {
    const data = await this
      .repository
      .getSeatByNumber( idTravel, paramDto)

    return data
  }
  
  async getSeatByCpf(idTravel, paramDto) {
    const data = await this
    .repository
    .getSeatByCpf(idTravel, paramDto)
    return data
  }
 

   
  async getAllReservationsByCpf(cpf) {
    const data = await this
    .repository
    .getAllReservationsByCpf(cpf)
    return data
  }

  async getUsers(params, pagination) {
    const data = await this
      .repository
      .searchUsers(this.collection, params, pagination)
    
    return data
  }

  async getUsersCount(params) {
    const data = await this
      .repository
      .searchUsersCount(this.collection, params)
   
    return data
  }

 

  async createReservation(reservationDto, idTravel) {
    const data = await this
      .repository
      .createReservation(reservationDto, idTravel, this.collection)

    return data
  }
}

export default Users
