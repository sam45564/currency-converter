# currency-converter
GraphQL Nodejs service to convert currencies

---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement. Alongwith this, you will need apollo-server for GraphQL services.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.17.0

    $ npm --version
    8.19.2

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install

## Setting up database

Install MySQL server on your machine ane make sure that it is running without any errors. Once that is done, create a database with name `currency_converter`. 
After that, run the following command to apply migrations:

    $ npm run migrate

## Running the project

    $ npm run start

## Running the project with `nodemon`

    $ npm run dev
    
---

NOTE: This project doens't include tests. Also, the performance can be improved by caching the responses using Redis or similar tool.
