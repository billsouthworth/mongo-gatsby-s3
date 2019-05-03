import React, { useState, useEffect } from 'react';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-browser-sdk';

const client = Stitch.initializeDefaultAppClient("recipeapp-basqs");

// getRecipeBody: MongoDB Stitch function for text keyed database
//
// exports = function(arg) {
//
//   let resultArray = [];
//   const records = context.services.get("mongodb-atlas").db("TootiesRecipes").collection("Recipes");
//   records.find( { $text: { $search: arg } } ).limit(10).toArray().then(c => c.map(d => resultArray.push(d.Recipe)));
//   return resultArray;
// };
//
// Notes:
//   (1) Indexing the database for text searches must be done in the CLI, not supported in Compass
//   (2) The find $text operation must be done with system mode switched on in the database

// Functional component to login anonymously to the database and search and display Recipes

const Recipes = (search) => {
  
  const [theRecipe, setTheRecipe] = useState("<div><h1>TEST</h1></div>");
  
  const getRecipes = (search) => {
    client.callFunction("getRecipeBody", search)
      .then (r => { setTheRecipe(r) });
    return theRecipe;
  }
  
  useEffect(() => {
    client.auth
    .loginWithCredential(new AnonymousCredential())
      .then(user => {
        console.log(`Logged in as anonymous user with id: ${user.id}`);
      });
   }, []);
  
  return <div dangerouslySetInnerHTML={{ __html: getRecipes(Object.values(search)) }}></div>
}

export default Recipes
