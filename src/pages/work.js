import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkMobile from "../components/workMobile"
import WorkDesktop from "../components/workDesktop"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const WorkPage = ({ data: { allContentfulProject } }) => {
  const [state, setState] = useState()
  const [currentProject, setCurrentProject] = useState()

  useEffect(() => {
    if (allContentfulProject) {
      setState(allContentfulProject.edges)
    }
  }, [allContentfulProject])

  
  return (
    <Layout>
      <SEO title="Work" />
      <div className="work">
        <h1 className="work__title">Work</h1>
        <WorkMobile response={state} />
        <WorkDesktop response={state} />
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
            file {
              url
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
