import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="about__content">{children}</p>
    ),
    [INLINES.HYPERLINK]: node => {
      return (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {node.content[0].value}
        </a>
      )
    },
  },
}

const AboutPage = ({ data: { allContentfulAbout } }) => (
  <Layout>
    <SEO title="About me" />
    <div className="about">
      <h1 className="about__title">About Me</h1>
      {allContentfulAbout.edges[0].node.body.json.content.map(stuff =>
        documentToReactComponents(stuff, options)
      )}
    </div>
  </Layout>
)

export default AboutPage

export const query = graphql`
  {
    allContentfulAbout {
      edges {
        node {
          body {
            json
          }
        }
      }
    }
  }
`
