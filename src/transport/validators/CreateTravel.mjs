/* eslint-disable no-param-reassign */

import Ajv from 'ajv'
import InvalidParameterException from '../../core/exceptions/InvalidParameterException.mjs'

let ajv = new Ajv({ allErrors: true, jsonPointers: true })

const schema = {
  type: 'object',
  properties: {
    idBus: {type: 'string', format: 'uuid'},
    idRoute: {type: 'string', format: 'uuid'},
    startDate: {type: 'string', format: 'date-time'},
    finishDate: {type: 'string', format: 'date-time'}   
  },
  required: [
    'idBus',
    'idRoute',
    'startDate',
    'finishDate'
  ],
  additionalProperties: false
}

async function validate(data) {

  const validate = ajv.compile(schema)
  const result = validate(data)

  if (result) {
    return result
  }

  throw new InvalidParameterException(JSON.stringify(validate.errors))
}

export default {
  validate
}
