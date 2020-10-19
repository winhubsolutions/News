import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import logo from "../assets/images/logo/banner_logo.png"

const Header = ({ pageContext, toggleBackdrop, ...props }) => {
  const { wp } = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  return (

    <header className="header-default">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 pr-0">
            <div className="logo">
             <Link href="/">
                <img src={logo} alt />
              </Link>
            </div>
          </div>

          <div className="col-lg-10 header-nav-item">
            <div className="ts-breaking-news clearfix">
              <h2 className="breaking-title float-left">
                <i className="fa fa-bolt" /> Breaking News :
  </h2>
              <div
                className="breaking-news-content owl-carousel float-left owl-loaded owl-drag"
                id="breaking_slider"
              >
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-2136px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: 4984
                    }}
                  >
                    <div className="owl-item cloned" style={{ width: 712 }}>
                      <div className="breaking-post-content">
                        <p>
                          <a href="#">
                            Parquet Courts on Resisting Nihilism &amp; Why Tourism in Dubai
                            is booming the world.
              </a>
                        </p>
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 712 }}>
                      <div className="breaking-post-content">
                        <p>
                          <a href="#">
                            Parquet Courts on Resisting Nihilism &amp; Why Tourism in Dubai
                            is booming the world.
              </a>
                        </p>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 712 }}>
                      <div className="breaking-post-content">
                        <p>
                          <a href="#">
                            Netcix cuts out the chill with an integrated personal trainer on
                            running.
              </a>
                        </p>
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: 712 }}>
                      <div className="breaking-post-content">
                        <p>
                          <a href="#">
                            Parquet Courts on Resisting Nihilism &amp; Why Tourism in Dubai
                            is booming the world.
              </a>
                        </p>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 712 }}>
                      <div className="breaking-post-content">
                        <p>
                          <a href="#">
                            Parquet Courts on Resisting Nihilism &amp; Why Tourism in Dubai
                            is booming the world.
              </a>
                        </p>
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 712 }}>
                      <div className="breaking-post-content">
                        <p>
                          <a href="#">
                            Netcix cuts out the chill with an integrated personal trainer on
                            running.
              </a>
                        </p>
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 712 }}>
                      <div className="breaking-post-content">
                        <p>
                          <a href="#">
                            Parquet Courts on Resisting Nihilism &amp; Why Tourism in Dubai
                            is booming the world.
              </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button role="presentation" className="owl-prev">
                    <span aria-label="prev">‹</span>
                  </button>
                  <button role="presentation" className="owl-next">
                    <span aria-label="next">›</span>
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
            </div>

            {/*nav top end*/}
            <nav className="navigation ts-main-menu ts-menu-sticky navigation-landscape">
              <div className="nav-header">
                <Link className="nav-brand mobile-logo visible-xs" to="/">
                  <img src="images/logo/footer_logo.png" alt />
                </Link>
                <div className="nav-toggle" />
              </div>
              {/*nav brand end*/}
              <div
                className="nav-menus-wrapper clearfix"
                style={{ transitionProperty: "none" }}
              >
                <span className="nav-menus-wrapper-close-button">✕</span>
                {/*nav right menu start*/}
                <ul className="right-menu align-to-right">
                  <li>
                    <a href>
                      <i className="fa fa-user-circle-o" />
                    </a>
                  </li>
                  <li className="header-search">
                    <div className="nav-search">
                      <div className="nav-search-button">
                        <i className="icon icon-search" />
                      </div>
                      <form>
                        <span className="nav-search-close-button" tabIndex={0}>
                          ✕
            </span>
                        <span className="nav-search-close-button" tabIndex={0}>
                          ✕
            </span>
                        <div className="nav-search-inner">
                          <input
                            type="search"
                            name="search"
                            placeholder="Type and hit ENTER"
                          />
                        </div>
                      </form>
                    </div>
                  </li>
                </ul>
                {/*nav right menu end*/}
                {/* nav menu start*/}
                <ul className="nav-menu">
                  <li className="active">
                    <a href="#">
                      Home
          <span className="submenu-indicator">
                        <span className="submenu-indicator-chevron" />
                      </span>
                    </a>
                    <div
                      className="megamenu-panel ts-mega-menu nav-submenu"
                      style={{ right: "auto" }}
                    >
                      <div className="megamenu-lists">
                        <ul className="megamenu-list list-col-2">
                          <li className="active">
                            <a href="index.html">Home One</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Two</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home Three</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home Four</a>
                          </li>
                          <li>
                            <a href="index-5.html">Home Five</a>
                          </li>
                          <li>
                            <a href="index-6.html">Home Six</a>
                          </li>
                          <li>
                            <a href="index-7.html">Home Seven</a>
                          </li>
                          <li>
                            <a href="index-8.html">Home Eight</a>
                          </li>
                        </ul>
                        <ul className="megamenu-list list-col-2">
                          <li>
                            <a href="business.html">Home Business</a>
                          </li>
                          <li>
                            <a href="technology.html">Home Technology</a>
                          </li>
                          <li>
                            <a href="food.html">Home Food</a>
                          </li>
                          <li>
                            <a href="crypto.html">Home Crypto</a>
                          </li>
                          <li>
                            <a href="health.html">Home Health</a>
                          </li>
                          <li>
                            <a href="travel.html">Home Travel</a>
                          </li>
                          <li>
                            <a href="sports.html">Home Sports</a>
                          </li>
                          <li>
                            <a href="personal-blog.html">Personal Blog</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      Lifestyle
          <span className="submenu-indicator">
                        <span className="submenu-indicator-chevron" />
                      </span>
                    </a>
                    <div className="megamenu-panel nav-submenu" style={{ right: 0 }}>
                      <div className="megamenu-tabs">
                        <ul className="megamenu-tabs-nav">
                          <li className="active">
                            <a href="#">Health</a>
                          </li>
                          <li>
                            <a href="#">Food</a>
                          </li>
                          <li>
                            <a href="#">Fashion</a>
                          </li>
                          <li>
                            <a href="#">Travel</a>
                          </li>
                        </ul>
                        <div className="megamenu-tabs-pane active">
                          <div className="row">
                            <div className="col-12 col-lg-4">
                              <div className="item">
                                <div className="ts-post-thumb">
                                  <a className="post-cat ts-purple-bg" href="#">
                                    Health
                      </a>
                                  <a href="#">
                                    <img
                                      className="img-fluid"
                                      src="images/news/health/health1.jpg"
                                      alt
                                    />
                                  </a>
                                </div>
                                <div className="post-content">
                                  <h3 className="post-title">
                                    <a href="#">
                                      Can't shed those Gym? The problem might be in
                        </a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="item">
                                <div className="ts-post-thumb">
                                  <a className="post-cat ts-purple-bg" href="#">
                                    Health
                      </a>
                                  <a href="#">
                                    <img
                                      className="img-fluid"
                                      src="images/news/health/health2.jpg"
                                      alt
                                    />
                                  </a>
                                </div>
                                <div className="post-content">
                                  <h3 className="post-title">
                                    <a href="#">
                                      Smart packs parking sensor tech and beeps
                        </a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="item">
                                <div className="ts-post-thumb">
                                  <a className="post-cat ts-purple-bg" href="#">
                                    Health
                      </a>
                                  <a href="#">
                                    <img
                                      className="img-fluid"
                                      src="images/news/health/health3.jpg"
                                      alt
                                    />
                                  </a>
                                </div>
                                <div className="post-content">
                                  <h3 className="post-title">
                                    <a href="#">
                                      Deleting fears from the brain means you might never
                        </a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* mega menu end*/}
                        <div className="megamenu-tabs-pane">
                          <div className="row">
                            <div className="col-12 col-lg-4">
                              <div className="item">
                                <div className="ts-post-thumb">
                                  <a className="post-cat ts-yellow-bg" href="#">
                                    Food
                      </a>
                                  <a href="#">
                                    <img
                                      className="img-fluid"
                                      src="images/news/foods/food1.jpg"
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
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="item">
                                <div className="ts-post-thumb">
                                  <a className="post-cat ts-yellow-bg" href="#">
                                    Food
                      </a>
                                  <a href="#">
                                    <img
                                      className="img-fluid"
                                      src="images/news/foods/food2.jpg"
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
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="item">
                                <div className="ts-post-thumb">
                                  <a className="post-cat ts-yellow-bg" href="#">
                                    Food
                      </a>
                                  <a href="#">
                                    <img
                                      className="img-fluid"
                                      src="images/news/foods/food3.jpg"
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
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* mega menu end*/}
                        <div className="megamenu-tabs-pane">
                          <div className="row">
                            <div className="col-12 col-lg-4">
                              <div className="item">
                                <div className="ts-post-thumb">
                                  <a className="post-cat ts-pink-bg" href="#">
                                    Fashion
                      </a>
                                  <a href="#">
                                    <img
                                      className="img-fluid"
                                      src="images/news/tech/tech1.jpg"
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
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="item">
                                <div className="ts-post-thumb">
                                  <a className="post-cat ts-pink-bg" href="#">
                                    Fashion
                      </a>
                                  <a href="#">
                                    <img
                                      className="img-fluid"
                                      src="images/news/tech/tech2.jpg"
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
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="item">
                                <div className="ts-post-thumb">
                                  <a className="post-cat ts-pink-bg" href="#">
                                    Fashion
                      </a>
                                  <a href="#">
                                    <img
                                      className="img-fluid"
                                      src="images/news/tech/tech3.jpg"
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
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* mega menu end*/}
                        <div className="megamenu-tabs-pane">
                          <div className="row">
                            <div className="col-12 col-lg-4">
                              <div className="item">
                                <div className="ts-post-thumb">
                                  <a className="post-cat ts-orange-bg" href="#">
                                    Travel
                      </a>
                                  <a href="#">
                                    <img
                                      className="img-fluid"
                                      src="images/news/travel/travel2.jpg"
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
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="item">
                                <div className="ts-post-thumb">
                                  <a className="post-cat ts-orange-bg" href="#">
                                    Travel
                      </a>
                                  <a href="#">
                                    <img
                                      className="img-fluid"
                                      src="images/news/travel/travel3.jpg"
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
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="item">
                                <div className="ts-post-thumb">
                                  <a className="post-cat ts-orange-bg" href="#">
                                    Travel
                      </a>
                                  <a href="#">
                                    <img
                                      className="img-fluid"
                                      src="images/news/travel/travel4.jpg"
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
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* mega menu end*/}
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="category-1.html">Technology</a>
                  </li>
                  <li>
                    <a href="#">
                      Video
          <span className="submenu-indicator">
                        <span className="submenu-indicator-chevron" />
                      </span>
                    </a>
                    <div className="megamenu-panel nav-submenu" style={{ right: 0 }}>
                      <div className="row">
                        <div className="col-12 col-lg-3">
                          <div className="item">
                            <div className="ts-post-thumb">
                              <a href>
                                <img
                                  className="img-fluid"
                                  src="images/news/tech/tech1.jpg"
                                  alt
                                />
                              </a>
                              <a
                                href="https://www.youtube.com/watch?v=uZmz6fGRVW4"
                                className="fa fa-play-circle-o ts-video-icon"
                              />
                            </div>
                            <div className="post-content">
                              <h3 className="post-title">
                                <a href="#">Tourism in Dubai tourist favorite place</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-3">
                          <div className="item">
                            <div className="ts-post-thumb">
                              <a href>
                                <img
                                  className="img-fluid"
                                  src="images/news/tech/tech2.jpg"
                                  alt
                                />
                              </a>
                              <a
                                href="https://www.youtube.com/watch?v=uZmz6fGRVW4"
                                className="fa fa-play-circle-o ts-video-icon"
                              />
                            </div>
                            <div className="post-content">
                              <h3 className="post-title">
                                <a href="#">Tourism in Dubai tourist favorite place</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-3">
                          <div className="item">
                            <div className="ts-post-thumb">
                              <a href>
                                <img
                                  className="img-fluid"
                                  src="images/news/tech/tech3.jpg"
                                  alt
                                />
                              </a>
                              <a
                                href="https://www.youtube.com/watch?v=uZmz6fGRVW4"
                                className="fa fa-play-circle-o ts-video-icon"
                              />
                            </div>
                            <div className="post-content">
                              <h3 className="post-title">
                                <a href="#">Tourism in Dubai tourist favorite place</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-3">
                          <div className="item">
                            <div className="ts-post-thumb">
                              <a href>
                                <img
                                  className="img-fluid"
                                  src="images/news/tech/tech4.jpg"
                                  alt
                                />
                              </a>
                              <a
                                href="https://www.youtube.com/watch?v=uZmz6fGRVW4"
                                className="fa fa-play-circle-o ts-video-icon"
                              />
                            </div>
                            <div className="post-content">
                              <h3 className="post-title">
                                <a href="#">Tourism in Dubai tourist favorite place</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="category-2.html">Travel</a>
                  </li>
                  <li>
                    <a href="#">
                      Features
          <span className="submenu-indicator">
                        <span className="submenu-indicator-chevron" />
                      </span>
                    </a>
                    <ul className="nav-dropdown nav-submenu" style={{ right: "auto" }}>
                      <li>
                        <a href="#">
                          Category layout
              <span className="submenu-indicator">
                            <span className="submenu-indicator-chevron" />
                          </span>
                        </a>
                        <ul className="nav-dropdown nav-submenu">
                          <li>
                            <a href="category-1.html">Category layout 1</a>
                          </li>
                          <li>
                            <a href="category-2.html">Category layout 2 </a>
                          </li>
                          <li>
                            <a href="category-3.html">Category layout 3</a>
                          </li>
                          <li>
                            <a href="category-4.html">Category layout 4</a>
                          </li>
                          <li>
                            <a href="category-5.html">Category layout 5</a>
                          </li>
                          <li>
                            <a href="category-6.html">Category layout 6</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Posts Formate
              <span className="submenu-indicator">
                            <span className="submenu-indicator-chevron" />
                          </span>
                        </a>
                        <ul className="nav-dropdown nav-submenu">
                          <li>
                            <a href="single-post-1.html">Single Post 1</a>
                          </li>
                          <li>
                            <a href="single-post-2.html">Single Post 2 </a>
                          </li>
                          <li>
                            <a href="single-post-3.html">Single Post 3 </a>
                          </li>
                          <li>
                            <a href="single-post-4.html">Single Post 4 </a>
                          </li>
                          <li>
                            <a href="single-post-5.html">Single Post 5</a>
                          </li>
                          <li>
                            <a href="single-post-6.html">Single Post 6</a>
                          </li>
                          <li>
                            <a href="single-post-7.html">Single Post 7</a>
                          </li>
                          <li>
                            <a href="single-post-8.html">Single Post 8</a>
                          </li>
                          <li>
                            <a href="single-post-9.html">Single Post 9</a>
                          </li>
                          <li>
                            <a href="single-post-10.html">Single Post 10</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Pages
              <span className="submenu-indicator">
                            <span className="submenu-indicator-chevron" />
                          </span>
                        </a>
                        <ul className="nav-dropdown nav-submenu">
                          <li>
                            <a href="author.html">Author</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="login.html">Log In</a>
                          </li>
                          <li>
                            <a href="registration.html">registration</a>
                          </li>
                          <li>
                            <a href="404.html">404 </a>
                          </li>
                        </ul>
                      </li>
                      {/*Pages end*/}
                    </ul>
                  </li>
                </ul>
                {/*nav menu end*/}
              </div>
              <div className="nav-overlay-panel" />
            </nav>
            {/* nav end*/}
          </div>
        </div>
      </div>
    </header>


  )
}

export default Header
