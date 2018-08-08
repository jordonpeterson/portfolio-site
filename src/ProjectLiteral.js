import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import './App.css'


const Project = styled.div`
  background-color:blue;
  width:100%;
  height: 100%;
  text-align: center;
  font: Georgia;
  image-height:40%;
  image-width: 90%;
  margin: 5px;
  padding: 15px;
  border: 5px ridge grey;
`;


export default class extends Component {
    render() {
        return (
            <Fragment>
                <Project>
                    <h1>{this.props.title}</h1>
                    <a href={this.props.href} target={"_blank"}>
                    <img src={this.props.src} alt="A description of a project I'm working on."/>
                    </a>
                    <p>{this.props.text} <a href={this.props.href} target={"_blank"}>Link to GitHub Repository</a></p>
                </Project>

            </Fragment>
        )
    }
}
