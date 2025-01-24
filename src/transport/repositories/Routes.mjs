class Routes {
  constructor(repositoryImpl) {
    this.collection = 'routes'        
    this.repository = repositoryImpl
  }

  async save() {
    return this
      .repository
      .save(this.collection, )
  }

  async update() {
    return this
      .repository
      .update(this.collection, )
  }

  async remove(id) {
    const data = await this
      .repository
      .remove(this.collection, id) 
    return data
  }

  
  async getAll() {
    const data = await this.repository.getAll(this.collection)
    return data
  }
 
  async getById(id) {
    const data = await this.repository.get(this.collection, id)
    return data
  }
  
}

export default Routes
