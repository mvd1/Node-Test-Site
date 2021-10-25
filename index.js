const express = require('express'); 
const path = require('path'); 
const ejs = require('ejs'); 

const app = express(); 
const port = 5000; 

app.set('view engine', 'ejs'); 
app.use(express.static('public')); 

app.listen(port, () => {
    console.log(`App listening on port ${port}`); 
});

app.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/index.html')); 
    res.render('index'); 
});

app.get('/about', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/about.html')); 
    res.render('about'); 
});

app.get('/contact', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html')); 
    res.render('contact'); 
});

app.get('/post', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/post.html')); 
    res.render('post'); 
});