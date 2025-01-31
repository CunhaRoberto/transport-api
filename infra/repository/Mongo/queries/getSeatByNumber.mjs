const query = (idTravel, seatNumber) => {
  return [
    { 
      $match: { _id: idTravel } // Filtra a viagem pelo ID
    },
    { 
      $unwind: "$seats" // Expande os assentos em documentos separados
    },
    { 
      $match: { "seats.seatNumber": seatNumber } // Filtra pelo número do assento
    },
    { 
      $project: { _id: 0, "seats.seatNumber": 1 } // Retorna apenas o número do assento, sem _id
    }
  ];
};

export default {
  collection: 'travel',
  query
};
