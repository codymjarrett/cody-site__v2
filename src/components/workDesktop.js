import React, { useState, useEffect } from "react"
import Image from "gatsby-image"

const WorkDesktop = ({ response }) => {
  const [initialProject, setInitialProject] = useState(response[0].node.id)
  const [activeElement, setActiveElement] = useState("")

  useEffect(() => {
    if (response.length > 0) {
      setActiveElement(response[0].node.id)
    }
  }, [response])

  const getNewProject = id => {
    setInitialProject(id)
  }

  const addCurrentStyle = event => {
    const elemId = event.currentTarget.dataset.id
    setActiveElement(elemId)
  }

  const getNewProjectAndAddStyle = (event, id) => {
    getNewProject(id)
    addCurrentStyle(event)
  }

  const title = () => {
    return response
      .filter(p => p.node.id === initialProject)
      .map(i => (
        <span className="current-work__title" key={i.node.id}>
          {i.node.title}
        </span>
      ))
  }

  const description = () => {
    return response
      .filter(p => p.node.id === initialProject)
      .map((i, idx) => (
        <p className="description__content" key={idx}>
          {i.node.description.content[0].content[0].value}
          {i.node.description.content[0].content[1] &&
            i.node.description.content[0].content[1].value}
          {i.node.description.content[0].content[2] && (
            <a
              href={i.node.description.content[0].content[2].value.slice(3)}
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          )}
        </p>
      ))
  }

  const tech = () => {
    let n = response.filter(p => p.node.id === initialProject)
    n = n[0].node.tech.map(i => (
      <li className="work__item" key={i.id}>
        {i}
      </li>
    ))
    return n
  }

  const image = () => {
    return response
      .filter(e => e.node.id === initialProject)
      .map((i, idx) => (
        <Image
          key={idx}
          fluid={i.node.image.localFile.childImageSharp.fluid}
          alt={`screenshot of ${i.node.image.title}`}
          className="media__image"
        />
      ))
  }

  const listOfTech = () => {
    return response.map((i, idx) => {
      return (
        <li
          className={`work-item ${activeElement === i.node.id ? "active" : ""}`}
          key={idx}
          data-id={i.node.id}
          onClick={(event, id) => getNewProjectAndAddStyle(event, i.node.id)}
        >
          <button>{i.node.title}</button>
        </li>
      )
    })
  }

  const github = () => {
    let n
    if (response) {
      n = response.filter(p => p.node.id === initialProject)
    }

    return n[0].node.github
  }

  const demo = () => {
    let n = response.filter(p => p.node.id === initialProject)
    return n[0].node.demo
  }

  return (
    <div className="work__container">
      <div className="projects">
        <p className="projects__heading">Projects</p>
        <ul className="group work__names">{response && listOfTech()}</ul>
      </div>

      <div className="work__view">
        <div className="work__content">
          <div className="work__details">
            {response && title()}
            <div className="media">
              <div className="media__wrapper">
                {response && image()}
                <div className="buttons">
                  <button type="button" className="btn">
                    <a
                      href={response && github()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </button>
                  <button type="button" className="btn">
                    <a
                      href={response && demo()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="description">
              <p className="description__heading">What is this ?</p>
              <div className="description__content">
                {response && description()}
              </div>
            </div>
            <div className="technology">
              <p className="technology__heading">Tech Stack:</p>
              <ul className="group work__tech">{response && tech()}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkDesktop
