
// loading the module
const express = require('express')
const app = express()
let tasks = []

// body parser for parsing JSON
var bodyParser = require('body-parser')
app.use(bodyParser.json())

// importing the movie class from movie.js file
const Task = require('./tasks')

// middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/tasks',function(req,res){

// create new task with class of Task
  //let task = new Task('eat', 'high', "6-11")


//each push inserts a dictionary in "tasks"
  // tasks.push(task)
  // tasks.push({title : 'sleep', priority : "low", isComplete : "NO"})
  // tasks.push({dateCompleted : '6-18-2109'})

   res.json(tasks)

})

app.post('/tasks',function(req,res){
    
    // get the task name
    console.log(req.body.title)
    console.log(req.body.priority)
    console.log(req.body.dateCreated)
    console.log(req.body.dateCompleted)
    console.log(req.body.isCompleted)
    // get the priority of the task
    let addTask = new Task(req.body.title,req.body.priority,req.body.dateCreated,req.body.dateCompleted,req.body.isCompleted)
    tasks.push(addTask)
    console.log(tasks)
    res.json(tasks)
    
})


app.get('/sayhello',function(req,res){
  console.log("Inside sayHello Route")
  res.send("Hello2 To you!")
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))