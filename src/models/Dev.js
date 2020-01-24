const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchama')

const DevSchema = new mongoose.Schema({
  nome: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dspehre'
  }
})

module.exports = mongoose.model('Dev', DevSchema)