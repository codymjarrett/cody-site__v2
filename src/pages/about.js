import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
    <div className="about">
      <h1 className="about__title">About Me</h1>
      <p className="about__content">
        Hello there, my name is Cody! I love technology and really enjoy writing
        code.&nbsp;<strong>Fun fact: I used to sing opera for a living</strong>,
        but now I have a new found passion for programming. I currently work in
        Chicago as a Front End Engineer at&nbsp;
        <a href="https://www.fitchsolutions.com/" _target="blank">
          Fitch Solutions
        </a>
        &nbsp;on our credit analytics and macro intelligence platform,&nbsp;
        <em>Fitch Connect</em> using Vue, GraphQL & Hapi Node Servers.
      </p>
      <p className="about__content">
        Apart from programming, I enjoy spending quality time with my wife and
        two sons, listening to podcasts and rooting for anything Lebron James.
      </p>
    </div>
  </Layout>
)

export default AboutPage
