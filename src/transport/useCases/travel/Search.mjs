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
    const [bus, route] = await Promise.all([
      this.repository.getById(UUIDGenerator.from(result.idBus), 'bus'),
      this.repository.getById(UUIDGenerator.from(result.idRoute), 'routes' )
    ]);

    result.totalSeats = bus.quantidadePoltronas
    result.nameRoute = route.name
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
    const result = await this.repository.getAllTravelActive()
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
