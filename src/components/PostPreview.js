import React from "react"
import { Link } from "gatsby"
import PostMeta from "./PostMeta"
import PostCategories from "./PostCategories"
import FeaturedMedia from "./FeaturedMedia"

const PostPreview = ({ post }) => {
  return (
    <>
      <article
        className={`post-${post.databaseId} post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized`}
        id={`post-${post.databaseId}`}
      >


    <a className="post-cat ts-orange-bg" href="#">
    <PostCategories categories={post.categories} />
    </a>
    <div className="ts-post-thumb">
    <FeaturedMedia image={post.featuredImage} />
    </div>
    <div className="post-content">
      <h3 className="post-title md">
      <Link
                to={post.uri}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
      </h3>
      <ul className="post-meta-info">
      <PostMeta
              title={post.title}
              author={post.author}
              date={post.date}
            />
      </ul>
     
    </div>



      </article>

   

    </>
  )
}

export default PostPreview
