/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import DataNotFoundException from '../../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../../support/UUIDGenerator.mjs'

class Search {
  constructor(repository) {
    this.repository = repository
  }

  async searchById(idTravel) {
    const id = UUIDGenerator.from(idTravel.id)
    const result = await this.repository.getById(id)
    if (!result) {
      throw new DataNotFoundException('Travel not found.')
    }
    return result
  }

  async searchByCpf(params) {
    
    const result = await this.repository.getAllReservationsByCpf(params.cpf)
    if (!result) {
      throw new DataNotFoundException('Travel not found.')
    }
    return result
  }

  async search() {
    const result = await this.repository.getAll()
    if (!result) {
      throw new DataNotFoundException('Travel not found.')
    }
    return result
  }

  async searchEmbarkation() {
    const result = await this.repository.getAll('embarkation')
    if (!result || result.length < 1 ) {
      throw new DataNotFoundException('Embarkation not found.')
    }
    return result
  }
}

export default Search
