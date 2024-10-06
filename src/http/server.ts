import express from "express"

const app = express()

app.get('/', (req, res) => {
  res.send({ message: 'ok'})
})

app.listen({ port: 3000, host: '0.0.0.0' })
