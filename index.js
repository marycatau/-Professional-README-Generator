// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [ 
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the project title?',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Please enter the description of the project:',
  },
  {
    type: 'input',
    name: 'installInstruct',
    message: 'Please enter the installation instructions:',
  },
  {
    type: 'input',
    name: 'usageInfo',
    message: 'Please enter the usage information:',
  },
  {
    type: 'input',
    name: 'contributionGuidelines',
    message: 'Please enter the contribution guidelines:',
  },
  {
    type: 'input',
    name: 'testInstructions',
    message: 'What are the test instructions of this project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What is the license used of this project?',
    choices:['BSD', 'MIT','Mozilla','None'],
  },
  {
    type: 'input',
    name: 'GitHub',
    message: 'What is your Github Username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },

]




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var markup = generateMarkdown.generateMarkdown(data);
   // console.log(markup);

    fs.writeFile(fileName, markup , (err) =>
        err ? console.log(err) : console.log('Successfully created the Readme file!')
      );




}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
       writeToFile('ReadmeSample.md',answers);
        
    });
  
    
}

// Function call to initialize app
init();
