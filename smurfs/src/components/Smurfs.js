import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../Actions/MainActions'
import SmurfMaker from './smurfMaker'

function SmurfList(props){
    useEffect(()=>{
        props.fetchSmurfs()
    }, [])

    return(
        <div>
            <div>
                {props.smurfs.map(smurf => <SmurfMaker key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height}/>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList)