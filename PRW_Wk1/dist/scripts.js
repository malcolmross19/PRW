'use strict';

/**
 * Created by malcolmross on 11/29/17.
 */

var recipeContent = '';

$('#rating input').change(function () {
    var $radio = $(this);
    $('.rating .selected').removeClass('selected');
    $radio.closest('label').addClass('selected');
});

// Validate form
function validate() {
    if (document.recipeForm.recipeName.value == "") {
        alert("Please enter a recipe name!");
        document.recipeForm.recipeName.focus();
        return false;
    }

    if (document.recipeForm.recipeDescription.value == "") {
        alert("Please enter a recipe description!");
        document.recipeForm.recipeDescription.focus();
        return false;
    }

    if (document.recipeForm.recipeCategory.value == "") {
        alert("Please enter a recipe category!");
        document.recipeForm.recipeCategory.focus();
        return false;
    }

    if (!isChecked()) {
        alert("Please choose a rating for your recipe!");
        return false;
    }

    return true;
}

function isChecked() {
    var input = document.getElementsByTagName('input');

    for (var i = 0; i < input.length; i++) {
        if (input[i].getAttribute("class") == "rating") {
            if (input[i].type == 'radio' && input[i].checked) {
                return true;
            }
        }
    }
}

window.addEventListener('load', function () {
    var url = "https://api.myjson.com/bins/gg3eh";

    var request = new XMLHttpRequest();

    request.overrideMimeType('application/json');
    request.open('GET', url, false);

    request.onreadystatechange = function () {
        var responseObject = JSON.parse(request.responseText);

        for (var i = 0; i < responseObject.recipes.length; i++) {
            recipeContent += '<article class="recipe">';
            recipeContent += '<h4 class="recipeHeader">' + responseObject.recipes[i].title + '</h4>';
            recipeContent += '<p>' + responseObject.recipes[i].description + '</p>';
            recipeContent += '<p>Category: ' + responseObject.recipes[i].category + '</p>';
            recipeContent += '<p>Star Rating: ' + Math.round(responseObject.recipes[i].starRating) + '</p>';
            recipeContent += '<i class="fa fa-trash" onclick="assignDelete(this);" aria-hidden="true"></i>';
            recipeContent += '</article>';
        }

        if (localStorage.getItem('newRecipes') != null || localStorage.getItem('newRecipes') != "") {
            document.querySelector('#newRecipes').innerHTML = localStorage.getItem('newRecipes');
        }
    };

    request.send();

    var savedRecipes = document.querySelector('#saved');

    if (recipeContent) {
        savedRecipes.innerHTML = recipeContent;
    }
}, false);

function addRecipe() {
    // Add form info to the list of recipes
    $("#newRecipes").append("<article class='recipe'><h4 class='recipeHeader'>" + $("#recipeName").val() + "</h4>" + "<br/>" + "<p>" + $("#recipeDescription").val() + "</p>" + "<br/>" + "<p>Category: " + $("#recipeCategory").val() + "</p>" + "<br/>" + "<p>Star Rating: " + $("input[name='rating']:checked").val() + "</p>" + '<i class="fa fa-trash" onclick="assignDelete(this);" aria-hidden="true"></i></article>');

    localStorage.setItem('newRecipes', document.querySelector('#newRecipes').innerHTML);
}

function formClear() {
    $("#recipeName").val("");
    $("#recipeDescription").val("");
    $("#recipeCategory").val("");
    $("#rating").checked = false;
}

function update() {
    if (validate()) {
        if ($("#recipeName, #recipeDescription, #recipeCategory, #rating").val() != null && $("#recipeName, #recipeDescription, #recipeCategory, #rating").val() != "") {
            addRecipe();
            formClear();
            $("#recipeName").focus();
        }
    }
}

// Delete function
function assignDelete(recipe) {
    $(recipe).parents("article").remove();

    localStorage.setItem('newRecipes', document.querySelector('#newRecipes').innerHTML);
}