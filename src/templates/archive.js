import React from "react"
import { graphql } from "gatsby"
// import PostEntry from "../../components/post-entry"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
// import SEO from "../../components/seo"
// import NextIcon from "../../components/icons/next"
// import PreviousIcon from "../../components/icons/previous"
import PostPreview from "../components/PostPreview"
import ArchivePagination from "../components/ArchivePagination"

const Archive = (props) => {
  const {
    data: {
      allWpPost: { nodes, pageInfo },
    },
    pageContext: { archiveType, archivePath },
  } = props

  return (
    <Layout
      bodyClass="home blog wp-embed-responsive has-no-pagination showing-comments hide-avatars footer-top-visible customize-support">
      <Seo title="Home" description="Welcome to the Twenty Nineteen Theme." />

      <section className="block-wrapper mt-15">
        <div className="container">

          <div className="row mb-30">
            <div className="col-lg-12">
              <div className="ts-grid-box entry-header">
                <ol className="ts-breadcrumb">
                  <li>
                    <a href="#">
                      <i className="fa fa-home" />
                Home
              </a>
                  </li>
                  <li>
                    <a href="#">Category</a>
                  </li>
                </ol>
                <div className="clearfix entry-cat-header">
                  <h2 className="ts-title float-left">Category Style 3</h2>
                  <ul className="ts-category-list float-right">
                    <li>
                      <a href="#" className="ts-blue-bg">
                        Post 1
                </a>
                    </li>
                    <li>
                      <a href="#">Post 2</a>
                    </li>
                    <li>
                      <a href="#">Post 3</a>
                    </li>
                    <li>
                      <a href="#"> Post 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">


              {nodes &&
                nodes.map((post, index) => {
                  return (

                    <div className="col-lg-6 mb-30">
                      <div className="ts-grid-box ts-grid-content">
                        <PostPreview
                          key={index}
                          post={post}

                        />



                      </div>
                    </div>

                  )
                })}



              <div className="ts-pagination text-center mb-20">
                <ul className="pagination">
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-double-left" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-left" />
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-double-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

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
                    src="images/banner/sidebar-banner4.jpg"
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
                        src="images/news/sports/sports2.jpg"
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
                          <a href>18 month old shoots himself by gun </a>
                        </h4>
                      </div>
                    </div>
                    {/*post-content end*/}
                    <div className="post-content media ">
                      <img
                        className="d-flex sidebar-img"
                        src="images/news/tech/tech4.jpg"
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
                          <a href>Beats did announce something today</a>
                        </h4>
                      </div>
                    </div>
                    {/*post-content end*/}
                    <div className="post-content media">
                      <img
                        className="d-flex sidebar-img"
                        src="images/news/sports/sports3.jpg"
                        alt
                      />
                      <div className="media-body">
                        <span className="post-tag">
                          <a href="#" className="blue-color">
                            {" "}
                    Lifestyle
                  </a>
                        </span>
                        <h4 className="post-title">
                          <a href>18 month old shoots himself by gun </a>
                        </h4>
                      </div>
                    </div>
                    {/*post-content end*/}
                    <div className="post-content media">
                      <img
                        className="d-flex sidebar-img"
                        src="images/news/fashion/fashion4.jpg"
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
                          <a href>Beats did announce something today</a>
                        </h4>
                      </div>
                    </div>
                    {/*post-content end*/}
                    <div className="post-content  media">
                      <img
                        className="d-flex sidebar-img"
                        src="images/news/travel/travel6.jpg"
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
                          <a href>18 month old shoots himself by gun </a>
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
                        src="images/news/sports/sports2.jpg"
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
                          <a href>Beats did announce something today</a>
                        </h4>
                      </div>
                    </div>
                    {/*post-content end*/}
                    <div className="post-content media ">
                      <img
                        className="d-flex sidebar-img"
                        src="images/news/tech/tech4.jpg"
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
                          <a href>18 month old shoots himself by gun </a>
                        </h4>
                      </div>
                    </div>
                    {/*post-content end*/}
                    <div className="post-content media">
                      <img
                        className="d-flex sidebar-img"
                        src="images/news/sports/sports2.jpg"
                        alt
                      />
                      <div className="media-body">
                        <span className="post-tag">
                          <a href="#" className="blue-color">
                            {" "}
                    Lifestyle
                  </a>
                        </span>
                        <h4 className="post-title">
                          <a href>Beats did announce something today</a>
                        </h4>
                      </div>
                    </div>
                    {/*post-content end*/}
                    <div className="post-content media">
                      <img
                        className="d-flex sidebar-img"
                        src="images/news/fashion/fashion4.jpg"
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
                          <a href>18 month old shoots himself by gun </a>
                        </h4>
                      </div>
                    </div>
                    {/*post-content end*/}
                    <div className="post-content  media">
                      <img
                        className="d-flex sidebar-img"
                        src="images/news/travel/travel6.jpg"
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
                          <a href>Beats did announce something today</a>
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
              <div className="ts-grid-box widgets category-list-item">
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
                </ul>
              </div>
              <div className="widgets widgets-item ts-social-list-item">
                <div className="ts-widget-newsletter">
                  <div className="newsletter-introtext">
                    <h4>Newsletter</h4>
                    <p>Subscribe to get the best stories into your inbox!</p>
                  </div>
                  <div className="newsletter-form">
                    <form action="#" method="post">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="newsletter-form-email"
                          className="form-control form-control-lg"
                          placeholder="E-mail"
                          autoComplete="off"
                        />
                        <button className="btn btn-primary">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      <ArchivePagination {...pageInfo} archivePath={archivePath} />


    </Layout>
  )
}

export const query = graphql`
  query ArchivePage(
    $offset: Int!
    $perPage: Int!
    $userDatabaseId: Int
    $categoryDatabaseId: Int
  ) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: {
        author: {
          node: { databaseId: { eq: $userDatabaseId } }}
        categories: {
          nodes: { elemMatch: { databaseId: { eq: $categoryDatabaseId } } }
        }
      }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        ...PostPreviewContent
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        currentPage
        pageCount
      }
    }
  }
`

export default Archive
