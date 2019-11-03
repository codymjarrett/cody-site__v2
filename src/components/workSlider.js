import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Slider from "react-slick"

const WorkSlider = ({ response }) => {
  useEffect(() => {
    console.log(response.map(i => console.log(i)))
  }, [response])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  }
  return (
    <div className="work-mobile-slider">
      <Slider {...settings} className="work-mobile-slider__slick">
        {response.map(node => (
          <div className="work-mobile-slider__container">
            <span className="title">{node.node.title}</span>
            <div className="media">
              <img
                style={{ maxWidth: "100%", width: "24rem" }}
                src={node.node.image.file.url}
                alt=""
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
      </Slider>
    </div>
  )
}

export default WorkSlider
