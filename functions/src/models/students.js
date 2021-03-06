const { dbConnection } = require('../db-config')

exports.createStudent = async (req, res) => {
    const student = req.body
    
    const query = `INSERT INTO students SET ?`

    try{
        const [results, fields] = await dbConnection.promise().query(query, student)

        student.id = results.insertId
        res.status(201).send(student)

    } catch (error) {
        res.status(500).send(error)
    }
    

}

exports.getAllStudents = async (req, res) => {
    
    const query = `SELECT * FROM students`

    try{
        const [results, fields] = await dbConnection.promise().query(query)
        
        res.send(results)

    } catch (error) {
        res.status(500).send(error)
    }
    

}

exports.getStudentById = async (req, res) => {
    const query = `SELECT *
                   FROM students
                   WHERE id = ?`

    const { id } = req.params

    try{
        const [student, fields] = await dbConnection.promise().query(query, id)
        res.send(student)

    } catch(error){
        res.status(500).send(error)
    }

}

exports.updateStudent = async (req, res) => {
    const updateStudent = req.body
    const { id } = req.params

    let query = `UPDATE students SET `

    Object.entries(updateStudent).forEach(entry => {
        const [key, value] = entry
        query += `${key} = "${value}",`
    })

    query = query.substring(0, query.length -1)

    query += ` WHERE id = ?`
    
    try{
        const [result, field] = await dbConnection.promise().query(query, id)
        res.status(200).send(result)
    
    }catch(error){
       
        res.status(500).send(error)
    }

}

