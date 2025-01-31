/* eslint-disable max-len */
/* eslint-disable no-param-reassign */


import InvalidOperationException from '../../../core/exceptions/InvalidOperationException.mjs'
import DataNotFoundException from '../../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../../support/UUIDGenerator.mjs'
import InvalidParameterException from '../../../core/exceptions/InvalidParameterException.mjs';




class Create {
  constructor(repository) {
    this.repository = repository;
    
  }

  async execute(paramDto, id) {
    
    const idTravel = UUIDGenerator.from(id.idTravel)

    const travel = await this.repository.getById(idTravel)
    
    if (!travel) {
      throw new DataNotFoundException('Travel not found');
    }  
    
       
    const result = await this.repository.createReservation(paramDto, idTravel);
    if (!result) {
      throw new InvalidOperationException('Failed to create record.');
    }
    paramDto._id = id
    return paramDto;
  }
}

export default Create
