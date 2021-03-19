/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';



function NavBar() {

    return (

        <div>

            <nav className="sticky-top">

                <div className="container nav-container">

                    <div className="sectionLinks dropdown col">

                        <Dropdown>
                            <Dropdown.Toggle className="btn btn-primary card-link" data-bs-target="#navigateOptions" data-bs-toggle="collapse" aria-controls="collapseExample" id="dropdown-basic" />



                        </Dropdown>

                        {/* <p>

                                <a className="btn btn-primary fas fa-bars" data-bs-toggle="collapse" href="#navigateOpts" role="button"
                                    aria-expanded="false" aria-controls="collapseExample"></a>
                            </p>
                            <div className="collapse" id="navigateOpts">
                                <div className="card card-body">
                                    <DropdownMenu>
                                        <a className="dropdown-item" href="#aboutMe" >About</a>
                                        <a className="dropdown-item" href="#trailChasers">Featured</a>
                                        <a className="dropdown-item" href="#trailChasers">Portfolio</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="https://www.apple.com/" >Contact</a>
                                    </DropdownMenu>
                                </div>
                            </div> */}

                    </div>


                </div>

            </nav>
            <DropdownMenu className="collapse" id="navigateOptions">
                <Dropdown.Item href="#aboutMe" >About</Dropdown.Item>
                <Dropdown.Item href="#trailChasers" >Featured</Dropdown.Item>
                <Dropdown.Item href="#trailChasers">Portfolio</Dropdown.Item>
            </DropdownMenu>


        </div>

    )

}

export default NavBar;