//  $(document).on("click", ".recipeBtn", function () {


//     function getRecipe() {
        
//         var apiKey = "d8e8948c4d70b8c78827596832285f57";
//         var appId = "ef5218c7";
//         var appId2 = "5b1562b5";
//         var apiKey2 = "bbb4077c8c6cf7f2526a1bef3aef09c1";
//         var ingredient = document.getElementById("ingredientSearch").value;
//         var dishName = document.getElementById("dishName").value;
//         var healthLabel = document.getElementById("healthLabel").value;
//         var calorieMin = document.getElementById("calorieMin").value;
//         var calorieMax = document.getElementById("calorieMax").value;
       
//         console.log("what");

//         var url = `https://api.edamam.com/search?app_id=${appId2}&app_key=${apiKey2}&label=${dishName}&q=${ingredient}&healthLabels=${healthLabel}&calories=${calorieMin}-${calorieMax}&count=3&from=0&to=4`;
//         $.ajax({
//             url: url,
//             method: "GET",
//         }).then(function (data) {
//             //console.log(data.hits[0].recipe.label);
//             $('#recipeTitle').empty();
//             $('#recipeImg').empty();

//             showRecipe(data);
//         });
//     }

//     function showRecipe(data) {

//         var lotto = Math.floor(Math.random() * 5);
//         var recipeImg = data.hits[lotto].recipe.image;
//         var recipeLink = data.hits[lotto].recipe.shareAs;

//         $('#recipeTitle').text(JSON.stringify(data.hits[lotto].recipe.label));
//         $('#recipeImg').append(`<a href="${recipeLink}"><img src=${recipeImg}></a>`);
//         // $('#recipeIngredients').text(JSON.stringify(data.hits[lotto].recipe.ingredientLines));

//         console.log(recipeImg);
//         console.log(data);
//     }
//     getRecipe();
// });