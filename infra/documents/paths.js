import healthCheck from './paths/healthCheck.js'
import user from './paths/user.js'
import bus from './paths/bus.js'
import authentication from './paths/authentication.js'


let paths = Object.assign(
  healthCheck,
  user,
  bus,
  authentication
)

export default paths
