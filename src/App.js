import React from 'react';
import logo from './logo.svg';
import './App.css';
import "semantic-ui-css/semantic.min.css";
import {Container, Button, Grid, Image} from 'semantic-ui-react'
import Map from './Map';

function App() {
    return (
        <div id="root">
            <Grid.Column columns="16" className="App-main">
                <Container>
                    <Map/>
                    <Button>Click Here !</Button>
                </Container>
            </Grid.Column>
        </div>
    );
}

export default App;
