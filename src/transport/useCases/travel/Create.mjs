/* eslint-disable max-len */
/* eslint-disable no-param-reassign */


import InvalidOperationException from '../../../core/exceptions/InvalidOperationException.mjs'
import DataNotFoundException from '../../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../../support/UUIDGenerator.mjs'




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
     
 /// verificar se startDate é maior que finalDate

    const id = UUIDGenerator.generate()
    paramDto._id = id
    paramDto.idBus = UUIDGenerator.generate(paramDto.idBus)
    paramDto.idRoute = UUIDGenerator.generate(paramDto.idRoute)
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
