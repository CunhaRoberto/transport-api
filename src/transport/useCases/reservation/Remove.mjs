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

    const resultId = await this.repository.removeSeatByCpf(reservationDto.cpf , idTravel);
    if (resultId.modifiedCount === 1) {
      return { message: 'Removed Success' }

    }
    throw new DataNotFoundException('Reservation not found by CPF.');
  }
}

export default Remove