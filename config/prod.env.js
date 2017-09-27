require('dotenv').config()

module.exports = {
  NODE_ENV: '"production"',
  MOVIES_URL: `"${process.env.MOVIES_URL}"`,
  API_KEY: `"${process.env.API_KEY}"`
}
