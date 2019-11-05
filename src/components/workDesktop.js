import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

const WorkDesktop = ({ response }) => {
  const [initialProject, setInitialProject] = useState(
    "046e4319-f3ea-59b2-b0e9-8a5baeae5b40"
  )

  useEffect(() => {}, [response])

  const getNewProject = id => {
    setInitialProject(id)
  }

  const title = () => {
    return response
      .filter(p => p.node.id === initialProject)
      .map(i => <span className="work__title">{i.node.title}</span>)
  }

  const tech = () => {
    return response
      .filter(p => p.node.id === initialProject)
      .map(i => <li className="work__item">{i.node.tech}</li>)
  }

  const image = () => {
    return response
      .filter(p => p.node.id === initialProject)
      .map(i => (
        <img
          style={{ maxWidth: "100%", width: "30rem" }}
          src={i.node.image.file.url}
          alt={`screenshot of ${i.node.title}`}
        />
      ))
  }

  const listOfTech = () => {
    return response.map((i, idx) => {
      return (
        <li
          className="work-item"
          key={idx}
          data-id={i.node.id}
          onClick={id => getNewProject(i.node.id)}
        >
          <button>{i.node.title}</button>
        </li>
      )
    })
  }

  return (
    <div className="work__container">
      <div className="projects">
        <p className="projects__heading">Projects</p>
        <ul className="group work__names">{response && listOfTech()}</ul>
      </div>

      <div className="work__view">
        {response && title()}

        <div className="work__content">
          <div className="technology">
            <p className="technology__heading">Technologies</p>
            <ul className="group work__tech">{response && tech()}</ul>
          </div>
          <div className="work__details">
            {response && image()}

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
