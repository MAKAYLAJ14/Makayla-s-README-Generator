// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from './utils/generateMarkdown.js'
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your README file?',
    'What will be in the description of your README file?',
    'What are your installation instructions for your README file?',
    'What is the usage information for your README file?',
    'What license is your README file under?',
    'What are the contribution guidelines for your README file?',
    'What are the test instructions for your README file?', 
    'What is your email address?',
    'What is your GitHub username?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Well Done!')
    );
}

// TODO: Create a function to initialize app
function init() {
inquirer
    .prompt([
    {
        type: 'input',
        name: 'title'
    },
    {
        type: 'input',
        name: 'description'
    },
    {
        type: 'input',
        name: 'installation'
    },
    {
        type: 'input',
        name: 'usage'
    },
    {
        type: 'input',
        name: 'license'
    },
    {
        type: 'input',
        name: 'contributions'
    },
    {
        type: 'input',
        name: 'test'
    },
    {
        type: 'input',
        name: 'email'
    },
    {
        type: 'input',
        name: 'username'
    },
    ])
    .then((data) => {
        const markdownContent = generateMarkdown(data);
        writeToFile('README.md', markdownContent);
    });
};
// Function call to initialize app
init();
