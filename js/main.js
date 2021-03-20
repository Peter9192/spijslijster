window.onload = event => centerPage()
window.onload = event => updateRecipes()

const search = document.getElementById("search")
search.addEventListener("input", updateRecipes)

const modal = document.getElementById("recipe-modal")
// window.onload = event => modal.style.display = "none"

function centerPage(){
    const elem = document.getElementById("mainui")
    let elemWidth = elem.scrollWidth
    let elemVisibleWidth = elem.offsetWidth
    elem.scrollLeft = (elemWidth - elemVisibleWidth) / 2
}

async function updateRecipes(){
    const response = await fetch("data/recipes.json")
    const allRecipes = await response.json()
    const recipes = allRecipes.filter(containsIngredient)
    renderRecipes(recipes)
}

function containsIngredient(recipe){
    const regex = new RegExp(`${search.value}`, 'gi')
    return recipe.ingredients.filter(ingredient => {
        return ingredient.match(regex)}).length > 0
}

function renderRecipeCard(recipe){
    return `
        <div class="recipe-card" id=${recipe.id}>
            <div class="card-header">${recipe.title}</div>
            <div class="card-body">${recipe.description}</div>
        </div>
            `
}

function renderRecipeModal(recipe){
    function listify(items) {
        return `<ul><li>${items.join("</li><li>")}</li></ul>`
    }
    return `
        <div class="modal-header">${recipe.title}</div>
        <div class="modal-body">
            <p>${recipe.description}</p>
            <h5>Ingredienten</h5>
            ${listify(recipe.ingredients)}
            <h5>Voorbereiding</h5>
            ${listify(recipe.prepping)}
            <h5>Bereiding</h5>
            ${listify(recipe.cooking)}
            <span class="modal-close">&times;</span>
        </div>
    `
}

function renderRecipes(recipes){
    const html = recipes.map(renderRecipeCard).join('')
    recipelist = document.getElementById("recipe-container").innerHTML = html

    // Update event listeners
    const cards = document.getElementsByClassName('recipe-card')
    for (const card of cards) {
        card.addEventListener("click", openModal)
    }
}

async function openModal(){
    const target = this.id
    const response = await fetch("data/recipes.json")
    const allRecipes = await response.json()
    const recipe = allRecipes.filter(recipe => recipe.id === target)[0]
    
    const html = renderRecipeModal(recipe)
    modal.innerHTML = html
    modal.style.visibility = "visible"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target != modal) {
      modal.style.visibility = "hidden";
    }
  }