import React from "react"

const Banner = ({ contextTitle, postTitle, postLink, postExcerpt, banner }) => {
  return (
    <section className="site-home-banner">
      {/* Image */}
      <a href={postLink}>
        <img srcSet={banner} alt="Site Banner" width="1000" />
      </a>

      {/* Text Content */}
      <div className="text-content">
        <p className="context-title">{contextTitle}</p>
        <p className="post-title">{postTitle}</p>
        <p className="post-excerpt">{postExcerpt}</p>
      </div>
    </section>
  )
}

export default Banner
