import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

const WorkDesktop = ({ response }) => {
  const [currentProjectId, setCurrentProjectId] = useState(
    "1cbb9ca2-c63f-5755-a967-937a1dc9d144"
  )

  const [currentProjectTech, setCurrentProjectTech] = useState()
  const [currentProjectData, setCurrentProjectData] = useState()

  useEffect(() => {
    const r = response.filter(i => i.node.id == currentProjectId)
    setCurrentProjectData(r)
    console.log("data", currentProjectData)
    setCurrentProjectTech(r[0].node.tech)
  }, [])
  {
    console.log(currentProjectTech)
    console.log("response", response)
  }

  const changeProject = (id) => {
    setCurrentProjectId(id)
    
  }

  return (
    <div className="work__container">
      <div className="projects">
        <p className="projects__heading">Projects</p>
        <ul className="group work__names">
          {response.map(i => (
            <li className="work-item" key={i.node.id} data-id={i.node.id} onClick={() => changeProject(i.node.id)}>
              {i.node.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="work__view">
        <span className="work__title">Dad Over-flow</span>
        <div className="work__content">
          <div className="technology">
            <p className="technology__heading">Technologies</p>
            <ul className="group work__tech">
              {currentProjectTech
                ? currentProjectTech.map(t => (
                    <li className="work-item">{t}</li>
                  ))
                : ""}
            </ul>
          </div>
          <div className="work__details">
            {currentProjectData
              ? currentProjectData.map(i => (
                  <img
                    style={{ maxWidth: "100%", width: "30rem" }}
                    src={i.node.image.file.url}
                    alt="screen shot of project"
                  />
                ))
              : ""}

            <div className="buttons">
              <button type="button">Github</button>
              <button type="button">Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkDesktop
