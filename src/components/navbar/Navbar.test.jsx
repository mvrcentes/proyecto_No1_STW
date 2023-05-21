import React from "react"
import { render, screen } from "@testing-library/react"
import { Navbar } from "./Navbar.jsx"

describe("Navbar", () => {
    it("should render correctly", () => {
        render(<Navbar />)
        
        screen.debug()
    })
})
