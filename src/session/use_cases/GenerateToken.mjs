import dotenv from 'dotenv/config'
import jwt from 'jsonwebtoken'
import auth from '../../../config/auth.mjs'
import ms from 'ms'

const generateToken = (idUser, cpfUser) => { 
  const {
    secret_token,        
    secret_refresh_token,
    expires_in_token,
    expires_in_refresh_token
  } = auth

  const token = jwt.sign(
    {
      idUser,
      cpf: cpfUser
    },
    secret_token,
    {
      expiresIn: expires_in_token
    }
  ) 
  
  const refresh_token = jwt.sign(
    {
      idUser,
      cpf: cpfUser
    },
    secret_refresh_token,
    {
      expiresIn: expires_in_refresh_token
    }
  )      
        
  return {
    token, 
    refresh_token,
    expiresTokenDate: new Date(Date.now() + ms(expires_in_token))  
  } 
}

export default {
  generateToken
}
