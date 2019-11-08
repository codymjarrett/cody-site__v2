import React, { useState, useEffect } from "react"
import Image from "gatsby-image"



const WorkMobile = ({ response }) => {

  const [isScrolledDown, setIsScrolledDown] = useState(false)
  
useEffect(()=> {
  if (typeof window !== 'undefined') {
    window.onscroll = () => scrollFunction()
  }
})

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    setIsScrolledDown(true)
  } else {
    setIsScrolledDown(false)
  }
}

const goBackToTop = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

  return (
    <div className="work-mobile">
      <button className={`back-to-top btn btn--back-to-top-btn ${isScrolledDown && 'is-scrolled'}`} onClick={goBackToTop}>&uarr;</button>
        {response && response.map(node => {
          console.log(node)
          return(
          <div className="work-mobile__item">
            <span className="title">{node.node.title}</span>
            <div className="media">
            <Image
              fluid={node.node.image.localFile.childImageSharp.fluid}
              alt={`screenshot of ${node.node.image.title}`}
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
        )})}
    </div>
  )
}

export default WorkMobile
