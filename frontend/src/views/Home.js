import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Header from "../components/Navbar/Header";
import {InfoCard} from "../components/InfoCard";
import {DataTable} from "../components/Table";
import {Footer} from "../components/Navbar/Footer";

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Header></Header>
            </Row>
            <Row>
                <Col md={2}></Col>
                <Col md={2} className={'mt-5'}>
                    <InfoCard bg={'dark'} text={'white'} style={{width: '18rem'}} className={'mt-5'}
                              title={'Infections'} tag={'primary'} type={'case'}></InfoCard>
                </Col>
                <Col md={2} className={'mt-5'}>
                    <InfoCard bg={'dark'} text={'white'} style={{width: '18rem'}} className={'mt-5'}
                              title={'Deaths'} tag={'danger'} type={'death'}></InfoCard>
                </Col>
                <Col md={2} className={'mt-5'}>
                    <InfoCard bg={'dark'} text={'white'} style={{width: '18rem'}} className={'mt-5'}
                              title={'Recoveries'} tag={'success'} type={'recovery'}></InfoCard>
                </Col>
                <Col md={2} className={'mt-5'}>
                    <InfoCard bg={'dark'} text={'white'} style={{width: '18rem'}} className={'mt-5'}
                              title={'Unresolved'} tag={'warning'} type={'unresolved'}></InfoCard>
                </Col>
                <Col md={2}></Col>
            </Row>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <DataTable></DataTable>
                </Col>
                <Col md={3}></Col>
            </Row>
            <Row>
                <Footer></Footer>
            </Row>
        </Container>
    );
};

export default Home;
