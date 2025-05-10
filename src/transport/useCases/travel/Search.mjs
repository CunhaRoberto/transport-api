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

  async searchByIdUser(paramDto) {    
    
    paramDto.idUser = UUIDGenerator.from(paramDto.idUser)


    const [user, reservations] = await Promise.all([
      this.repository.getById(paramDto.idUser, 'user'),      
      this.repository.getAllReservationsByIdUser(paramDto.idUser)      
    ]);

    if (!user || user.length === 0) throw new DataNotFoundException('User not found.');
    if (!reservations || reservations.length === 0) {
      throw new DataNotFoundException('Travel not found.');
    }


    const reservation = await Promise.all(reservations.map(async (reservation) => {        
      const embarkationDetails = await this.repository.getById(UUIDGenerator.from(reservation.seats.idEmbarkation), 'embarkation')
      reservation.seats.embarkation = embarkationDetails.name       
      return { ...reservation };
    }));
    
    return reservation;    
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
