import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../assets/css/bootstrap.min.css"
import "../assets/css/icofonts.css"

import "../assets/css/font-awesome.min.css"
import { Link } from "gatsby"

const backdropClasses = " backdrop"

const Layout = ({ children, bodyClass }) => {
  const [backdropActive, setBackdropActive] = useState(false)

  const toggleBackdrop = (e, active) => {
    e.preventDefault()
    setBackdropActive(active)
  }

  return (
    

    
<body className="body-color">


<section className="top-bar">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 align-self-center md-center-item">
        <div className="ts-temperature">
          <i className="icon-weather" />
          <span>
            25.8
            <b>c</b>
          </span>
          <span>Dubai</span>
        </div>
        <ul className="ts-top-nav">
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
          <Link to="#">Forums</Link>
          </li>
          <li>
          <Link to="#">Contact</Link>
          </li>
          <li>
          <Link to="#">Advertisement</Link>
          </li>
        </ul>
      </div>
      {/* end col*/}
      <div className="col-lg-6 text-right align-self-center">
        <ul className="top-social">
          <li>
          <Link to="#">
              <i className="fa fa-twitter" />
            </Link>
          <Link to="#">
              <i className="fa fa-facebook" />
            </Link>
          <Link to="#">
              <i className="fa fa-google-plus" />
            </Link>
          <Link to="#">
              <i className="fa fa-pinterest" />
            </Link>
          <Link to="#">
              <i className="fa fa-vimeo-square" />
            </Link>
          </li>
          <li className="ts-date">
            <i className="fa fa-clock-o" />
            Sunday, August 24
          </li>
        </ul>
      </div>
      {/*end col */}
    </div>
    {/* end row */}
  </div>
</section>

      <Header/>

   
     

      <main className="block-wrapper mt-15"id="site-content" role="main">
        <div className="container">
        {children}
       
        <Footer />
        </div>
        
      </main>

 
 

    
      </body>
  )
}

export default Layout
