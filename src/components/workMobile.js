import React from "react"
import { graphql } from "gatsby"



const WorkMobile = ({ response }) => {
  

  return (
    <div className="work-mobile">
        {response && response.map(node => (
          <div className="work-mobile__item">
            <span className="title">{node.node.title}</span>
            <div className="media">
              <img
                style={{ maxWidth: "100%", width: "24rem" }}
                src={node.node.image.file.url}
                alt={`screenshot of ${node.node.title}`}
                className="media__image"
              />
            </div>
            <div className="description">
            <span className="description__heading">What is this?</span>
            <p className="description__content">
              {node.node.description.content[0].content[0].value}
            </p>

            </div>
            <div className="tech-stack">
            <span className="tech-stack__heading">Tech Stack:</span>
            <ul className="tech-stack__group">
              {node.node.tech.map(t => (
                <li className="tech-stack__item">{t}</li>
              ))}
            </ul>

            </div>
            
            <div className="buttons">
              <button className="btn">
                <a
                  href={node.node.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </button>
              <button className="btn">
                <a
                  href={node.node.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default WorkMobile
