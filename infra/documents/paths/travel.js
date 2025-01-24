export default
{
 
  '/travel/': {
    // post: {
    //   summary: 'Create user',
    //   tags: ['User'],
    //   description: 'Create user',
    //   parameters: [
    //     {
    //       in: 'body',
    //       name: 'body',
    //       description: 'description',
    //       require: 'require',
    //       schema: {
    //         type: 'object',
    //         properties: {
    //             name: {
    //             type: 'string',
    //             require: true,
    //             example: 'Sophia Cunha'
    //           },
    //           cpf: {
    //             type: 'string',
    //             require: true,
    //             example: '12345678900'
    //           },
    //           email: {
    //             type: 'string',
    //             require: true,
    //             example: 'sophia@email.com'
    //           },
    //           cellPhone: {
    //             type: 'string',
    //             require: true,
    //             example: '11912345678'
    //           },
    //           password: {
    //             type: 'string',
    //             require: true,
    //             minLength: 6,
    //             maxLength: 10,
    //             example: '125@Teste'
    //           }
    //         }
    //       }
    //     }
    //   ],
    //   responses: {
    //     201: {
    //       description: 'Created successfully'
    //     },
    //     400: {
    //       description: 'Bad request'
    //     },
    //     404: {
    //       description: 'Not found'
    //     },
    //     409: {
    //       description: 'Conflict'
    //     },
    //     500: {
    //       description: 'Internal Server Error'
    //     }
    //   }
    //   },
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
    }
}



