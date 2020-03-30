import React from 'react';
import '../App.css';
import {Col, Container, Row, Alert} from "react-bootstrap";
import Header from "../components/Navbar/Header";
import {InfoCard} from "../components/InfoCard";
import {DataTable} from "../components/Table";
import {Footer} from "../components/Navbar/Footer";

const About = () => {
    return (
        <Container fluid>
            <Row>
                <Header></Header>
            </Row>
            <Row>
                <Col md={4}>
                </Col>
                <Col id="alert" md={4}>
                    <Alert variant="dark">
                        For now, there is nothing to show.
                    </Alert>
                </Col>
                <Col md={4}>
                </Col>
            </Row>
            <Row>
                <Footer></Footer>
            </Row>
        </Container>
    );
};

export default About;
