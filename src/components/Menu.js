import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import UniversalLink from "./UniversalLink"

const Menu = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "primary" }) {
        name
        menuItems {
          nodes {
            label
            url
            databaseId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
  /*  <nav
      className="primary-menu-wrapper"
      aria-label="Horizontal"
      role="navigation"
    >
      <ul className="primary-menu reset-list-style">
        {wpMenu.menuItems.nodes.map((menuItem, i) => {
          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

          const itemId = "menu-item-" + menuItem.databaseId

          return (
            <li
              id={itemId}
              key={i + menuItem.url}
              className={
                "menu-item menu-item-type-custom menu-item-object-custom menu-item-home " +
                itemId
              }
            >
              <UniversalLink
                to={path}
                activeClassName={"current-menu-item current_page_item"}
              >
                {menuItem.label}
              </UniversalLink>
            </li>
          )
        })}
      </ul>
    </nav>*/


<nav className="navigation ts-main-menu ts-menu-sticky navigation-portrait">
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
        <Link href>
          <i className="fa fa-user-circle-o" />
        </Link>
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
        <Link to="/">
          Home
          <span className="submenu-indicator">
            <span className="submenu-indicator-chevron" />
          </span>
        </Link>
        <div
          className="megamenu-panel ts-mega-menu nav-submenu"
          style={{ right: "auto", display: "none" }}
        >
          <div className="megamenu-lists">
            <ul className="megamenu-list list-col-2">
              <li className="active">
                <Link href="index.html">Home One</Link>
              </li>
              <li>
                <Link href="index-2.html">Home Two</Link>
              </li>
              <li className>
                <Link href="index-3.html">Home Three</Link>
              </li>
              <li>
                <Link href="index-4.html">Home Four</Link>
              </li>
              <li>
                <Link href="index-5.html">Home Five</Link>
              </li>
              <li>
                <Link href="index-6.html">Home Six</Link>
              </li>
              <li>
                <Link href="index-7.html">Home Seven</Link>
              </li>
              <li>
                <Link href="index-8.html">Home Eight</Link>
              </li>
            </ul>
            <ul className="megamenu-list list-col-2">
              <li>
                <Link href="business.html">Home Business</Link>
              </li>
              <li>
                <Link href="technology.html">Home Technology</Link>
              </li>
              <li>
                <Link href="food.html">Home Food</Link>
              </li>
              <li className>
                <Link href="crypto.html">Home Crypto</Link>
              </li>
              <li className>
                <Link href="health.html">Home Health</Link>
              </li>
              <li>
                <Link href="travel.html">Home Travel</Link>
              </li>
              <li>
                <Link href="sports.html">Home Sports</Link>
              </li>
              <li>
                <Link href="personal-blog.html">Personal Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li className>
        <Link href="#">
          Lifestyle
          <span className="submenu-indicator">
            <span className="submenu-indicator-chevron" />
          </span>
        </Link>
        <div
          className="megamenu-panel nav-submenu"
          style={{ right: 0, display: "none" }}
        >
          <div className="megamenu-tabs">
            <ul className="megamenu-tabs-nav">
              <li className="active">
                <Link href="#">Health</Link>
              </li>
              <li className>
                <Link href="#">Food</Link>
              </li>
              <li className>
                <Link href="#">Fashion</Link>
              </li>
              <li className>
                <Link href="#">Travel</Link>
              </li>
            </ul>
            <div className="megamenu-tabs-pane active">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <div className="item">
                    <div className="ts-post-thumb">
                      <Link className="post-cat ts-purple-bg" href="#">
                        Health
                      </Link>
                      <Link href="#">
                        <img
                          className="img-fluid"
                          src="images/news/health/health1.jpg"
                          alt
                        />
                      </Link>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <Link href="#">
                          Can't shed those Gym? The problem might be in
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="item">
                    <div className="ts-post-thumb">
                      <Link className="post-cat ts-purple-bg" href="#">
                        Health
                      </Link>
                      <Link href="#">
                        <img
                          className="img-fluid"
                          src="images/news/health/health2.jpg"
                          alt
                        />
                      </Link>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <Link href="#">
                          Smart packs parking sensor tech and beeps
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="item">
                    <div className="ts-post-thumb">
                      <Link className="post-cat ts-purple-bg" href="#">
                        Health
                      </Link>
                      <Link href="#">
                        <img
                          className="img-fluid"
                          src="images/news/health/health3.jpg"
                          alt
                        />
                      </Link>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <Link href="#">
                          Deleting fears from the brain means you might never
                        </Link>
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
                      <Link className="post-cat ts-yellow-bg" href="#">
                        Food
                      </Link>
                      <Link href="#">
                        <img
                          className="img-fluid"
                          src="images/news/foods/food1.jpg"
                          alt
                        />
                      </Link>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <Link href="#">
                          Tourism in Dubai is booming by international tourist
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="item">
                    <div className="ts-post-thumb">
                      <Link className="post-cat ts-yellow-bg" href="#">
                        Food
                      </Link>
                      <Link href="#">
                        <img
                          className="img-fluid"
                          src="images/news/foods/food2.jpg"
                          alt
                        />
                      </Link>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <Link href="#">
                          Tourism in Dubai is booming by international tourist
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="item">
                    <div className="ts-post-thumb">
                      <Link className="post-cat ts-yellow-bg" href="#">
                        Food
                      </Link>
                      <Link href="#">
                        <img
                          className="img-fluid"
                          src="images/news/foods/food3.jpg"
                          alt
                        />
                      </Link>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <Link href="#">
                          Tourism in Dubai is booming by international tourist
                        </Link>
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
                      <Link className="post-cat ts-pink-bg" href="#">
                        Fashion
                      </Link>
                      <Link href="#">
                        <img
                          className="img-fluid"
                          src="images/news/tech/tech1.jpg"
                          alt
                        />
                      </Link>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <Link href="#">
                          Tourism in Dubai is booming by international tourist
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="item">
                    <div className="ts-post-thumb">
                      <Link className="post-cat ts-pink-bg" href="#">
                        Fashion
                      </Link>
                      <Link href="#">
                        <img
                          className="img-fluid"
                          src="images/news/tech/tech2.jpg"
                          alt
                        />
                      </Link>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <Link href="#">
                          Tourism in Dubai is booming by international tourist
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="item">
                    <div className="ts-post-thumb">
                      <Link className="post-cat ts-pink-bg" href="#">
                        Fashion
                      </Link>
                      <Link href="#">
                        <img
                          className="img-fluid"
                          src="images/news/tech/tech3.jpg"
                          alt
                        />
                      </Link>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <Link href="#">
                          Tourism in Dubai is booming by international tourist
                        </Link>
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
                      <Link className="post-cat ts-orange-bg" href="#">
                        Travel
                      </Link>
                      <Link href="#">
                        <img
                          className="img-fluid"
                          src="images/news/travel/travel2.jpg"
                          alt
                        />
                      </Link>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <Link href="#">
                          Tourism in Dubai is booming by international tourist
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="item">
                    <div className="ts-post-thumb">
                      <Link className="post-cat ts-orange-bg" href="#">
                        Travel
                      </Link>
                      <Link href="#">
                        <img
                          className="img-fluid"
                          src="images/news/travel/travel3.jpg"
                          alt
                        />
                      </Link>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <Link href="#">
                          Tourism in Dubai is booming by international tourist
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="item">
                    <div className="ts-post-thumb">
                      <Link className="post-cat ts-orange-bg" href="#">
                        Travel
                      </Link>
                      <Link href="#">
                        <img
                          className="img-fluid"
                          src="images/news/travel/travel4.jpg"
                          alt
                        />
                      </Link>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <Link href="#">
                          Tourism in Dubai is booming by international tourist
                        </Link>
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
        <Link href="category-1.html">Technology</Link>
      </li>
      <li className>
        <Link href="#">
          Video
          <span className="submenu-indicator">
            <span className="submenu-indicator-chevron" />
          </span>
        </Link>
        <div
          className="megamenu-panel nav-submenu"
          style={{ right: 0, display: "none" }}
        >
          <div className="row">
            <div className="col-12 col-lg-3">
              <div className="item">
                <div className="ts-post-thumb">
                  <Link href>
                    <img
                      className="img-fluid"
                      src="images/news/tech/tech1.jpg"
                      alt
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/watch?v=uZmz6fGRVW4"
                    className="fa fa-play-circle-o ts-video-icon"
                  />
                </div>
                <div className="post-content">
                  <h3 className="post-title">
                    <Link href="#">Tourism in Dubai tourist favorite place</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="item">
                <div className="ts-post-thumb">
                  <Link href>
                    <img
                      className="img-fluid"
                      src="images/news/tech/tech2.jpg"
                      alt
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/watch?v=uZmz6fGRVW4"
                    className="fa fa-play-circle-o ts-video-icon"
                  />
                </div>
                <div className="post-content">
                  <h3 className="post-title">
                    <Link href="#">Tourism in Dubai tourist favorite place</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="item">
                <div className="ts-post-thumb">
                  <Link href>
                    <img
                      className="img-fluid"
                      src="images/news/tech/tech3.jpg"
                      alt
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/watch?v=uZmz6fGRVW4"
                    className="fa fa-play-circle-o ts-video-icon"
                  />
                </div>
                <div className="post-content">
                  <h3 className="post-title">
                    <Link href="#">Tourism in Dubai tourist favorite place</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="item">
                <div className="ts-post-thumb">
                  <Link href>
                    <img
                      className="img-fluid"
                      src="images/news/tech/tech4.jpg"
                      alt
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/watch?v=uZmz6fGRVW4"
                    className="fa fa-play-circle-o ts-video-icon"
                  />
                </div>
                <div className="post-content">
                  <h3 className="post-title">
                    <Link href="#">Tourism in Dubai tourist favorite place</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className>
        <Link href="category-2.html">Travel</Link>
      </li>
      <li>
        <Link href="#">
          Features
          <span className="submenu-indicator">
            <span className="submenu-indicator-chevron" />
          </span>
        </Link>
        <ul className="nav-dropdown nav-submenu" style={{ right: "auto" }}>
          <li>
            <Link href="#">
              Category layout
              <span className="submenu-indicator">
                <span className="submenu-indicator-chevron" />
              </span>
            </Link>
            <ul className="nav-dropdown nav-submenu">
              <li>
                <Link href="category-1.html">Category layout 1</Link>
              </li>
              <li>
                <Link href="category-2.html">Category layout 2 </Link>
              </li>
              <li>
                <Link href="category-3.html">Category layout 3</Link>
              </li>
              <li>
                <Link href="category-4.html">Category layout 4</Link>
              </li>
              <li>
                <Link href="category-5.html">Category layout 5</Link>
              </li>
              <li>
                <Link href="category-6.html">Category layout 6</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">
              Posts Formate
              <span className="submenu-indicator">
                <span className="submenu-indicator-chevron" />
              </span>
            </Link>
            <ul className="nav-dropdown nav-submenu">
              <li>
                <Link href="single-post-1.html">Single Post 1</Link>
              </li>
              <li>
                <Link href="single-post-2.html">Single Post 2 </Link>
              </li>
              <li>
                <Link href="single-post-3.html">Single Post 3 </Link>
              </li>
              <li>
                <Link href="single-post-4.html">Single Post 4 </Link>
              </li>
              <li>
                <Link href="single-post-5.html">Single Post 5</Link>
              </li>
              <li>
                <Link href="single-post-6.html">Single Post 6</Link>
              </li>
              <li>
                <Link href="single-post-7.html">Single Post 7</Link>
              </li>
              <li>
                <Link href="single-post-8.html">Single Post 8</Link>
              </li>
              <li>
                <Link href="single-post-9.html">Single Post 9</Link>
              </li>
              <li>
                <Link href="single-post-10.html">Single Post 10</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">
              Pages
              <span className="submenu-indicator">
                <span className="submenu-indicator-chevron" />
              </span>
            </Link>
            <ul className="nav-dropdown nav-submenu">
              <li>
                <Link href="author.html">Author</Link>
              </li>
              <li>
                <Link href="contact.html">Contact Us</Link>
              </li>
              <li>
                <Link href="login.html">Log In</Link>
              </li>
              <li>
                <Link href="registration.html">registration</Link>
              </li>
              <li>
                <Link href="404.html">404 </Link>
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
  )
}

export default Menu
