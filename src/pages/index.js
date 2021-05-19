import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Banner from "../components/Banner"
import Recipes from "../components/Recipes"
import Featured from "../components/Featured"

const Index = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWpSection {
        edges {
          node {
            siteBanner {
              postTitle
              postLink
              postExcerpt
              fieldGroupName
              contextTitle
              bannerImage {
                srcSet
              }
            }
            featured {
              callToAction
              context
              excerpt
              fieldGroupName
              title
              featuredImage {
                srcSet
              }
            }
          }
        }
      }
      allWpRecipe {
        edges {
          node {
            recipes {
              recipeTitle
              recipeOverview
              recipeAuthor
              fieldGroupName
              articleLink
              mainThumbnail {
                altText
                slug
                srcSet
              }
            }
          }
        }
      }
    }
  `)
  const dataNormalized = data.allWpSection.edges[1].node.siteBanner

  // Banner Variables
  const { contextTitle, postTitle, postLink, postExcerpt } = dataNormalized
  const banner = data.allWpSection.edges[1].node.siteBanner.bannerImage.srcSet

  // Recipes
  const recipesArr = data.allWpRecipe.edges

  // Featured Article
  const featuredNormalized = data.allWpSection.edges[0].node.featured
  const { callToAction, context, excerpt, title } = featuredNormalized
  const featuredImage = featuredNormalized.featuredImage.srcSet

  return (
    <Layout>
      {/* Component for Banner Image */}
      <Banner
        contextTitle={contextTitle}
        postTitle={postTitle}
        postLink={postLink}
        postExcerpt={postExcerpt}
        banner={banner}
      />

      {/* Component for featured recipes */}
      <Recipes arr={recipesArr} />

      {/* Component for featured article */}
      <Featured
        cta={callToAction}
        context={context}
        excerpt={excerpt}
        title={title}
        featuredImage={featuredImage}
      />
    </Layout>
  )
}

export default Index
