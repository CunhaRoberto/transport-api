/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'

class SearchUsers {
  constructor(repository) {
    this.repository = repository
  }

  async searchById(userId) {
    const id = UUIDGenerator.from(userId.id)
    const resultUser = await this.repository.getById(id)
    if (!resultUser) {
      throw new DataNotFoundException('User not found.')
    }
    return resultUser
  }

  async search() {
    const resultUser = await this.repository.getAll()
    if (!resultUser) {
      throw new DataNotFoundException('User not found.')
    }
    return resultUser
  }
}

export default SearchUsers
