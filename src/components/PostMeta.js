import React from "react"


import { Link } from "gatsby"

const PostMeta = ({ author, date }) => {
  author = author?.node
  return (
    
    
      <div className="post-content">
   <ul className="post-meta-info">
    <li>
      <Link to={author.uri}>
              {author.firstName
                ? author.lastName
                  ? author.firstName + " " + author.lastName
                  : author.firstName
                : author.name}
            </Link>
    </li>
    <li>
      <i className="fa fa-clock-o" />
      {date}
    </li>
  </ul>
  
</div>
    

    
  )
}

export default PostMeta
