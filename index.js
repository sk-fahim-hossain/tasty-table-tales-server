const express = require('express')
const cors = require('cors')
const port = 5000;
const app = express()
app.use(cors())
const chefs = require('./chefs.json')
const recipes = require('./recipes.json')

app.get('/', (req,res) =>{
    res.send('sending from server')
})
app.get('/chefs', (req,res) =>{
    res.send(chefs)
})
app.get('chefs/:id', (req,res) =>{
    const id = req.params.id
    res.send(recipes)
})
app.get('/recipes', (req,res) =>{
    res.send(recipes)
})

app.get('recipes/:id', (req,res) =>{
    const id = req.params.id;
    const calledRecipes = recipes.find(recipe => recipe.id == id)
    console.log(id)
    res.send(calledRecipes)
})

    
app.listen(port, ()=> {
  console.log('CORS-enabled web server listening on port 80', port)
})