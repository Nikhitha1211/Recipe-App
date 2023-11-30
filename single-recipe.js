import { singleRecipe } from "./singleCuisine.js";
//import { createElement } from "/index.js";

const cardId = localStorage.getItem("id");

const SINGLERECIPEURL = `https://recipeapi.prakashsakari.repl.co/api/recipes/${cardId}`;

const singleRecipeContainer = document.querySelector(".main-container")

const createElementForCuisine = (element) => document.createElement(element);

const getData = async (URL) => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const singleRecipeData = await getData(SINGLERECIPEURL);
console.log(singleRecipeData);

singleRecipe(singleRecipeData, singleRecipeContainer, createElementForCuisine)

