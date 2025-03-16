/* eslint-disable max-len */

import { default as PresenterSearch } from '../presenters/embarkation/Search.mjs'
import { default as PresenterCreate } from '../presenters/embarkation/Create.mjs'
import EmbarkationRepository from '../repositories/Embarkation.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import Search from '../useCases/embarkation/Search.mjs'
import Create from '../useCases/embarkation/Create.mjs'
import { default as CreateTravelValidator } from '../validators/CreateTravel.mjs'

const Repository = new EmbarkationRepository(RepositoryImpl)


export async function search(request, response, next) {
  try {
    const searchUseCase = new Search(Repository)
    const result = await searchUseCase.search()
    const presenter = await PresenterSearch.presentMap(result)
    return response.status(200).json(presenter)
  } catch (error) {
    return next(error)
  }
}

export async function searchById(request, response, next) {
  try {
    const searchUseCase = new Search(Repository)
    const id = request.query
    const result = await searchUseCase.searchById(id)
    const presenter = await PresenterSearch.present(result)
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
    const present = await PresenterCreate.present(result)
    return response.status(201).json(present)
  } catch (error) {
    return next(error)
  }  
}

export async function searchEmbarkation(request, response, next) {
  try {
    const searchUseCase = new Search(Repository)
    const result = await searchUseCase.searchEmbarkation()
    const presenter = await PresenterSearch.presentMapEmb(result)
    return response.status(200).json(presenter)
  } catch (error) {
    return next(error)
  }
}
