#!/usr/bin/env node
'use strict';

var prompts = require('prompts');
var shell = require('shelljs');

prompts([
  {
    type: 'text',
    name: 'projectName',
    message: 'What will be your project name?',
    validate: function validate(projectName) {
      var regex = new RegExp('^[a-z\-]+$');
      return (regex.test(projectName)) ? true : false;
    }
  },
  {
    type: 'select',
    name: 'projectPath',
    message: 'Where to generate the project?',
    choices: [
      { title: 'Current folder', value: 'current' },
      { title: 'Create folder from project name', value: 'create' }
    ]
  },
  {
    type: 'toggle',
    name: 'projectConfirm',
    message: 'Are you sure you want proceed?',
    initial: true,
    active: 'yes',
    inactive: 'no'
  },
]).then(function (response) {
  if (response.projectConfirm) {
    
    // Initialize Current Path
    var currentPath = shell.pwd();
    var projectPath = shell.pwd();
    var projectURL = '';

    // Check type of project
    if (response.projectPath == 'create') {
      shell.mkdir(response.projectName);
      projectPath = currentPath + '/' + response.projectName;
    }

    // Move to project path
    shell.cd(projectPath);

    // Pull and Process the project
    projectURL = 'git clone https://github.com/AnuragMakol/nodejs-api-boilerplate.git .';
    shell.exec(projectURL, { silent: true });
    shell.sed('-i', 'nodejs-api-boilerplate', response.projectName, ['package.json', 'package-lock.json', 'bin/www']);

    // Move back to the path where the input was made
    shell.cd(currentPath);

    // Show Greetings
    console.log("\nNodeJS API Boilerplate Generated.");
    console.log("\nThank you for trying Lean Boilerplate.");
  } else {
    console.log("\nBoilerplate Generation Cancelled.");
  }
});