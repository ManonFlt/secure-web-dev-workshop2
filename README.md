# Workshop 2 - Save data in a database (MongoDB)

## 🌟 Goal

> Learning basics of MongoDB and how to use it with Javascript

## 👷 Prerequisites

1. Fork this repository then clone it on your computer
2. Create an account on Mongo Atlas ([sign-up](https://www.mongodb.com/cloud/atlas/register))
3. Create a database and save its credentials for later

## 🗒 What to do

> ⚠ Commit your changes after **each** instruction, following the commit message format:
> ```text
> feat(1): Initiate NPM Project
> ```

1. In this directory, initiate an NPM project
   > ```shell
   > npm init
   > ```
2. Create a file named `import-data.js`
3. Add NPM packages `mongoose` and `dotenv`
   > Mongoose is a package making mongo request easier and more secure
   > ```shell
   > npm install --save mongoose
   > npm install --save dotenv
   > ```
4. Put your database credentials in a file named `.env` like:
   > ```dotenv 
   > MONGO_URI=mongodb://username:password@host:port/database
   > ```
5. In the file `import-data.js`, create Mongoose model `Locations`
   1. Define a mongoose schema that accepts the following entity (look at the [documentation](https://mongoosejs.com/docs/guide.html#definition)):
      ```JSON
      {
        "filmType": "Long m\u00e9trage",
        "filmProducerName": "MANDARIN PRODUCTION",
        "endDate": "2020-08-21",
        "filmName": "TOUT S'EST BIEN PASSE",
        "district": "75013",
        "geolocation": {
          "coordinates": [
            2.348314535961912,
            48.83566000015182
          ],
          "type": "Point"
        },
        "sourceLocationId": "2020-404",
        "filmDirectorName": "Francois OZON",
        "address": "rue pascal, 75013 paris",
        "startDate": "2020-08-20",
        "year": "2020",
      }
      ```
   2. Validate your schema with your professor
   3. Create the model `Locations` using the schema
6. Connect to the database, using credentials stored in the `.env` file and the `dotenv` package
7. Write a function that takes an array of FilmingLocations (file `lieux-de-tournage-a-paris.json` from workshop 1) and
    imports each FilmingLocation in Mongo
8. Call the function with data from `lieux-de-tournage-a-paris.json`, populate the database
9. Write a function to query one `Location` by its ID
10. Write a function to query all `Locations` for a given `filmName`
11. Write a function to delete a `Location` by its ID
12. Write a function to add a `Location`
13. Write a function to update a `Location`
