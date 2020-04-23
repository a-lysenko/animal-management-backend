# animal-management-backend

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## Animal Management (Back End)
This application provides a front end part of the Animal Management System.

Current implementation contains configured datasource against PostgresSQL DB deployed on AWS. 

##Steps to start

0. clone this repository
1. **npm install**
2. Prepare the app by running **npm run build**
3. Skip this step if you run against already existing Database. Otherwise, execute
**npm run migrate**
4. **npm start** 

Meet the server running. Open http://localhost:3000 and find the available endpoints(*1)
Open http://localhost:3000/owners to get some data from DB

(*1) The API of this back end implementation is being developed. Most of endpoints are on the level of documentation (if you have already started the app, it's right here http://localhost:3000/explorer). However, it doesn't correspond to the API consumed by FE App.

The port `3000` the app is running is different to the consumed by the front end part of Animal Management System (you can find it here https://github.com/a-lysenko/animal-management-fe)

The back end that provides consistent API is here https://github.com/a-lysenko/animal-management-be. It is written under `Express` with full API and models under `pg` against the same instance of PostgreSQL DB.