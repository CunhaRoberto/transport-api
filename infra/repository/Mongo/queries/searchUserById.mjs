const query = (id) => {
  const newQuery = [
    {
      $match: {
        _id : id,
        isActive: true
      }
    }
  ]

  return newQuery
}

export default {
  collection: 'user',
  query
}
