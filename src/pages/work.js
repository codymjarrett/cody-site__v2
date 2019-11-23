import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkMobile from "../components/workMobile"
import WorkDesktop from "../components/workDesktop"


const WorkPage = ({ data: { allContentfulProject } }) => {
  return (
    <Layout>
      <SEO title="Work" />
      <div className="work">
        <h1 className="work__title">Work</h1>
        <WorkMobile response={allContentfulProject.edges} />
        <WorkDesktop response={allContentfulProject.edges} />
      </div>
    </Layout>
  )
}

export default WorkPage

export const query = graphql`
{
  allContentfulProject(sort: { fields: id, order: ASC }) {
    edges {
      node {
        demo
        github
        tech
        title
         image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 433) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
        description {
          content {
            content {
              value
            }
          }
        }
        id
      }
    }
  }
}

`




