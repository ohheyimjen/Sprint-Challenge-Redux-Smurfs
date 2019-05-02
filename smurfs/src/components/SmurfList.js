import React from "react";
import { connect } from 'react-redux'
import SmurfForm from './SmurfForm';
import Smurfs from "./Smurfs";
import { getSmurfs } from '../actions'

class SmurfList extends React.Component {
    
    componentDidMount(){
        this.props.getSmurfs();
    }

    render() {
        if (this.props.fetchingSmurfs) {
            return (
                <div>
                    <h1>Let's meet the smurfs!</h1>
                </div>
            );
        }
        return (
            <div>
            {this.props.smurfs.map(smurf => {
                return (
                    <Smurfs key={smurf.id} smurf={smurf} />
                )
            })}
            </div>
        )
    }
}

const mapStateToPops = state => {
    console.log(state);
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs
    }
}

export default connect(
    mapStateToPops,
    { getSmurfs }
)(SmurfList);