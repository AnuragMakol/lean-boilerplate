# Lean Boilerplate

A simple cli to scaffold your Node JS app fast for REST API's, Shopify Apps, Machine Learning and AI. 

## Installation 

```bash
npm install -g lean-boilerplate
```

## Getting Started

After installing the package as a global executable. You will be able to use **"Boilerplate"** command to generate new boilerplate.

```bash
$~ boilerplate
```

## Basic Project Structure

A basic User Controller and Model has already been made with it collection schema for mongodb with some examples of the validations.

The project uses lang files for the storage of static data and mail structures to be used in the API.

JsonWebToken and Nodemailer integration has also been made using the helpers file integration.

```bash
├── app
│   ├── controllers
│   │   └── UserController.js
│   ├── controllers.js
│   ├── helpers
│   │   ├── jwt.js
│   │   └── mailer.js
│   ├── helpers.js
│   ├── lang
│   │   └── user.js
│   ├── lang.js
│   ├── models
│   │   ├── users.js
│   │   └── validator
│   │       └── schemaValidator.js
│   └── models.js
├── app.js
├── bin
│   └── www
├── package.json
├── package-lock.json
├── public
│   └── css
│       └── style.css
└── routes.js
```

## Preinstalled Packages

- axios
- cors*
- dotenv*
- jsonwebtoken
- lodash
- mongodb*
- mongoose*
- mongoose-beautiful-unique-validation*
- mongoose-validator*
- multer
- nodemailer*
- randomstring

(*) Indicates that the package has been integrated with helpers files for plug and play usage. 

### Author 

Anurag Makol