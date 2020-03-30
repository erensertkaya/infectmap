import React from 'react';
import '../../App.css';
import {Navbar, Nav, NavDropdown, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faHeart} from "@fortawesome/free-solid-svg-icons";


export const Footer = () => {
    return (
        <Navbar fixed="bottom" expand="lg" bg="dark" variant="dark">
            <Navbar.Text className="mr-5">
                <a className='ml-1'>Made With</a>  <FontAwesomeIcon icon={faHeart}/><a target='_blank' href='https://www.linkedin.com/in/erensertkaya/' className='ml-1'>By Eren Sertkaya</a>
            </Navbar.Text>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-3">
                    <Nav.Link eventKey={2} href="">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

