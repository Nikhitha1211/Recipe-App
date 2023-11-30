export const singleRecipe = (singleRecipe, parentContainer, createElement) => {
    console.log(singleRecipe)
    for (let recipe of singleRecipe) {

        /** Card Parent Container */
        const cardContainer = createElement("div");
        cardContainer.classList.add("recipe-card", "shadow");

        /** Card Image Container */
        const cardImageContainer = createElement("div");
        cardImageContainer.classList.add("card-image-container");

        /** Card Image Element */
        const imageElement = createElement("img");
        imageElement.classList.add("card-image");
        imageElement.setAttribute("src", recipe["image-url"]);
        imageElement.setAttribute("alt", recipe.TranslatedRecipeName);
        imageElement.setAttribute("data-id", recipe.ID);
        cardImageContainer.appendChild(imageElement);

        cardContainer.appendChild(cardImageContainer);

        /** Card Details Container */
        const cardDetailsContainer = createElement("div");
        cardDetailsContainer.classList.add("recipe-details");

        /** Card Title Container */
        const cardTitleElement = createElement("div");
        cardTitleElement.classList.add("title");
        cardTitleElement.innerText = recipe.TranslatedRecipeName;
        cardDetailsContainer.appendChild(cardTitleElement);

        /** Card Rating & Duration Container */
        const cardRatingAndLength = createElement("div");
        cardRatingAndLength.classList.add("ratings");

        /** Rating Element */
        const cardRatingContainer = createElement("div");

        const ratingValueElement = createElement("span");
        ratingValueElement.innerText = `Cuisine: ${recipe.Cuisine}`;
        cardRatingContainer.appendChild(ratingValueElement);

        cardRatingAndLength.appendChild(cardRatingContainer);

        /** Duration */
        const lengthElement = createElement("div");
        lengthElement.classList.add("star-rating");

        const ratingIconElement = createElement("span");
        ratingIconElement.classList.add("time", "material-icons-outlined");
        ratingIconElement.innerText = "timer";
        lengthElement.appendChild(ratingIconElement);
        const duration = createElement("span");
        duration.innerText = `${recipe.TotalTimeInMins} mins`;
        lengthElement.appendChild(duration);
        // lengthElement.innerText = `${recipe.TotalTimeInMins} mins`;
        cardRatingAndLength.appendChild(lengthElement);

        cardDetailsContainer.appendChild(cardRatingAndLength);

        cardContainer.appendChild(cardDetailsContainer);

        const ingredientsContainer = createElement("div")
        // const ingredients = createElement("p")
        // ingredients.innerText = recipe.TranslatedIngredients;
        const textEle = createElement("p")
        textEle.innerText = "Ingredients:";


        const listContainer = createElement("ol")
        listContainer.classList.add("ingredients-steps")

        recipe.TranslatedIngredients.split(',').forEach(step => {
            const listItem = document.createElement('li');
            listItem.textContent = step;
            listItem.classList.add('recipe-step');
            listContainer.appendChild(listItem);
        });

        ingredientsContainer.classList.add("ingredients-container")

        ingredientsContainer.appendChild(textEle)
        ingredientsContainer.appendChild(listContainer)

        const instructionsContainer = createElement("div")
        instructionsContainer.classList.add("instructions-container")

        const text = createElement("p")
        text.innerText = "Instructions:";

        const paragraph = createElement("p")
        paragraph.innerText = recipe.TranslatedInstructions;

        instructionsContainer.appendChild(text)
        instructionsContainer.appendChild(paragraph)

        const combinedContainer = createElement("div")
        combinedContainer.classList.add("combined-container")

        combinedContainer.appendChild(cardContainer)
        combinedContainer.appendChild(ingredientsContainer)

        //const mainContainer = createElement("div");


        parentContainer.appendChild(combinedContainer)
        parentContainer.appendChild(instructionsContainer)

    }
};