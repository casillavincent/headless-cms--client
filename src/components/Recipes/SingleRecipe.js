import React from "react"

const SingleRecipe = ({
  recipeTitle,
  recipeOverview,
  recipeAuthor,
  articleLink,
  altText,
  srcSet,
}) => {
  return (
    <article className="single-item">
      <img srcSet={srcSet} alt={altText} width="200" />

      <div className="text-content">
        <h2>{recipeTitle}</h2>
        <p className="author">{recipeAuthor}</p>
        <p className="excerpt">
          {recipeOverview}
          <span>
            <a href={articleLink} className="recipe-cta--desktop">
              View the recipe here
            </a>
          </span>
        </p>
      </div>

      <a href={articleLink} className="recipe-cta--mobile">
        View Recipe
      </a>
    </article>
  )
}

export default SingleRecipe
