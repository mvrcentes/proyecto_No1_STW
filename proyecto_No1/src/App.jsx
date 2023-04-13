import { useState } from "react"
import "./App.css"

//components
import Navbar from "./components/navbar/Navbar"
import Card from "./components/card/Card"

//img
import first from "./assets/8a8375ab7908384e1fd6efe408284203.svg"
import first_2 from "./assets/e6d57714479874c665b36c7adee76b1d.svg"
import first_3 from "./assets/c40c84ca18d84633a9d86b4046a91437.svg"

import dos from "./assets/46b2132c01604c9493d558de444929f4.svg"

import tres from "./assets/575a0322f3b36ca2fecb23ad2c6dd5ad.svg"

import cuatro from "./assets/921b1ae33edca174b6ebe787bb8b6c3b.svg"

function App() {
    const firstimgs = [first, first_2, first_3]

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

                <img className="imagenes" src={first} alt="" />
                <img src={first_2} alt="" />
                <img src={first_3} alt="" />
            </div>

            <Card
                imgSrc={dos}
                position="right"
                title="Create an invite-only place where you belong"
                body="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
            />

            <Card
                imgSrc={tres}
                position="left"
                title="Where hanging out is easy"
                body="Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call."
            />

            <Card
                imgSrc={cuatro}
                position="right"
                title="From few to a fandom"
                body="Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
            />
        </div>
    )
}

export default App
