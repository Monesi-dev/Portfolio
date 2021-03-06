const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.static("src"));
app.use(cors());
app.set('view engine', 'ejs');
app.set('views', './src')

app.get('/', (req, res) => {
   res.render('index');
})
app.get('/about', (req, res) => {
   res.render('about');	
})
app.get('/resume', (req, res) => {
   res.render('resume');	
})
app.get('/projects', (req, res) => {
   res.render('projects');	
})

app.listen("4000", () => console.log("up and running"));
