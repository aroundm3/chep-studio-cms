module.exports = {
  responses: {
    privateAttributes: ['_v', 'id', 'created_at'],
  },
  rest: {
    prefix: '/v1',
    defaultLimit: 100,
    maxLimit: 100,
  },
};
