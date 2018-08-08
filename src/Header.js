import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import './App.css'
import Navbar from './Navbar'



const Flexrow = styled.div`
  
  display: flex;
 

`

const Flexcolumn = styled.div`
  text-align: center;
  
  width: ${(props) => props.size / 12 * 100}vw;
  
`

const Header = styled.main`
  background-color:orange;
  width:100%;
  height: 100%;
  text-align: center;
  justify-content: flex-end;
  border: 3px ridge grey;
  
`;


export default class extends Component {
    render() {
        return (
            <Fragment>
                <Header>
                    <Flexrow>
                        <Flexcolumn size={4}>

                        </Flexcolumn>
                        <Flexcolumn size={4}>
                            <h1>Jordon Peterson</h1>
                        </Flexcolumn>

                        <Flexcolumn size ={4}>
                            <Navbar/>

                        </Flexcolumn>




                    </Flexrow>

                </Header>
            </Fragment>
        )
    }
}
