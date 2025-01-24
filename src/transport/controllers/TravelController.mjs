/* eslint-disable max-len */

import { default as Presenter } from '../presenters/SearchBus.mjs'
import TravelRepository from '../repositories/Travel.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import Search from '../useCases/SearchTravel.mjs'
//import { default as CreateUsersIdValidator } from '../validators/CreateUsers.mjs'
import bcrypt from 'bcrypt';

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
    const userDto = request.body
    await CreateUsersIdValidator.validate(userDto)
    
    userDto.password = await bcrypt.hash(userDto.password, 10);
    const createUsersIdUseCase = new CreateUserId(Repository)
    const resultUsers = await createUsersIdUseCase.execute(userDto)
    const presentUsers = await BusPresenter.present(resultUsers)
    return response.status(201).json(presentUsers)
  } catch (error) {
    return next(error)
  }
}
