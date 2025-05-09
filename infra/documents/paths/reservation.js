export default
{
  //user module
  '/user/': {
    post: {
      summary: 'Create user',
      tags: ['User'],
      description: 'Create user',
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'description',
          require: 'require',
          schema: {
            type: 'object',
            properties: {
                name: {
                type: 'string',
                require: true,
                example: 'Sophia Cunha'
              },
              cpf: {
                type: 'string',
                require: true,
                example: '12345678900'
              },
              email: {
                type: 'string',
                require: true,
                example: 'sophia@email.com'
              },
              cellPhone: {
                type: 'string',
                require: true,
                example: '11912345678'
              },
              password: {
                type: 'string',
                require: true,
                minLength: 6,
                maxLength: 10,
                example: '125@Teste'
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
    get: {
      summary: 'Search users',
      description: 'Search users',
      tags: ['User'],
      
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
  '/reservation/idTravel': {
    post: {
      summary: 'Create reservation',
      tags: ['Reservation'],
      description: 'Create reservation',
      parameters: [
        {
          name: 'idTravel',
          in: 'query',
          required: true,
          type: 'string',
          format: 'uuid',
        },
        {
          in: 'body',
          name: 'body',
          description: 'description',
          require: 'require',
          schema: {
            type: 'object',
            properties: {              
              seatNumber: {
                type: 'number',
                require: true,
                example: 1
              },
              passengerName: {
                type: 'string',
                require: true,
                example: 'JOSE CARLOS DA SILVA'
              },
              cpf: {
                type: 'string',
                require: true,
                example: '12365498778'
              },
              idEmbarkation: {
                type: 'string',
                require: true,
                example: '1159387e1-a336-46b3-930f-f074e168e260'
              },
              motive: {
                type: 'string',
                require: true,
                example: 'CFS/ CAS'
              }
            },
            
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
    get: {
      summary: 'Search user by id',
      description: 'Search user by id',
      tags: ['Reservation'],
      parameters: [
      
        {
          name: 'id',
          in: 'query',
          required: true,
          type: 'string'
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
    put: {
      summary: 'Update user',
      description: 'Update user',
      tags: ['Reservation'],
      parameters: [
        {
          in: 'query',
          name: 'id',
          description: 'user id',
          required: true,
          type: 'string'
        },
        {
          name: 'name',
          in: 'query',
          required: false,
          type: 'string'
        },
        {
          name: 'cpf',
          in: 'query',
          required: false,
          description: 'CPF - eleven characters ( only number)',
          example: '12312312399',
          type: 'string'
        },
        {
          name: 'cellPhone',
          in: 'query',
          required: false,
          example: '1192345678',
          description: 'DDD with two numbers + telephone with nine numbers starting with 9',
          type: 'string'
        },
        {
          name: 'email',
          in: 'query',
          required: false ,
          example: 'teste@teste.com' ,
          type: 'string'
        },
        
      ],
      responses: {
        200: {
          description: 'Updated successfully'
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
          description: 'Internal server Error'
        }
      }
    },
    delete: {
      summary: "Remove user",
      description: "Delete user",
      tags: ["Reservation"],
      parameters: [
        {
          in: "query",
          name: "id",
          description: "User Id",
          required: true,
          type: "string",
          format: "uuid"
        },
        {
          in: 'query',
          name: 'cpf',
          required: true,
          type: 'string'
        }
      ],
      responses: {
          200: {
            description: "Deleted successfully",
          },
          400: {
            description: "Bad Request",
          },
          404: {
            description: "Not found",
          },
          500: {
            description: "Internal Server Error",
          }
        }
      }
  },
  '/reservation/cpf': {
    get: {
      summary: 'Search reservations by cpf',
      description: 'Search reservations by cpf',
      tags: ['Reservation'],
      parameters: [
      
        {
          name: 'cpf',
          in: 'query',
          required: true,
          type: 'string'
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
    }
  },
  '/reservation/idUser': {
    get: {
      summary: 'Search reservations by cpf',
      description: 'Search reservations by cpf',
      tags: ['Reservation'],
      parameters: [
      
        {
          name: 'idUser',
          in: 'query',
          required: true,
          type: 'string'
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
    }
  } 
}



