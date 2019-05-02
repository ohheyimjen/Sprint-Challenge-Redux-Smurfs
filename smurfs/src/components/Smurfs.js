import React from 'react';
import { connect } from 'react-redux';
import SmurfForm from './SmurfForm';

class Smurfs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        editing: false
      };
    }

    render() {
        
          return (
            <div className='Smurfs'>
                <h2>{`${this.props.smurf.name} Smurf`}</h2>
                <h3>{`${this.props.smurf.age} Smurf years old`}</h3>
                <h3>{`${this.props.smurf.height} cm`}</h3>
                {this.state.editing && <SmurfForm smurf={this.props.smurf} submit={this.props.editSmurf} />}
            </div>
          );
        }

  }
  
  const mapStateToProps = state => {
    return {
      editing: state.editing
    }
  }
  
  export default connect(mapStateToProps)(Smurfs);