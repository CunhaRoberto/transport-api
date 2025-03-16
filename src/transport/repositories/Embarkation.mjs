import { searchEmbarkation } from "../controllers/TravelController.mjs"

class Embarkation {
  constructor(repositoryImpl) {
    this.collection = 'embarkation'      
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
  
 
  async getById(id, collection) {
    const data = await this.repository.get(collection? collection:this.collection, id)
    return data
  } 
 
}

export default Embarkation
