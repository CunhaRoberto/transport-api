/* eslint-disable max-len */

import { default as Presenter } from '../presenters/SearchRoutes.mjs'
import RoutesRepository from '../repositories/Routes.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import Search from '../useCases/route/Search.mjs'

//import { default as CreateUsersIdValidator } from '../validators/CreateUsers.mjs'
import bcrypt from 'bcrypt';

const Repository = new RoutesRepository(RepositoryImpl)

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

export async function searchById(request, response, next) {
  try {
    const searchUseCase = new Search(Repository)
    const result = await searchUseCase.searchById(id)
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
