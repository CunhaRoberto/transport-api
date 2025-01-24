/* eslint-disable max-len */

import { default as Presenter } from '../presenters/SearchBus.mjs'
import TravelRepository from '../repositories/Travel.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import Search from '../useCases/SearchTravel.mjs'
import { default as CreateTravelValidator } from '../validators/CreateUsers.mjs'

const Repository = new TravelRepository(RepositoryImpl)

export async function search(request, response, next) {
  try {
    const searchBusUseCase = new Search(Repository)
    const result = await searchBusUseCase.search()
    const presenter = await Presenter.presentMap(result)
    return response.status(200).json(presenter)
  } catch (error) {
    return next(error)
  }
}

export async function create(request, response, next) {
  try {
    const travelDto = request.body
    await CreateTravelValidator.validate(travelDto)    
    
    const createUseCase = new Create(Repository)
    const result = await createUseCase.execute(travelDto)
    const present = await Presenter.present(result)
    return response.status(201).json(present)
  } catch (error) {
    return next(error)
  }
}
