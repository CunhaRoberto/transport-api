/* eslint-disable no-dupe-keys */

import paths from './paths.js'

export default
{
  swagger: '2.0',
  info: {
    title: 'TRANSPORT - API',
    description: 'Project documentation Transport Api',
    version: '1.0.0'
  },
  host: process.env.API_URL,
  paths
}
