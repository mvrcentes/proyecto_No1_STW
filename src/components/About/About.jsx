import React from "react"
import PropTypes from "prop-types"
import "./About.css"

const About = ({ title, options }) => {
    return (
        <div className="about">
            <p>{title}</p>
            <div className="column">
                {options.map((option, index) => (
                    <p key={index}>{option}</p>
                ))}
            </div>
        </div>
    )
}

About.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default About
