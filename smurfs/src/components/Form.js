import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSmurf, reset } from '../Actions/MainActions'

class Form extends Component{
    state = {
        name: '',
        age: '',
        height: '',
        id: Date.now(),
    }
    
    onSubmit = e => {
        e.preventDefault()
        const len = this.props.smurfs.length
        this.setState({...this.state, id: len})
        this.props.addSmurf(this.state)
        console.log('My Smurf: ', this.state)
        console.log('Data Smurf', this.props.smurfs)
        console.log("Length", len)
    }

    onChange = e => {
        const name = e.target.name
        this.setState({...this.state, [name]:e.target.value})
    }

    render(){
        return(
            <div>
                <h1>Hello From Form</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Name</label>
                    <input value={this.state.name} onChange={this.onChange} name='name' type='text'/>
                    <label>Age</label>
                    <input value={this.state.age} onChange={this.onChange} name='age' type='text'/>
                    <label>Height</label>
                    <input value={this.state.height} onChange={this.onChange} name='height' type='text'/>
                    <button>Fetch Smurf</button>
                    <button onClick={this.props.reset}>Reset</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {addSmurf,reset})(Form)