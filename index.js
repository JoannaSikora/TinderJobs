const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

const app = express()

app.use(
  cookieSession({
    //an hour lasting cookie
    maxAge: 60*60*1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())


require('./routes/authRoutes')(app)

if (process.env.NODE_ENV === 'production') {
  //express serve production assets
  app.use(express.static('client/build'))
  //and express serves index.html if it doesnt recognize the route
  const path = require('path')
  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  } )
}

//DB Config
const db = require('./config/keys').mongoURI

//connects to MongoDB
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log('Connected succesfully to database'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send({hi: 'you'}))


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`))
