import React from "react"
import SingleRecipe from "./SingleRecipe"

const Recipes = ({ arr }) => {
  return (
    <section className="featured-recipes">
      {arr.map((recipe, i) => {
        const {
          recipeTitle,
          recipeOverview,
          recipeAuthor,
          articleLink,
        } = recipe.node.recipes
        const { srcSet, altText } = recipe.node.recipes.mainThumbnail
        return (
          <SingleRecipe
            key={i}
            recipeTitle={recipeTitle}
            recipeOverview={recipeOverview}
            recipeAuthor={recipeAuthor}
            articleLink={articleLink}
            altText={altText}
            srcSet={srcSet}
          />
        )
      })}
    </section>
  )
}

export default Recipes
