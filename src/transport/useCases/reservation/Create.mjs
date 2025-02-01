/* eslint-disable max-len */
/* eslint-disable no-param-reassign */


import InvalidOperationException from '../../../core/exceptions/InvalidOperationException.mjs'
import DataNotFoundException from '../../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../../support/UUIDGenerator.mjs'
import AlreadyExistsException from '../../../core/exceptions/AlreadyExistsException.mjs';




class Create {
  constructor(repository) {
    this.repository = repository;
    
  }

  async execute(paramDto, id) {
    
    const idTravel = UUIDGenerator.from(id.idTravel)

    const [travel, seat, user] = await Promise.all([
      this.repository.getById(idTravel),
      this.repository.getSeatByNumber(idTravel, paramDto.seatNumber ),
      this.repository.getSeatByCpf(idTravel, paramDto.cpf)
      
    ]);

    if (!travel) {
      throw new DataNotFoundException('Travel not found');
    }  
    if (user.length > 0) {
      throw new AlreadyExistsException (`the cpf has already reserved the seat ${user[0].seats.seatNumber}`);
    } 

    if (seat.length > 0) {
      throw new AlreadyExistsException ('Already reserved seat');
    }
    
    paramDto.reservation_created_at = new Date();
       
    const result = await this.repository.createReservation(paramDto, idTravel);
    if (!result) {
      throw new InvalidOperationException('Failed to create record.');
    }
    
    delete travel.seats
    

    return {
      ...travel,
      ...paramDto
    } ;
  }
}

export default Create
