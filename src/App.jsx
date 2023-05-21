import React from "react"
import "./App.css"

//components
import { Navbar } from "./components/navbar/Navbar"
import Card from "./components/Card/Card"
import About from "./components/About/About"

//img
import first from "./assets/8a8375ab7908384e1fd6efe408284203.svg"
import first_2 from "./assets/e6d57714479874c665b36c7adee76b1d.svg"
import first_3 from "./assets/c40c84ca18d84633a9d86b4046a91437.svg"

import dos from "./assets/46b2132c01604c9493d558de444929f4.svg"

import tres from "./assets/575a0322f3b36ca2fecb23ad2c6dd5ad.svg"

import cuatro from "./assets/921b1ae33edca174b6ebe787bb8b6c3b.svg"

import justChillin from "./assets/98ea5b9e92e304c7d352ac462996adc5.svg"

import socialMedia from "./assets/social_media.png"

import Logo from "./assets/logo.svg"

function App() {
    return (
        <div className="App">
            <Navbar />

            <div className="first">
                <div className="firstContainer">
                    <h1>IMAGINE A PLACE...</h1>
                    <p>
                        ...where you can belong to a school club, a gaming
                        group, or a worldwide art community. Where just you and
                        a handful of friends can spend time together. A place
                        that makes it easy to talk every day and hang out more
                        often.
                    </p>
                    <div className="buttons">
                        <button className="button1">Download for Mac</button>
                        <button className="button2">
                            Open Discord in your Browser
                        </button>
                    </div>
                </div>
                <div className="img-container">
                    <img className="fondo" src={first_2} alt="" />
                    <img className="izquierda" src={first} alt="" />
                    <img className="derecha" src={first_3} alt="" />
                </div>
            </div>

            <Card
                imgSrc={dos}
                position="right"
                title="Create an invite-only place where you belong"
                body="Discord servers are organized into topic-based channels where you can 
                collaborate, share, and just talk about your day without clogging up a group chat."
            />

            <Card
                imgSrc={tres}
                position="left"
                title="Where hanging out is easy"
                body="Grab a seat in a voice channel when you’re free. Friends in your 
                server can see you’re around and instantly pop in to talk without having to call."
            />

            <Card
                imgSrc={cuatro}
                position="right"
                title="From few to a fandom"
                body="Get any community running with moderation tools and 
                custom member access. Give members special powers, set up private channels, and more."
            />

            <div className="just-chillin">
                <div className="just-chillin-container">
                    <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
                    <p>
                        Low-latency voice and video feels like you’re in the
                        same room. Wave hello over video, watch friends stream
                        their games, or gather up and have a drawing session
                        with screen share.
                    </p>
                </div>

                <img src={justChillin} alt="" />
            </div>

            <div className="download-mac">
                <h2>Ready to start your journey?</h2>
                <button className="button2">Download for Mac</button>
            </div>

            <footer>
                <div className="footer-container">
                    <div className="top">
                        <img
                            className="social-media"
                            src={socialMedia}
                            alt=""
                        />

                        <About
                            title="Product"
                            options={["Download", "Nitro", "Status"]}
                        />
                        <About
                            title="Company"
                            options={["About", "Jobs", "Brand", "Newsroom"]}
                        />
                        <About
                            title="Resources"
                            options={[
                                "College",
                                "Support",
                                "Safety",
                                "Blog",
                                "Feedback",
                                "Build",
                                "StreamKit",
                                "Creators",
                                "Community",
                            ]}
                        />

                        <About
                            title="Policies"
                            options={[
                                "Terms",
                                "Privacy",
                                "Cookie Settings",
                                "Guidelines",
                                "Acknowledgements",
                                "Licenses",
                                "Moderation",
                            ]}
                        />
                    </div>

                    <div className="bottom">
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                            <div className="discord">Discord</div>
                        </div>

                        <button className="sign-up">Sign up</button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
