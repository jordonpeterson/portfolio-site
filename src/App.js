import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import ProjectContainer from './ProjectContainer'
import styled from 'styled-components'

const Acpp = styled.div`
  background-color: #ee7600;
  
`;

class App extends Component {
    render() {
        return (

            <Router>
                <Fragment>
                    <Acpp>
                        <ProjectContainer/>
                    </Acpp>
                </Fragment>
            </Router>

        );
    }
}

export default App;
