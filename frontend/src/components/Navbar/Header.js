import React from 'react';
import '../../App.css';
import {Navbar, Nav, NavDropdown, Image} from 'react-bootstrap';
import {Link,withRouter} from 'react-router-dom';

const Header = ({history}) => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Image className="mr-1" src="/favicon.png" rounded />
            <Navbar.Brand href="/">InfectMap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => {history.push('/covid-19')}} to={"/covid-19"}>Covid-19</Nav.Link>
                    {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>*/}
                </Nav>
                <Nav>
                    <Nav.Link onClick={() => {history.push('/about')}} to={"/about"}>About</Nav.Link>
                </Nav>
                <Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default withRouter(Header);

