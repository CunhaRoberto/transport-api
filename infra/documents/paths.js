import healthCheck from './paths/healthCheck.js'
import user from './paths/user.js'
import bus from './paths/bus.js'
import travel from './paths/travel.js'
import reservation from './paths/reservation.js'
import session from './paths/session.js'


let paths = Object.assign(
  healthCheck,
  user,
  session,
  bus,
  travel,
  reservation
)

export default paths
