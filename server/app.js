const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


let id = 2;
const todoList = [{
  id: 1,
  test: '할일',
  done: false
}];

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/api/todo', (req, res) => {
  res.json(todoList)
})

app.post('/api/todo', (req, res) => {
  const { test, done } = req.body
  todoList.push({
    id: id++,
    test,
    done,
  });
  return res.send('success')
})

app.listen(3000, () => {
  console.log('server');
})
