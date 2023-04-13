import "./Card.css"

const Card = ({ imgSrc, position, title, body }) => {
    return (
        <div className="card">
            <div className={`cardContainer ${position}`}>
                <div className="imagen">
                    <img src={imgSrc} />
                </div>
                <div className="text">
                    <h2>{title}</h2>
                    <p className="text-body">{body}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
