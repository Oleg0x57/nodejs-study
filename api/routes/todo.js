const {Router} = require('express')
const Todo = require('../models/todo')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll()
    res.status(200).json(todos)
    console.log('all', todos)
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

router.post('/', async (req, res) => {
  console.log(req, req.body)
  try {
    const todo = await Todo.create({
      title: req.body.title,
      done: false
    })
    console.log('new', todo)
    res.status(201).json({todo})
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(+req.params.id)
    todo.done = req.body.done
    await todo.save()
    res.status(200).json({todo})
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const todos = await Todo.findAll({
      where: {
        id: +req.params.id
      }
    })

    await todos[0].destroy()

    res.status(204).json({})
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

module.exports  = router