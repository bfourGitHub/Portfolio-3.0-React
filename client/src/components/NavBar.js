/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Navbar } from 'react-bootstrap';




function NavBarCustom() {

    return (

        <Navbar className="customNav" bg="dark" variant="dark" style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }} >

            <h4 style={{ color: "white" }}>bryan<span style={{ color: "rgba(172,135,80)" }}>moreno</span></h4>

            <div className="navLink3" style={{ display: "flex" }}>
                <a href="/" style={{ fontSize: "1rem", color: "rgba(172,135,80)" }}>about</a>
                <a href="/Projects" style={{ fontSize: "1rem", color: "white" }}>projects</a>
                <a href="/Design" style={{ fontSize: "1rem", color: "rgba(172,135,80)" }}>design</a>
            </div>

        </Navbar>

    )

}

export default NavBarCustom;