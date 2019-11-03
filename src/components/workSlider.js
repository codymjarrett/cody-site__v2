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
      <Slider {...settings}>
        {response.map(node => (
          <div>
            <span className="title">{node.node.title}</span>
            <p className="desc">
              {node.node.description.content[0].content[0].value}
            </p>
            <ul className="group">
              {node.node.tech.map(t => (
                <li className="item">{t}</li>
              ))}
            </ul>
            <div className="image">
              <img
                style={{ maxWidth: "100%", width: "24rem" }}
                src={node.node.image.file.url}
                alt=""
              />
            </div>
            <div className="buttons">
              <button>
                <a
                  href={node.node.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </button>
              <button>
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
