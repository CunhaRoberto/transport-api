/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import InvalidParameterException from '../../core/exceptions/InvalidParameterException.mjs'
import bcrypt from 'bcrypt'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'
import { default as GenerateToken } from '../use_cases/GenerateToken.mjs'

class AuthUser {
  constructor(repository) {
    this.repository = repository
  }

  async execute(params) {
    params.email = params.email.toLowerCase();
    const result = await this.repository.getAuthUsers(params)
    if (result.length < 1) {
      throw new DataNotFoundException('User not found.')
    }

    const validPassword = await  bcrypt.compare(params.password, result[0].password)
    if (!validPassword){        
        let result  = {       
            "message": "Invalid password"
          } 
    throw new InvalidParameterException(JSON.stringify(result.message))
    }

    const idUserRes = UUIDGenerator.from(result[0]._id).toString()
    const cpfUser = result[0].cpf
    const dto = {
      idUser : UUIDGenerator.from(result[0]._id).toString(),
      cpf: result[0].cpf,
      nome: result[0].name
    }
    const resultToken = GenerateToken.generateToken(dto)
      
   
    const tokenDto = {
      _id :  UUIDGenerator.generate(),
      token: resultToken.token,
      refresh_token: resultToken.refresh_token,
      idUser: result[0]._id,
      cpf: result[0].cpf,
      created_at : new Date(),
      expires_token_date: resultToken.expiresTokenDate
    }    
    await this.repository.saveToken(tokenDto)

    return {
      token:resultToken.token, 
      expires_token: resultToken.expiresTokenDate,
      refresh_token:resultToken.refresh_token     
    }
  }
}

export default AuthUser
