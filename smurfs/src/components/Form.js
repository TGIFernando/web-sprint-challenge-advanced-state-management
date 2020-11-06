import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSmurf, reset } from '../Actions/MainActions'
import * as sty from '../styledComponents/styledForm'

class Form extends Component{
    state = {
        name: '',
        age: '',
        height: '',
        id: '',
    }
    
    onSubmit = e => {
        e.preventDefault()
        const len = this.props.smurfs.length
        this.setState({...this.state, id: len})
        this.props.addSmurf(this.state)
    }

    onChange = e => {
        const name = e.target.name
        this.setState({...this.state, [name]:e.target.value})
    }

    render(){
        return(
            <sty.MainDiv>
                <sty.Form onSubmit={this.onSubmit}>
                    <sty.Label>Name </sty.Label>
                    <input value={this.state.name} onChange={this.onChange} name='name' type='text'/>
                    <sty.Label> Age </sty.Label>
                    <input value={this.state.age} onChange={this.onChange} name='age' type='text'/>
                    <sty.Label> Height </sty.Label>
                    <input value={this.state.height} onChange={this.onChange} name='height' type='text'/>
                    <br></br>
                    <button>Send Smurf</button>
                    <button onClick={this.props.reset}>Reset</button>
                </sty.Form>
            </sty.MainDiv>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {addSmurf,reset})(Form)