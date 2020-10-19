import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Comments from "../../components/Comments"
import ContentTypePagination from "../../components/ContentTypePagination"
import AuthorBio from "../../components/AuthorBio"
import PostMeta from "../../components/PostMeta"
import PostCategories from "../../components/PostCategories"
import FeaturedMedia from "../../components/FeaturedMedia"

export default ({ data }) => {
  const { nextPage, previousPage, page } = data
  const {
    title,
    content,
    featuredImage,
    categories,
    excerpt,
    databaseId,
    author,
    date,
  } = page

  return (
    <Layout
      bodyClass={`post-template-default single single-post postid-${databaseId} single-format-standard wp-embed-responsive singular has-post-thumbnail has-single-pagination showing-comments footer-top-visible customize-support`}
    >
      <Seo title={title} description={excerpt} />

      {
  /* single post start */
}
<section className="single-post-wrapper">
  <div className="container">
    <div className="row">
      <div className="col-lg-9">
        <ol className="breadcrumb">
          <li>
            <a href="#">
              <i className="fa fa-home" />
              Home
            </a>
          </li>
          <li>
            <a href="#">Lifestyle</a>
          </li>
          <li>Travel</li>
        </ol>
        {/* breadcump end*/}
        <div className="ts-grid-box content-wrapper single-post">
          <div className="entry-header">
          
            <h1
              className="post-title lg"
              dangerouslySetInnerHTML={{ __html: title }}
            />
         
            <ul className="post-meta-info">
              <li>
                <a href="#" className="post-cat ts-yellow-bg">
                <PostCategories categories={categories} />
                </a>
              </li>
              <li className="author">
                <a href="#">
                  <img
                    src="http://demo.themewinter.com/html/vinazine/images/avater/author.png"
                    alt
                  />
                </a>
                <PostMeta author={author} />
              </li>
              <li>
                <i className="fa fa-clock-o" />
                {date}
              </li>
              <li className="active">
                <i className="icon-fire" />
                3,005
              </li>
              <li className="share-post">
                <a to="#">
                  <i className="fa fa-share" />
                </a>
              </li>
            </ul>
          </div>
          {/* single post header end*/}
          <div className="post-content-area">
            <div className="post-media post-featured-image">
            <FeaturedMedia image={featuredImage} />
            </div>
            <div className="entry-content"
              
            dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          {/* author box end*/}


          
          <div className="post-navigation clearfix">
            <div className="post-previous float-left">
              <Link to="#">
                <img
                  src="http://demo.themewinter.com/html/vinazine/images/news/travel/travel6.jpg"
                  alt
                />
                <span>Read Previous</span>

                <ContentTypePagination
                previousPage={previousPage}
       
                 contentType={"Post"}
                  />
          
              </Link>
            </div>
            <div className="post-next float-right">
              <Link to="#">
                <img
                  src="http://demo.themewinter.com/html/vinazine/images/news/tech/tech5.jpg"
                  alt
                />
                <span>Read Next</span>
                  <ContentTypePagination nextPage={nextPage}/>
              </Link>
            </div>
          </div>
          {/* post navigation end*/}
        </div>

        <AuthorBio author={author} />
        {/*single post end */}
        <div className="comments-form ts-grid-box">
          <h3 className="comments-counter">03 Comments</h3>
          <ul className="comments-list">
            <li>
              <div className="comment">
                <img
                  className="comment-avatar float-left"
                  alt
                  src="http://demo.themewinter.com/html/vinazine/images/avatar/author.png"
                />
                <div className="comment-body">
                  <div className="meta-data">
                    <span className="float-right">
                      <Link className="comment-reply" to="#">
                        <i className="fa fa-mail-reply-all" /> Reply
                      </Link>
                    </span>
                    <span className="comment-author">Demon Lion</span>
                    <span className="comment-date">October 31, 2018</span>
                  </div>
                  <div className="comment-content">
                    <p>
                      There’s such a thing as “too much information”, especially
                      for the companies scaling out their sales operations.
                      That’s why Attentive was help sales teams{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* Comments end*/}
              <Comments />
              <ul className="comments-reply">
                <li>
                  <div className="comment">
                    <img
                      className="comment-avatar float-left"
                      alt
                      src="http://demo.themewinter.com/html/vinazine/images/avatar/author2.png"
                    />
                    <div className="comment-body reply-bg">
                      <div className="meta-data">
                        <span className="float-right">
                          <a className="comment-reply" href="#">
                            <i className="fa fa-mail-reply-all" /> Reply
                          </a>
                        </span>
                        <span className="comment-author">Henry kendel</span>
                        <span className="comment-date">October 31, 2018</span>
                      </div>
                      <div className="comment-content">
                        <p>
                          There’s such a thing as “too much information”,
                          especially for the companies scaling out their sales
                          operations. That’s why Attentive was born
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Comments end*/}
                </li>
              </ul>
              {/* comments-reply end*/}
            </li>
            {/* Comments-list li end*/}
            <li>
              <div className="comment last">
                <img
                  className="comment-avatar float-left"
                  alt
                  src="http://demo.themewinter.com/html/vinazine/images/avatar/author.png"
                />
                <div className="comment-body">
                  <div className="meta-data">
                    <span className="float-right">
                      <a className="comment-reply" href="#">
                        <i className="fa fa-mail-reply-all" /> Reply
                      </a>
                    </span>
                    <span className="comment-author">Demon Lion</span>
                    <span className="comment-date">October 31, 2018</span>
                  </div>
                  <div className="comment-content">
                    <p>
                      Cras lectus sed arcus volutpat tincidun met diam
                      placerat.Vis solum numquam. That’s why Attentive help
                      sales teams{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* Comments last end*/}
            </li>
          </ul>
          {/* Comments-list ul end*/}
          <h3 className="comment-reply-title">Add Comment</h3>
          <form role="form" className="ts-form">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    type="text"
                    required
                  />
                </div>
                {/* form group end*/}
                <div className="form-group">
                  <input
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    type="email"
                    required
                  />
                </div>
                {/* form group end*/}
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Your Website"
                    type="text"
                    required
                  />
                </div>
                {/* form group end*/}
              </div>
              {/* Col end */}
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    className="form-control msg-box"
                    id="message"
                    placeholder="Your Comment"
                    rows={10}
                    required
                    defaultValue={""}
                  />
                </div>
              </div>
              {/* Col end */}
              <div className="col-md-12">
                <p className="comment-form-cookies-consent">
                  <input
                    id="wp-comment-cookies-consent"
                    name="wp-comment-cookies-consent"
                    type="checkbox"
                    defaultValue="yes"
                  />
                  <label htmlFor="wp-comment-cookies-consent">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </p>
              </div>
            </div>
            {/* Form row end */}
            <div className="clearfix">
              <button className="comments-btn btn btn-primary" type="submit">
                Post Comment
              </button>
            </div>
          </form>
          {/* Form end */}
        </div>
        {/* comment form end*/}
        <div className="ts-grid-box mb-30">
          <h2 className="ts-title">Most Popular</h2>
          <div className="most-populers owl-carousel">
            <div className="item">
              <a className="post-cat ts-yellow-bg" href="#">
                Travel
              </a>
              <div className="ts-post-thumb">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="http://demo.themewinter.com/html/vinazine/images/news/travel/travel2.jpg"
                    alt
                  />
                </a>
              </div>
              <div className="post-content">
                <h3 className="post-title">
                  <a href="#">
                    Tourism in Dubai is booming by international tourist
                  </a>
                </h3>
                <span className="post-date-info">
                  <i className="fa fa-clock-o" />
                  March 21, 2019
                </span>
              </div>
            </div>
            {/* ts-grid-box end*/}
            <div className="item">
              <a className="post-cat ts-blue-light-bg" href="#">
                Technology
              </a>
              <div className="ts-post-thumb">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="http://demo.themewinter.com/html/vinazine/images/news/tech/tech1.jpg"
                    alt
                  />
                </a>
              </div>
              <div className="post-content">
                <h3 className="post-title">
                  <a href="#">ICOs Hit New Low, but Production Picking Up</a>
                </h3>
                <span className="post-date-info">
                  <i className="fa fa-clock-o" />
                  March 21, 2019
                </span>
              </div>
            </div>
            {/* ts-grid-box end*/}
            <div className="item">
              <a className="post-cat ts-pink-bg" href="#">
                Fashion
              </a>
              <div className="ts-post-thumb">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="http://demo.themewinter.com/html/vinazine/images/news/fashion/fashion1.jpg"
                    alt
                  />
                </a>
              </div>
              <div className="post-content">
                <h3 className="post-title">
                  <a href="#">
                    Tourism in Dubai is booming by international tourist
                  </a>
                </h3>
                <span className="post-date-info">
                  <i className="fa fa-clock-o" />
                  March 21, 2019
                </span>
              </div>
            </div>
            {/* ts-grid-box end*/}
            <div className="item">
              <a className="post-cat ts-pink-bg" href="#">
                Fashion
              </a>
              <div className="ts-post-thumb">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="http://demo.themewinter.com/html/vinazine/images/news/fashion/fashion2.jpg"
                    alt
                  />
                </a>
              </div>
              <div className="post-content">
                <h3 className="post-title">
                  <a href="#">ICOs Hit New Low, but Production Picking Up</a>
                </h3>
                <span className="post-date-info">
                  <i className="fa fa-clock-o" />
                  March 21, 2019
                </span>
              </div>
            </div>
            {/* ts-grid-box end*/}
            <div className="item">
              <a className="post-cat ts-pink-bg" href="#">
                Music
              </a>
              <div className="ts-post-thumb">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="http://demo.themewinter.com/html/vinazine/images/news/music/music2.jpg"
                    alt
                  />
                </a>
              </div>
              <div className="post-content">
                <h3 className="post-title">
                  <a href="#">
                    Tourism in Dubai is booming by international tourist
                  </a>
                </h3>
                <span className="post-date-info">
                  <i className="fa fa-clock-o" />
                  March 21, 2019
                </span>
              </div>
            </div>
            {/* ts-grid-box end*/}
          </div>
          {/* most-populers end*/}
        </div>
      </div>
      {/* col end */}
      <div className="col-lg-3">
        <div className="right-sidebar">
          <div className="ts-grid-box widgets social-widget">
            <h2 className="widget-title">Follow us</h2>
            <ul className="ts-social-list">
              <li className="ts-facebook">
                <a href="#">
                  <i className="fa fa-facebook" />
                  <b>12.5 k </b>
                  <span>Likes</span>
                </a>
              </li>
              <li className="ts-google-plus">
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
                <b>12.5 k </b>
                <span>Follwers</span>
              </li>
              <li className="ts-twitter">
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <b>12.5 k </b>
                <span>Follwers</span>
              </li>
              <li className="ts-pinterest">
                <a href="#">
                  <i className="fa fa-pinterest-p" />
                </a>
                <b>12.5 k </b>
                <span>Photos</span>
              </li>
              <li className="ts-linkedin">
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
                <b>12.5 k </b>
                <span>Follwers</span>
              </li>
              <li className="ts-youtube">
                <a href="#">
                  <i className="fa fa-youtube" />
                </a>
                <b>12.5 k </b>
                <span>Follwers</span>
              </li>
            </ul>
          </div>
          {/* widgets end*/}
          <div className="widgets widget-banner">
            <a href="#">
              <img
                className="img-fluid"
                src="http://demo.themewinter.com/html/vinazine/images/banner/sidebar-banner2.jpg"
                alt
              />
            </a>
          </div>
          {/* widgets end*/}
          <div className="post-list-item widgets">
            {/* Nav tabs */}
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation">
                <a
                  className="active"
                  href="#home"
                  aria-controls="home"
                  role="tab"
                  data-toggle="tab"
                >
                  <i className="fa fa-clock-o" />
                  Recent
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#profile"
                  aria-controls="profile"
                  role="tab"
                  data-toggle="tab"
                >
                  <i className="fa fa-heart" />
                  Favorites
                </a>
              </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane active ts-grid-box post-tab-list"
                id="home"
              >
                <div className="post-content media">
                  <img
                    className="d-flex sidebar-img"
                    src="http://demo.themewinter.com/html/vinazine/images/news/sports/sports2.jpg"
                    alt
                  />
                  <div className="media-body">
                    <span className="post-tag">
                      <a href="#" className="green-color">
                        {" "}
                        sports
                      </a>
                    </span>
                    <h4 className="post-title">
                      <a href="#">The body is a healing system. </a>
                    </h4>
                  </div>
                </div>
                {/*post-content end*/}
                <div className="post-content media ">
                  <img
                    className="d-flex sidebar-img"
                    src="http://demo.themewinter.com/html/vinazine/images/news/tech/tech4.jpg"
                    alt
                  />
                  <div className="media-body">
                    <span className="post-tag">
                      <a href="#" className="yellow-color">
                        {" "}
                        Technology
                      </a>
                    </span>
                    <h4 className="post-title">
                      <a href="#">18 month old shoots himself by gun </a>
                    </h4>
                  </div>
                </div>
                {/*post-content end*/}
                <div className="post-content media">
                  <img
                    className="d-flex sidebar-img"
                    src="http://demo.themewinter.com/html/vinazine/images/news/sports/sports2.jpg"
                    alt
                  />
                  <div className="media-body">
                    <span className="post-tag">
                      <a href="#" className="blue-color">
                        {" "}
                        Sports
                      </a>
                    </span>
                    <h4 className="post-title">
                      <a href="#">The body is a healing system. </a>
                    </h4>
                  </div>
                </div>
                {/*post-content end*/}
                <div className="post-content media">
                  <img
                    className="d-flex sidebar-img"
                    src="http://demo.themewinter.com/html/vinazine/images/news/fashion/fashion4.jpg"
                    alt
                  />
                  <div className="media-body">
                    <span className="post-tag">
                      <a href="#" className="pink-color">
                        {" "}
                        Fashion
                      </a>
                    </span>
                    <h4 className="post-title">
                      <a href="#">18 month old shoots himself by gun </a>
                    </h4>
                  </div>
                </div>
                {/*post-content end*/}
                <div className="post-content  media">
                  <img
                    className="d-flex sidebar-img"
                    src="http://demo.themewinter.com/html/vinazine/images/news/travel/travel6.jpg"
                    alt
                  />
                  <div className="media-body">
                    <span className="post-tag">
                      <a href="#" className="yellow-color">
                        {" "}
                        Travel
                      </a>
                    </span>
                    <h4 className="post-title">
                      <a href="#">The body is a healing system. </a>
                    </h4>
                  </div>
                </div>
                {/*post-content end*/}
              </div>
              {/*ts-grid-box end */}
              <div
                role="tabpanel"
                className="tab-pane ts-grid-box post-tab-list"
                id="profile"
              >
                <div className="post-content media">
                  <img
                    className="d-flex sidebar-img"
                    src="http://demo.themewinter.com/html/vinazine/images/news/sports/sports2.jpg"
                    alt
                  />
                  <div className="media-body">
                    <span className="post-tag">
                      <a href="#" className="green-color">
                        {" "}
                        sports
                      </a>
                    </span>
                    <h4 className="post-title">
                      <a href="#">18 month old shoots himself by gun </a>
                    </h4>
                  </div>
                </div>
                {/*post-content end*/}
                <div className="post-content media ">
                  <img
                    className="d-flex sidebar-img"
                    src="http://demo.themewinter.com/html/vinazine/images/news/tech/tech4.jpg"
                    alt
                  />
                  <div className="media-body">
                    <span className="post-tag">
                      <a href="#" className="yellow-color">
                        {" "}
                        Technology
                      </a>
                    </span>
                    <h4 className="post-title">
                      <a href="#">The body is a healing system. </a>
                    </h4>
                  </div>
                </div>
                {/*post-content end*/}
                <div className="post-content media">
                  <img
                    className="d-flex sidebar-img"
                    src="http://demo.themewinter.com/html/vinazine/images/news/sports/sports1.jpg"
                    alt
                  />
                  <div className="media-body">
                    <span className="post-tag">
                      <a href="#" className="blue-color">
                        {" "}
                        Sports
                      </a>
                    </span>
                    <h4 className="post-title">
                      <a href="#">18 month old shoots himself by gun </a>
                    </h4>
                  </div>
                </div>
                {/*post-content end*/}
                <div className="post-content media">
                  <img
                    className="d-flex sidebar-img"
                    src="http://demo.themewinter.com/html/vinazine/images/news/fashion/fashion4.jpg"
                    alt
                  />
                  <div className="media-body">
                    <span className="post-tag">
                      <a href="#" className="pink-color">
                        {" "}
                        Fashion
                      </a>
                    </span>
                    <h4 className="post-title">
                      <a href="#">The body is a healing system. </a>
                    </h4>
                  </div>
                </div>
                {/*post-content end*/}
                <div className="post-content  media">
                  <img
                    className="d-flex sidebar-img"
                    src="http://demo.themewinter.com/html/vinazine/images/news/travel/travel6.jpg"
                    alt
                  />
                  <div className="media-body">
                    <span className="post-tag">
                      <a href="#" className="yellow-color">
                        {" "}
                        Travel
                      </a>
                    </span>
                    <h4 className="post-title">
                      <a href="#">18 month old shoots himself by gun </a>
                    </h4>
                  </div>
                </div>
                {/*post-content end*/}
              </div>
              {/*ts-grid-box end */}
            </div>
            {/* tab content end*/}
          </div>
          {/* widgets end*/}
          <div className="ts-grid-box widgets category-widget">
            <h2 className="widget-title">Categories</h2>
            <ul className="category-list">
              <li>
                <a href="#">
                  Travel
                  <span className="ts-orange-bg">10</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Sports
                  <span className="ts-green-bg">25</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Travel
                  <span className="ts-orange-bg">10</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Fashion
                  <span className="ts-pink-bg">10</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Technology
                  <span className="ts-blue-bg">10</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Music
                  <span className="ts-pink-bg">10</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Food
                  <span className="ts-yellow-bg">10</span>
                </a>
              </li>
            </ul>
          </div>
          {/* widgets end*/}
          <div className="widgets ts-grid-box post-tab-list ts-col-box">
            <h3 className="widget-title">Populer Post</h3>
            <div className="ts-overlay-style">
              <div className="item">
                <div className="ts-post-thumb">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="http://demo.themewinter.com/html/vinazine/images/news/tech/tech3.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="overlay-post-content">
                  <div className="post-content">
                    <h3 className="post-title">
                      <a href="#">
                        Tourism in Dubai is boom international tourist
                      </a>
                    </h3>
                    <ul className="post-meta-info">
                      <li>
                        <i className="fa fa-clock-o" />
                        March 21, 2019
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* ts-overlay-style  end*/}
            <div className="post-content media">
              <img
                className="d-flex sidebar-img"
                src="http://demo.themewinter.com/html/vinazine/images/news/sports/sports2.jpg"
                alt
              />
              <div className="media-body align-self-center">
                <h4 className="post-title">
                  <a href="#">18 month shoots himself by gun </a>
                </h4>
              </div>
            </div>
            {/* post content end*/}
            <div className="post-content media">
              <img
                className="d-flex sidebar-img"
                src="http://demo.themewinter.com/html/vinazine/images/news/tech/tech2.jpg"
                alt
              />
              <div className="media-body align-self-center">
                <h4 className="post-title">
                  <a href="#">The body is a healing system. </a>
                </h4>
              </div>
            </div>
            {/* post content end*/}
          </div>
          <div className="ts-grid-box widgets tag-list">
            <h3 className="widget-title">Tags</h3>
            <ul>
              <li>
                <a href="#">Tech</a>
              </li>
              <li>
                <a href="#">Fashion</a>
              </li>
              <li>
                <a href="#">Sports</a>
              </li>
              <li>
                <a href="#">Football</a>
              </li>
              <li>
                <a href="#">Styles</a>
              </li>
              <li>
                <a href="#">Rech</a>
              </li>
              <li>
                <a href="#">Lifestyle</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Guide</a>
              </li>
              <li>
                <a href="#">Food</a>
              </li>
              <li>
                <a href="#">Animal</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* right sidebar end*/}
      {/* col end*/}
    </div>
    {/* row end*/}
  </div>
  {/* container*/}
</section>
    </Layout>
  )
}

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      ...PostContent
    }
    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
