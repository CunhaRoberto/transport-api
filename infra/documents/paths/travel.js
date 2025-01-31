export default
{
 
  '/travel/': {
    get: {
      summary: 'Search travel',
      description: 'Search travel',
      tags: ['Travel'],
      
      responses: {
        200: {
          description: 'Located successfully'
        },
        400: {
          description: 'Bad Request'
        },
        404: {
          description: 'Not found'
        },        
        500: {
          description: 'Internal server Error'
        }
      }
      },
      post: {
        summary: 'Create travel',
        tags: ['Travel'],
        description: 'Create travel',
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'description',
            require: 'require',
            schema: {
              type: 'object',
              properties: {
                idBus: {
                  type: 'string',
                  format: 'uuid',
                  require: true,
                  example: '95af06d5-56c5-435a-a8e9-8fe1201c3721'
                },
                idRoute: {
                  type: 'string',
                  format: 'uuid',
                  require: true,
                  example: '95af06d5-56c5-435a-a8e9-8fe1201c3721'
                },
                startDate: {
                  type: 'string',
                  format: 'date-time',
                  require: true,
                  example: '2025-08-15T20:27:42.769Z'
                },
                finishDate: {
                  type: 'string',
                  format: 'date-time',
                  require: true,
                  example: '2025-08-16T20:27:42.769Z'
                }                
              }
            }
          }
        ],
        responses: {
          201: {
            description: 'Created successfully'
          },
          400: {
            description: 'Bad request'
          },
          404: {
            description: 'Not found'
          },
          409: {
            description: 'Conflict'
          },
          500: {
            description: 'Internal Server Error'
          }
        }
        },
  },
  '/routes/': {
      get: {
        summary: 'Search routes',
        description: 'Search routes',
        tags: ['Travel'],
        
        responses: {
          200: {
            description: 'Located successfully'
          },
          400: {
            description: 'Bad Request'
          },
          404: {
            description: 'Not found'
          },        
          500: {
            description: 'Internal server Error'
          }
        }
        },
  },
  '/routes/id': {
      get: {
        summary: 'Search route by id',
        description: 'Search route by id',
        tags: ['Travel'],
        parameters: [
      
          {
            name: 'id',
            in: 'query',
            required: true,
            type: 'string',
            example: '95af06d5-56c5-435a-a8e9-8fe1201c3721'
          }
        ],
        
        responses: {
          200: {
            description: 'Located successfully'
          },
          400: {
            description: 'Bad Request'
          },
          404: {
            description: 'Not found'
          },        
          500: {
            description: 'Internal server Error'
          }
        }
        },
  },
  '/embarkation/': {
    get: {
      summary: 'Search embarkation',
      description: 'Search embarkation',
      tags: ['Travel'],
      
      responses: {
        200: {
          description: 'Located successfully'
        },
        400: {
          description: 'Bad Request'
        },
        404: {
          description: 'Not found'
        },        
        500: {
          description: 'Internal server Error'
        }
      }
      }     
  },
}



