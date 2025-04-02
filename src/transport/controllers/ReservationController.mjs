/* eslint-disable max-len */

import { default as Presenter } from '../presenters/travel/Search.mjs'
import TravelRepository from '../repositories/Travel.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import Search from '../useCases/travel/Search.mjs'
import Create from '../useCases/reservation/Create.mjs'
import Remove from '../useCases/reservation/Remove.mjs'
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

export async function searchByCpf(request, response, next) {
  try {
    const cpf = request.query
    const searchUseCase = new Search(Repository)
    const result = await searchUseCase.searchByCpf(cpf)
    const presenter = await Presenter.presentAllReservation(result)
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
    const present = await Presenter.presentReservation(result)
    return response.status(201).json(present)
  } catch (error) {
    return next(error)
  }
}


export async function remove(request, response, next) {
  try {
    const reservationDto = request.query
    //await DeleteUsersIdValidator.validate(reservationDto)

    const removeUseCase = new Remove(Repository)
    const resultIUsers = await removeUseCase.execute(reservationDto)
    return response.status(200).json(resultIUsers)
  } catch (error) {
    return next(error)
  }
}