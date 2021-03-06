const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('users')


passport.serializeUser((user, done)=> {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user)
  })
})


//GoogleAuth
passport.use(new GoogleStrategy({
  clientID: keys.GoogleClientID,
  clientSecret: keys.GoogleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
},
(accessToken, refreshToken, profile, done) => {
  User.findOne({googleId: profile.id})
  .then((existingUser) => {
    if (existingUser) {
      //user exists in database
      done(null, existingUser)
    } else {
      //create new user
      new User({
        googleId: profile.id,
        image: profile.image
      }).save()
      .then(user => {
        done(null, user)
      })
    }
  })
}))
