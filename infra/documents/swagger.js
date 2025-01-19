/* eslint-disable no-dupe-keys */

import paths from './paths.js'

export default
{
  swagger: '2.0',
  info: {
    title: 'USER - API',
    description: 'Project documentation User Api',
    version: '1.0.0'
  },
  host: process.env.API_URL,
  paths
}
