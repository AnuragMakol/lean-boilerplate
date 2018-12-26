#!/usr/bin/env node
'use strict';

var prompts = require('prompts');
var shell = require('shelljs');

var response = prompts([
  {
    type: 'select',
    name: 'projectType',
    message: 'What project type you want to generate?',
    choices: [
      { title: 'NodeJS API', value: 'na' },
      { title: 'NodeJS Shopify App', value: 'nsa' },
      { title: 'Machine Learning', value: 'ml' },
      { title: 'AI', value: 'ai' }
    ]
  },
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
      { title: 'Create folder from project name', value: 'project' }
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
    var currentPath = shell.pwd();
    var projectPath = shell.pwd();
    var projectURL = '';

    if (response.projectPath == 'project') {
      shell.mkdir(response.projectName);
      projectPath = currentPath + '/' + response.projectName;
    }

    switch(response.projectType) {
      case 'na': projectURL = 'git clone https://github.com/AnuragMakol/nodejs-api-boilerplate.git .'; break;
      case 'nsa': projectURL = 'git clone https://github.com/AnuragMakol/nodejs-api-boilerplate.git .'; break;
      case 'ml': projectURL = 'git clone https://github.com/AnuragMakol/nodejs-api-boilerplate.git .'; break;
      case 'ai': projectURL = 'git clone https://github.com/AnuragMakol/nodejs-api-boilerplate.git .'; break;
    }    

    shell.cd(projectPath);
    shell.exec(projectURL, { silent: true });
    shell.sed('-i', 'nodejs-api-boilerplate', response.projectName, 'package.json');
    shell.sed('-i', 'nodejs-api-boilerplate', response.projectName, 'package-lock.json');
    shell.sed('-i', 'nodejs-api-boilerplate', response.projectName, 'bin/www');
    shell.cd(currentPath);

    console.log("\nBoilerplate Generated. Thank you for trying Lean Boilerplate.");
  } else {
    console.log("\nBoilerplate Generation Cancelled.");
  }
});