```
$ node sample-kid.js
# jwt.sign
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InMyMDIwMDcyMiJ9.eyJpc3MiOiJ0ZXN0LWlzcyIsImF1ZCI6IiIsInN1YiI6InRlc3Qtc3ViIiwiaWF0IjoxNTk1Mzk2MTE4LCJleHAiOjIyMjY1NDgxMTh9.9L-TnO3dPZa7OpUkt8pCne3FtH4hfN8RifM2n8Ctt5Y
# jwt.verify
{ header: { alg: 'HS256', typ: 'JWT', kid: 's20200722' } }
{
  err: null,
  decoded: {
    iss: 'test-iss',
    aud: '',
    sub: 'test-sub',
    iat: 1595396118,
    exp: 2226548118
  }
}
```
