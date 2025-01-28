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

  async execute(paramDto) {
            
    const [bus, route] = await Promise.all([
      this.repository.getById(UUIDGenerator.from(paramDto.idBus), 'bus'),
      this.repository.getById(UUIDGenerator.from(paramDto.idRoute), 'routes' )
    ]);

    if (!bus || !route) {
      throw new DataNotFoundException(!bus ? 'Bus not found' : 'Route not found');
    }  
    
    paramDto.startDate = new Date(paramDto.startDate);
    paramDto.finishDate = new Date(paramDto.finishDate);
 
     
    if(paramDto.startDate > paramDto.finishDate) {
      throw new InvalidOperationException('The startDate cannot be greater than the finishDate');
    }

    const id = UUIDGenerator.generate()
    paramDto._id = id
    paramDto.idBus = UUIDGenerator.from(paramDto.idBus)
    paramDto.idRoute = UUIDGenerator.from(paramDto.idRoute)
    paramDto.nameRoute = route.name
    paramDto.created_at = new Date();
    const result = await this.repository.save(paramDto);
    if (!result) {
      throw new InvalidOperationException('Failed to create record.');
    }
    paramDto._id = id
    return paramDto;
  }
}

export default Create
