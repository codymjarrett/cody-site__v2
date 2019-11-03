import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkSlider from "../components/workSlider"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const WorkPage = ({ data: { allContentfulProject } }) => {
  const response = allContentfulProject.edges
  

  return (
    <Layout>
      <SEO title="Work" />
      <div className="work">
        <h1 className="work__title">Work</h1>
        <WorkSlider response={response} />
        <div className="work__container">
          <div className="projects">
            <p>Projects</p>
            <ul className="group work__names">
              <li className="work-item">Dad-Overflow</li>
              <li className="work-item">Dad-Overflow1</li>
              <li className="work-item">Dad-Overflow2</li>
              <li className="work-item">Dad-Overflow3</li>
              <li className="work-item">Dad-Overflow4</li>
            </ul>
          </div>

          <div className="work__view">
            <span className="work__title">Dad Over-flow</span>
            <div className="work__content">
              <p>Technologies</p>
              <ul className="group work__tech">
                <li className="work-item">Materialize1</li>
                <li className="work-item">Materialize2</li>
                <li className="work-item">Materialize3</li>
                <li className="work-item">Materialize4</li>
              </ul>
              <div className="work__details">
                <img
                  src="https://lh3.googleusercontent.com/5EdzLEemKV0Np6FUERy52WyeexgqEtmjmPelLp_L7ypN3rNgg7rtDTBwkrMRqQWfSf7rE7Kv470R841MQdLJ6BQYQfo1TgAqft05xq5XsEQItKe1s5k9devye8VRS80NHL_vuTQkZw=w2400"
                  alt=""
                />
                <button type="button">Github</button>
                <button type="button">Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WorkPage

export const query = graphql`
  {
    allContentfulProject {
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
        }
      }
    }
  }
`
