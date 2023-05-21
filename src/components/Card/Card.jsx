import React from "react"
import PropTypes from "prop-types"
import "./Card.css"

const Card = ({ imgSrc, position, title, body }) => {
    return (
        <div className="card">
            <div className={`cardContainer ${position}`}>
                <div className="imagen">
                    <img src={imgSrc} alt={title} />
                </div>
                <div className="text">
                    <h2>{title}</h2>
                    <p className="text-body">{body}</p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default Card
