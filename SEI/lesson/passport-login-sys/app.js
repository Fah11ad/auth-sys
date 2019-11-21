const express  = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const app = express()
const passport = require('passport') //()
const flash = require('connect-flash');
const session = require('express-session');

// Passport Config (6-auth)
require('./config/passport')(passport);

// DB config
const db = require('./config/keys').MongoURI

//Connect to Mongo
mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('MongoDB Connected ...')) // because it's promise we use then
.catch((err)=> console.log(err))

//Ejs
// app.use(expressLayouts)
app.set('view engine', 'ejs')

//Bodyparser
app.use(express.urlencoded({ extended: false })) // to be able to see body

// Express session (5-auth)
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

  //Passport middleware (6-auth)
  app.use(passport.initialize())
  app.use(passport.session())

// Connect flash
app.use(flash())  

// Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 5300

app.listen(PORT, console.log(`Server started on port ${PORT}`)
)