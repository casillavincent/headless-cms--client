import React from "react"

const Featured = ({ cta, context, excerpt, title, featuredImage }) => {
  return (
    <article className="featured-article">
      {/* Text Content */}
      <section className="left-col">
        <p className="left-col__context">{context}</p>
        <p className="left-col__title">{title}</p>
        <p className="left-col__excerpt">{excerpt}</p>
        <a href={cta} className="left-col__cta">
          View Article
        </a>
      </section>

      {/* Featured image */}
      <section className="right-col">
        <img
          srcSet={featuredImage}
          alt="Featured Smoothie Article"
          width="500"
        />
      </section>
    </article>
  )
}

export default Featured
