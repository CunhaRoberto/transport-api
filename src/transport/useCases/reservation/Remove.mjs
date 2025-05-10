/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import DataNotFoundException from '../../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../../support/UUIDGenerator.mjs'

class Remove {
  constructor(repository) {
    this.repository = repository;
  }

    async execute(reservationDto) {
      const idTravel = UUIDGenerator.from(reservationDto.id)
      const idUser = UUIDGenerator.from(reservationDto.idUser)

    const resultId = await this.repository.removeSeatByIdUser(idUser , idTravel);
    if (resultId.modifiedCount === 1) {
      return { message: 'Removed Success' }

    }
    throw new DataNotFoundException('Reservation not found by Id User.');
  }
}

export default Remove