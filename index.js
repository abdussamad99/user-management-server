import express from 'express'
const app = express()
const PORT = process.env.PORT || 5000

const user = [
    {"name": "John","age": 30,"city": "New York","email": "john@gmail.com"},
    {"name": "jabed","age": 32,"city": "New York","email": "jabed@gmail.com"},
    {"name": "hasem","age": 31,"city": "New York","email": "hasem@gmail.com"},
    {"name": "Jakir","age": 30,"city": "New York","email": "jakir@gmail.com"},
    {"name": "hasmot","age": 29,"city": "New York","email": "hasmot@gmail.com"},
]
app.get("/user", (req, res) => {
    res.send(user)
})
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)

})