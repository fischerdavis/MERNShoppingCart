# MERN Shopping Cart 🛒 

The MERN Shopping cart is a mobile and web friendly MERN Stack app that is an e-commerce app that allows users to view a list of items, view item details and add items their cart. Items added to their cart will be persisted in the users browser in the case they don't make an immediate purchase and come back on a later date.

## How to run:
1. First you will need to make a new cluster on MongoDB.
2. Next you will need to make a .env file in the root of the project with the two parameters `PORT` and `MONGO_URI`.
3. The PORT value cannot be 3000 as this is used by the Web APP.
4. For the first run you will need to run `npm run data:import` which will fill the DB.
5. Finally use `npm run dev` which will start both the server and the web application.

## Things I learned
* Thunk for making async requests.
* Creating a sidedrawer for mobile friendly mode.
