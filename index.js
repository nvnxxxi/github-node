const inquirer = require("inquirer");
const fs = require ("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your favorite color?",
      },
    


]);
};

function generateHTML(answers) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
    <title>Document</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Hi! My name is ${answers.name}</h1>
            <p class="lead">I am from ${answers.location}.</p>
            <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
            <ul class="list-group">
                <li class="list-group-item">My GitHub Username is ${answers.github}</li>
                
</ul>                
</div>
</div>
    
</body>
</html>`;
};

promptUser()
  .then(function(answers) {
      const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
      })
    .then(function(){
        console.log("Successfully wrote to index.html");
    })
    .catch(function(err){
        console.log(err);

    });