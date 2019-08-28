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

## Boilerplate Structure

A basic User Controller and Model has already been made with it collection schema for mongodb with some examples of the validations.

The boilerplate uses lang files for the storage of static data and mail structures to be used in the API.

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
│   │   ├── user.js
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
- jsonwebtoken*
- lodash
- mongodb*
- mongoose*
- mongoose-beautiful-unique-validation*
- mongoose-validator*
- multer
- nodemailer (*)
- randomstring
- express-swagger-generator (*)(dev)
- pm2

(*) Indicates that the package has been integrated with helpers files for plug and play usage. 
(dev) Indicates its a Developer Dependency

## Environment Variables

A predefined .env.example file is present in the root of the boilerplate. 

The variables are being used throughout the boilerplate and new variables can be added to it and can be accessed anywhere in the boilerplate using **_process.env.VARIABLE_NAME_**

Use the command below to copy the .env.example to a new .env file which the boilerplate will use.

```bash
cp .env.example .env
```

#### Contents of the .env

```txt
MONGO_URL=mongodb://localhost:27017/database-name

SWAGGER_TITLE=Boilerplate API
SWAGGER_DESCRIPTION=Boilerplate - API Sandbox
SWAGGER_VERSION=1.0.1
SWAGGER_API_HOST=localhost:3000

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SSL=tls
SMTP_USER=
SMTP_PASS=

JWT_KEY=tHisAvErYsECuReKeY
JWT_AUDIENCE=NoDeGeNeRaToR
JWT_EXPIRY=10h

PORT=3000
```

## Swagger Integration

Swagger has been integrated as a middleware in the boilerplate. 

The documentation will be available at 

```
http://SWAGGER_API_HOST/api-docs
```

Documentation will be generated automatically by making comments over the methods in the controller files.

Example can be found in **_app > controllers > UserController.js_**

## PM2 Integration

Now you can start the PM2 Process Manager and listin to your code changes 

```bash
npm install -g pm2
pm2 start
```

You can use the above script to run your code through the pm2 process manager.

## Author 

Anurag Makol
