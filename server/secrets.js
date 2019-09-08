const secrets = {
  // https:/ / stackoverflow.com / questions / 43162897 / how - to - connect - to - mongodb - using - docker - compose
  dbUri: process.env.DB_URI || 'mongodb://localhost:27017',
};

const getSecret = (key) => secrets[key];

module.exports = { getSecret };
