// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from './utils/generateMarkdown.js';
// Creating a License Mapping
const licenses = {
    'MIT': {
        badge: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
        notice: 'This project is licensed under the MIT License.',
    },
    'Apache 2.0': {
        badge: '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
        notice: 'This project is licensed under the Apache 2.0 License.',
    },
    'GPL 3.0': {
        badge: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
        notice: 'This project is licensed under the GPL 3.0 License.',
    },
};
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your README file?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What will be in the description of your README file?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are your installation instructions for your README file?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your README file?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your README file:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0'], 
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your README file?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your README file?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Well Done!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions) // Use the questions array here
        .then((data) => {
            const markdownContent = generateMarkdown(data);
            writeToFile('README.md', markdownContent);
        });
}

// Function call to initialize app
init();