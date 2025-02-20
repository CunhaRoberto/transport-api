const query = () => {
  const now = new Date();
  const newQuery = [
    {
      $match: {       
        startDate: { $gt: now }
      }
    }
  ]

  return newQuery
}

export default {
  collection: 'travel',
  query
}
