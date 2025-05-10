/* eslint-disable no-param-reassign */

import Ajv from 'ajv'
import InvalidParameterException from '../../core/exceptions/InvalidParameterException.mjs'
import { format } from 'winston'

let ajv = new Ajv({ allErrors: true, jsonPointers: true })

const schemaUsers = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      format: 'uuid'
    },
    idUser:{
      type: 'string',
      format: 'uuid'
    }
  },
  required: [
    'id',
    'idUser'
  ],
  additionalProperties: false
}

async function validate(data) {
  const validateData = ajv.compile(schemaUsers)
  const result = validateData(data)

  if (result) {
    return result
  }

  throw new InvalidParameterException(JSON.stringify(validateData.errors))
}

export default {
  validate
}
