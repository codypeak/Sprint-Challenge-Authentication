const axios = require('axios');
const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig.js');

const { authenticate, generateToken } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  const creds = req.body;
  const hash = bcrypt.hashSync(creds.password, 4);
  creds.password = hash;
  db('users')
    .insert(creds)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => res.status(400).json({ message: 'Registration failed' }))
};

function login(req, res) {
  // implement user login
  const creds = req.body;
  db('users')
    .where({ username: creds.username})
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: 'Welcome!', token });
      } else {
        res.status(401).json({ message: 'You shall not pass!' });
      }
    })
    .catch(err => res.status(400).json({ message: 'Make like a tree and leave' }));
};

function getJokes(req, res) {
  axios
    .get(
      //'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
      'https://safe-falls-22549.herokuapp.com/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
