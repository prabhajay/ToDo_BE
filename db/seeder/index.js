require('dotenv').config()
const mongoose = require('mongoose')
const seedToDos = require('./seedData.json')
const ToDoModel = require('../models/ToDo.model')
const { uri } = require('../index')

const seedDB = async () => {
  try {
    // connect
    await mongoose.connect(uri)
    console.info('mongodb connection opened')

    // seed
    if (process.argv[2] === '--override') {
      await ToDoModel.deleteMany({})
    }
    await ToDoModel.insertMany(seedToDos)

    // assert & feedback
    await ToDoModel.find().exec()
    console.info('data seeding completed')
  } catch (err) {
    // log errors
    console.error('mongodb seed script error: ', err.message)
  } finally {
    // disconnect
    await mongoose.connection.close()
    console.info('mongodb connection closed')
  }
}

seedDB()