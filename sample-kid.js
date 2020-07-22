const jwt = require('jsonwebtoken')

// キーを後から更新できるよう kid を指定しておく
const SECRETS = {
  "s20200722": 'This is named secret!'
}
const KID = "s20200722"


// sign
const claim = {
  'iss': "test-iss",
  'aud': "",
  'sub': "test-sub",
}
const token = jwt.sign(claim, SECRETS[KID], {keyid:KID, expiresIn: '20y'})
console.log("# jwt.sign")
console.log(token)

// verify
console.log("# jwt.verify")
jwt.verify(token,
  (header, cb) => {
    console.log({header})
    cb(null, SECRETS[header.kid])
  },
  (err, decoded) => {
    console.log({err, decoded})
  }
)
