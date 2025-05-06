const query = () => {
  const now = new Date();
  const newQuery = [
    {
      $match: {
        startDate: { $gt: now }
      }
    },
    {
      $sort: { startDate: -1 } 
    }
  ];

  return newQuery;
}

export default {
  collection: 'travel',
  query
}