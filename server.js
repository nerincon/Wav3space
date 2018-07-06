const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
var pgp = require('pg-promise')()
const db = pgp({database: 'wav3space', user: 'postgres'})
const session = require('express-session')
const passhelper = require('pbkdf2-helpers')

app.use(bodyParser.json())
app.use(cors())

app.use(express.static('build'))

app.use(session({
  secret: process.env.SECRET_KEY || 'dev',
  resave: true,
  saveUninitialized: false,
  cookie: {maxAge: 60000}
}))

// var open_pages = ['/', '/login', '/signup', '/logout'];

// app.use(function (req, res, next) {
//     if (req.session.bandname || open_pages.indexOf(req.path) > -1) {
//       next();
//     } else {
//       console.log('no band or venue logged-in');
//       res.redirect('/login');
//     }
//   });

app.get('/api/bands', (req, res, next) => {
  db.any(`SELECT * FROM bands`)
    .then(result => res.json(result))
    .catch(next)
})

app.post('/bands/signup', (req, res, next) => {
  console.log('got to server')
  console.log('data: ' + JSON.stringify(req.body))
  let bandname = req.body.bandname
  console.log('got to line 48')
  let bandemail = req.body.bandemail
  let password = req.body.password
  console.log('got to line 50')
  if (bandname && bandemail && password) {
    // req.session.user = bandname;
    console.log('got to line 53')
    var hash = passhelper.create_hash(password)
    var passwordStorage = passhelper.generate_storage(hash)
    db.one(`INSERT INTO bands VALUES (default, $1, $2, $3) returning *`, [bandname, bandemail, passwordStorage])
      .then(result => res.json(result))
      .catch(next)
  } else {
    res.send('Need to put all information')
  }
})

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(5000, function () {
  console.log('Listening on port 9090')
})
