const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3300;
const crypto = require('crypto');
const bodyParser = require("body-parser");

const base64URLEncode = (str) => {
  return str.toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
}
const sha256 = (buffer) => {
  return crypto.createHash('sha256').update(buffer).digest();
}
app.use(bodyParser());


// Serves index.html file 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

// Generates a verifier
app.post('/verifier', (req, res) => {
  res.json({ verifier: base64URLEncode(crypto.randomBytes(32)) })
})

// Generates a challenge based on the verifier sent.
app.post('/challenger', (req, res) => {
  if (!req.body.verifier) {
    res.json({ error: "No verifier specified" })
  }

  res.json({ challenge: base64URLEncode(sha256(req.body.verifier)) })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))