const functions = require("firebase-functions")
const express = require('express')
const cors = require('cors')
const { createStudent, getAllStudents, getStudentById, updateStudent } = require('./src/models/students')

const app = express()
app.use(cors())

// get: /students/:id
app.get('/students/:id', getStudentById)

// patch: /students/:id
app.patch('/students/:id', updateStudent)

// get: /students
app.get('/students', getAllStudents)

// post: /students 
app.post('/students', createStudent)


// delete: /students/:id



app.get('/test', (req, res) => {
  res.send('It works')
})

exports.app = functions.https.onRequest(app)
