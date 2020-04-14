let recipesElement = document.getElementById('allRecipes');

let jsonDatabase = [
  {
    "title" : "Chocolate Chip Cookies",
    "picture_url" : "https://cookieandkate.com/images/2017/11/amazing-chocolate-chip-cookies-recipe-2.jpg",
    "category" : "cookie",
    "ingredients" : ["flour", "baking powder", "baking soda", "salt", "chocolate chips", "brown sugar", "sugar", "coconut oil", "water"]
  },
  {
    "title" : "Banana Bread",
    "picture_url" : "https://cookieandkate.com/images/2015/11/healthy-banana-bread-1.jpg",
    "category" : "bread",
    "ingredients" : ["coconut oil", "honey", "eggs", "bananas", "milk", "baking soda", "vanilla extract", "salt", "cinnamon", "flour", "optional mix-ins"]
  },
  {
    "title" : "Coffee Chocolate Chip Blondies",
    "picture_url" : "https://cookieandkate.com/images/2017/04/healthy-chocolate-chips-blondies-recipe-1.jpg",
    "category" : "brownie",
    "ingredients" : ["flour", "baking powder", "butter", "brown sugar", "salt", "coffee", "eggs", "vanilla extract", "pecans", "chocolate chips"]
  },
  {
    "title" : "Carrot Cake",
    "picture_url" : "https://cookieandkate.com/images/2019/06/best-carrot-cake-recipe-4.jpg",
    "category" : "cake",
    "ingredients" : ["flour", "cinnamon", "ginger", "baking powder", "salt", "baking soda", "carrots", "pecans", "olive oil", "honey", "milk", "eggs", "vanilla extract", "frosting"]
  },
  {
    "title" : "Cream Cheese Frosting",
    "picture_url" : "https://cookieandkate.com/images/2019/06/cream-cheese-frosting-recipe-1-2-1.jpg",
    "category" : "frosting",
    "ingredients" : ["cream cheese", "butter", "sugar", "vanilla"]
  },
  {
    "title" : "No-Bake Greek Yoghurt Tart",
    "picture_url" : "https://cookieandkate.com/images/2018/05/greek-yogurt-tart-with-raspberries-and-strawberries.jpg",
    "category" : "tart",
    "ingredients" : ["pecans", "dates", "salt", "yoghurt", "berries", "honey"]
  }
]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}

function createElement(incomingJSON){
  let newRecipeElement = document.createElement("DIV");
  newRecipeElement.classList.add("recipe");

  let newRecipeTitle = document.createElement("H3")
  newRecipeTitle.classList.add("recipeTitle");
  newRecipeTitle.innerHTML = incomingJSON['title'];
  newRecipeElement.appendChild(newRecipeTitle);

  let newImage = document.createElement("IMG");
  newImage.classList.add("recipeImage");
  newImage.src = incomingJSON['picture_url'];
  newRecipeElement.appendChild(newImage);

  let newRecipeIngredientsList = document.createElement("UL");
  newRecipeElement.appendChild(newRecipeIngredientsList);

  for (var i = 0; i < incomingJSON['ingredients'].length; i++){
    var currentIngredientsString = incomingJSON['ingredients'][i];
    var newRecipeIngredients = document.createElement("LI");
    newRecipeIngredients.innerHTML = currentIngredientsString;
    newRecipeIngredientsList.appendChild(newRecipeIngredients);
  }

  recipesElement.appendChild(newRecipeElement);
}
