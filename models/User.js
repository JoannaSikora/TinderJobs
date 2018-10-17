const mongoose = require('mongoose')
const {Schema} = mongoose


const userSchema = new Schema({
  googleId: String,
  image: String,
  description: String,
  likes: [String],
  likedBy: [String]
})

mongoose.model('users', userSchema)
