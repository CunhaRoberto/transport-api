import healthCheck from '../../src/maintenance/healthcheck.mjs'
import user from '../../src/user/routes.mjs'
import session from '../../src/session/routes.mjs'
import wrongWay from '../../src/maintenance/wrongWay.mjs'
import transport from '../../src/transport/routes.mjs'

function registerRoutes(app) {
  app.use(healthCheck)  
  app.use(user)
  app.use(transport)
  app.use(session) 
  app.use(wrongWay)
}

export default {
  boot: (app) => {
    registerRoutes(app)
  }
}
