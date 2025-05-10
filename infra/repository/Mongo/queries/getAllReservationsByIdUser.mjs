const query = (idUser) => {
  return [
    { 
      $unwind: "$seats" // Expande os assentos em documentos separados
    },
    { 
      $match: { "seats.idUser": idUser } // Filtra pelo número do cpf no assento
    },
    { 
      $sort: { "startDate":-1 } // Ordena pela startDate em ordem crescente (1) ou decrescente (-1)
    },
    { 
      $project: {
        _id: 1, // Inclui o ID da viagem
        nameRoute: 1,
        startDate: 1,
        seats: 1 // Retorna todos os dados dos assentos
      }
    }
  ];
};

export default {
  collection: 'travel',
  query
};