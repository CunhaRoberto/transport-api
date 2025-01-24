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
      }
}



