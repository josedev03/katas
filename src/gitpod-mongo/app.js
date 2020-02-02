const express = require('express');
const app = express();
const Task = require('./model/task.model')

// settings
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res)=>{
  const tasks = await Task.find();
  res.render('index', {tasks: tasks});
})

app.post('/create', async (req, res) => {
  const newTask = new Task({ 
    task: req.body.task,
    description: req.body.description 
  })
  newTask.save()
  console.log(req.body)
  res.redirect('/')
})

app.delete('/delete', async (req, res)=>{
  try {
    await Task.deleteOne({_id: req.body.taskid})
    res.status(200).json({
      data: 'usuario eliminado',
      erros: null
    })
  } catch (error) {
    console.log(`Error al eliminar: ${error}`)
    res.status(500).json({
      data: '',
      errors: error
    })
  }
})

app.use(express.static(__dirname + '/public'))

module.exports = app;