import React from 'react'
import * as sty from '../styledComponents/styledMaker'

function SmurfMaker (props){
    return(
        <sty.FlexyDiv>
            <sty.MainDiv>
                <sty.H2>Name: {props.name}</sty.H2>
                <sty.H2>age: {props.age}</sty.H2>
                <sty.H2>height: {props.height}</sty.H2>
            </sty.MainDiv>
        </sty.FlexyDiv>
    )
}

export default SmurfMaker