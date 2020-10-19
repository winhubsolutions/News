
import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        
        <link href="http://demo.themewinter.com/html/vinazine/css/colors/color-0.css" rel="stylesheet" type="text/css" />
          <link href="http://demo.themewinter.com/html/vinazine/css/animate.css" rel="stylesheet" type="text/css" />
          <link href="http://demo.themewinter.com/html/vinazine/css/navigation.css" rel="stylesheet" type="text/css" />
          <link href="http://demo.themewinter.com/html/vinazine/css/responsive.css" rel="stylesheet" type="text/css" />
          <link href="http://demo.themewinter.com/html/vinazine/css/style.css" rel="stylesheet" type="text/css" />
          <link href="http://demo.themewinter.com/html/vinazine/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          <link href="http://demo.themewinter.com/html/vinazine/css/magnific-popup.css" rel="stylesheet" type="text/css" />
          <link href="http://demo.themewinter.com/html/vinazine/css/owlcarousel.min.css" rel="stylesheet" type="text/css" />
        
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        
  {/*      <script
          key="alertify"
          src="http://demo.themewinter.com/html/vinazine/js/bootstrap.min.js"
          type="text/javascript"
          aysnc
        />

<script
          key="alertify"
          src="http://demo.themewinter.com/html/vinazine/js/navigation.js"
          type="text/javascript"
          aysnc
        />
<script
          key="alertify"
          src="http://demo.themewinter.com/html/vinazine/js/main.js"
          type="text/javascript"
          aysnc
        />
        <script
          key="fun_javascript"
          dangerouslySetInnerHTML={{
            __html: `
        console.log('Happy Coding and Stay Safe!!')
      `,
          }}
        />*/}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
