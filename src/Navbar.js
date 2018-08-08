import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import './App.css'

const Navbar = styled.main`
  width:100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  
`;
const Flexrow = styled.div`
  display: flex;
  

`

const Flexcolumn = styled.div`
  text-align: center;
  margin: 5px;
  
   font-size: 30px;
`


export default class extends Component {
    render() {
        return (
            <Fragment>
                <Navbar>
                    <Flexrow>

                        <Flexcolumn>
                            <a href={"https://www.linkedin.com/in/jordon-peterson"}target={"_blank"}> <i className="fab fa-linkedin"></i></a>
                        </Flexcolumn>

                        <Flexcolumn>
                           <a href={"https://github.com/jordonpeterson"} target={"_blank"}>  <i className="fab fa-github-square"></i></a>

                        </Flexcolumn>

                        <Flexcolumn>


                        </Flexcolumn>


                    </Flexrow>


                </Navbar>
            </Fragment>
        )
    }
}