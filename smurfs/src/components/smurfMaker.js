import React from 'react'

function SmurfMaker (props){
    return(
        <div>
            <h2>Name: {props.name}</h2>
            <h2>age: {props.age}</h2>
            <h2>height: {props.height}</h2>
        </div>
    )
}

export default SmurfMaker