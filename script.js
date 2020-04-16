let recipesElement = document.getElementById('allRecipes');

let jsonDatabase = [
  {
    "title" : "Chocolate Chip Cookies",
    "picture_url" : "https://cookieandkate.com/images/2017/11/amazing-chocolate-chip-cookies-recipe-2.jpg",
    "category" : "Ingredients: ",
    "ingredients" : ["2 cups white whole wheat flour or regular whole wheat flour", "1 teaspoon baking powder", "¾ teaspoon baking soda", "½ teaspoon fine sea salt", "1 ¼ cups chocolate chips", "⅔ cup lightly packed coconut sugar or ½ cup packed brown sugar", "½ cup sugar", "½ cup plus 1 tablespoon melted coconut oil or extra-virgin olive oil", "¼ cup plus 1 tablespoon water", "Flaky sea salt for sprinkling"]
  },
  {
    "title" : "Banana Bread",
    "picture_url" : "https://cookieandkate.com/images/2015/11/healthy-banana-bread-1.jpg",
    "category" : "Ingredients: ",
    "ingredients" : ["⅓ cup melted coconut oil or extra-virgin olive oil or high quality vegetable oil", "½ cup honey or maple syrup", "2 eggs", "1 cup mashed ripe bananas", "¼ cup milk of choice or water", "1 teaspoon baking soda", "1 teaspoon vanilla extract", "½ teaspoon salt", "½ teaspoon ground cinnamon", "1 ¾ cups white whole wheat flour", "Optional: ½ cup mix-ins like chopped walnuts or pecans, chocolate chips, raisins, chopped dried fruit, etc."]
  },
  {
    "title" : "Coffee Chocolate Chip Blondies",
    "picture_url" : "https://cookieandkate.com/images/2017/04/healthy-chocolate-chips-blondies-recipe-1.jpg",
    "category" : "Ingredients: ",
    "ingredients" : ["1 ½ cups white whole wheat flour or regular whole wheat flour", "1 ½ teaspoons baking powder", "12 tablespoons (1 ½ sticks) unsalted butter", "2 cups packed coconut sugar, or 1 ½ cups packed brown sugar", "¾ teaspoon salt", "2 tablespoons strong coffee, room temperature", "1 egg", "1 ½ tablespoons vanilla extract", "¾ cup chopped pecans", "¾ cup bittersweet or semisweet chocolate chips"]
  },
  {
    "title" : "Carrot Cake",
    "picture_url" : "https://cookieandkate.com/images/2019/06/best-carrot-cake-recipe-4.jpg",
    "category" : "Ingredients: ",
    "ingredients" : ["2 cups whole wheat pastry flour or all-purpose flour", "1 ½ cups white whole wheat flour or regular whole wheat flour", "1 tablespoon ground cinnamon", "2 teaspoons ground ginger", "2 teaspoons baking powder", "1 ½ teaspoons fine sea salt", "1 teaspoon baking soda", "1 ½ pounds peeled and grated carrots", "1 cup raw pecan or walnut halves", "¾ cup mild extra-virgin olive oil", "1 ¼ cups maple syrup or honey", "1 cup milk of choice", "4 eggs, preferably at room temperature", "2 teaspoons vanilla extract", "2 batches cream cheese frosting"]
  },
  {
    "title" : "Cream Cheese Frosting",
    "picture_url" : "https://cookieandkate.com/images/2019/06/cream-cheese-frosting-recipe-1-2-1.jpg",
    "category" : "Ingredients: ",
    "ingredients" : ["8 ounces cream cheese, at room temperature", "2 tablespoons unsalted butter, at room temperature", "1 ¼ cups powdered sugar", "1 teaspoon vanilla extract"]
  },
  {
    "title" : "No-Bake Greek Yoghurt Tart",
    "picture_url" : "https://cookieandkate.com/images/2018/05/greek-yogurt-tart-with-raspberries-and-strawberries.jpg",
    "category" : "Ingredients: ",
    "ingredients" : ["2 cups raw pecans", "10 Medjool dates, soaked in warm water for 10 minutes and pitted", "¼ teaspoon fine sea salt", "1 ½ cups plain Greek yogurt", "½ cup raspberries or blueberries", "4 strawberries, hulled and thinly sliced", "2 tablespoons honey"]
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

  let ingredientHeading = document.createElement("H4")
  ingredientHeading.classList.add("ingredientTitle");
  ingredientHeading.innerHTML = incomingJSON['category'];
  newRecipeElement.appendChild(ingredientHeading);

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
