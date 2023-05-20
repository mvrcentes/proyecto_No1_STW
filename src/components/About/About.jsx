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

export default About
