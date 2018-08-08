import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import './App.css'
import Picture from './Picture.png'

const MainPicture = styled.img`
    
    width: 100%;
    height: 100%;
    background-color: #ee7600;   
    padding: 15px;
    
`


export default class extends Component {
    render() {
        return (
            <Fragment>
                <MainPicture src={Picture} alt="A picture of Jordon Peterson" title={"Jordon Peterson"}/>
            </Fragment>
        )
    }
}
