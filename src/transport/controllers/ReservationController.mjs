/* eslint-disable max-len */

import { default as Presenter } from '../presenters/travel/Create.mjs'
import TravelRepository from '../repositories/Travel.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import Search from '../useCases/travel/Search.mjs'
import Create from '../useCases/reservation/Create.mjs'
import { default as CreateTravelValidator } from '../validators/CreateTravel.mjs'

const Repository = new TravelRepository(RepositoryImpl)


export async function search(request, response, next) {
  try {
    const searchUseCase = new Search(Repository)
    const result = await searchUseCase.search()
    const presenter = await Presenter.presentMap(result)
    return response.status(200).json(presenter)
  } catch (error) {
    return next(error)
  }
}

export async function create(request, response, next) {
  try {
    const reservationDto = request.body
    const idTravel = request.query
    //await CreateTravelValidator.validate(reservationDto)    
    const createUseCase = new Create(Repository)
    const result = await createUseCase.execute(reservationDto, idTravel)
    const present = await Presenter.present(result)
    return response.status(201).json(present)
  } catch (error) {
    return next(error)
  }
}
