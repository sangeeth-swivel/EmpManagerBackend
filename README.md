# EmpManagerBackend

## Description

This is the backend for **Employee Manager** application built using [Express](https://expressjs.com/) framework with [Typescript](https://www.typescriptlang.org/) and connected to a [MongoDB](https://www.mongodb.com/) database using [Mongoose](https://mongoosejs.com/docs/typescript.html)

## Installation

1. ### Clone the project

- `git clone https://github.com/sangeeth-swivel/EmpManagerBackend

2. ### Install the dependencies

- Run `npm install` or `yarn install`

3. ### Start the project on development mode

- Run `yarn dev` or `npm run dev`. This will start the project in development mode.

4. ### Run the test cases

- Run `yarn test` or `npm run test` to rull all the test cases

5. ### Build the project for production

- Run `yarn build` or `npm run build` this will create a **build** folder. This is the folder to be deployed while hosting to a server.

**_NOTE:_** If you do not create a **.env** file and assign a **PORT** variable to listen, the project will start on the default **PORT: 3080** and assign a **DB_URL** variable to fetch data, the project will connect to cloub DB **mongodb+srv://sangeeth:d6ic51wl0EdsvcEg@cluster0.bfxdads.mongodb.net/?retryWrites=true&w=majority**.

## API Documentation

Visit you main domain followed by `/api-docs` to view the **API Documentation**. **eg:- http://localhost:3080/api-docs**
