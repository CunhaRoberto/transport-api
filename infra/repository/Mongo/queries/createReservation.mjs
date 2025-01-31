const query = (reservationDto) => {

  // Pipeline de agregação
  const filter = { _id: reservationDto.idTravel  };

  // Query para adicionar um novo assento ao array 'seats'
  const update = {
    $push: {
      seats: {  
        seatNumber: reservationDto.seatNumber,
        passengerId: reservationDto.passengerId,
        passengerName: reservationDto.passengerName
      }
    }
  };


  return query;
};

export default {
  collection: 'travel',
  query
};
