/* eslint-disable max-len */

import { default as UserIdPresenter } from '../presenters/SearchUsersById.mjs'
import UserRepository from '../repositories/Users.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import SearchBus from '../useCases/SearchBus.mjs'
import { default as SearchUsersIdValidator } from '../validators/SearchUsersById.mjs'

const Repository = new UserRepository(RepositoryImpl)

export async function search(request, response, next) {
  try {
    const searchUsersIdUseCase = new SearchBus(Repository)
    const resultUsers = await searchUsersIdUseCase.search()
    const presentUser = await UserIdPresenter.presentMap(resultUsers)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  }
}

export async function searchById(request, response, next) {
  try {
    const userId = request.query
    await SearchUsersIdValidator.validate(userId)

    const searchUsersIdUseCase = new SearchUsersId(Repository)
    const resultUsers = await searchUsersIdUseCase.searchById(userId)
    const presentUser = await UserIdPresenter.present(resultUsers)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  }
}