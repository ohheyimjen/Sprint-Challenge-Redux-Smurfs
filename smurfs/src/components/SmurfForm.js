import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: '',
        id: ''
    }
};

handleInputChange = e => {
    this.setState({ [event.target.name]: event.target.value });
};

addSmurf = event => {
    event.preventDefault();
    const smurf = this.state
    axios
    .post('http://localhost:3333/smurfs/', smurf)
    .then(response => {
      this.props.updateSmurfs(response.data);
      this.props.history.push('/')
    })
    .catch(error => console.log(error));

    render() {
        return (
          <div className="SmurfForm">
            <form onSubmit={this.addSmurf}>
              <input
                onChange={this.handleInputChange}
                placeholder="name"
                value={this.state.name}
                name="name"
              />
              <input
                onChange={this.handleInputChange}
                placeholder="age"
                value={this.state.age}
                name="age"
              />
              <input
                onChange={this.handleInputChange}
                placeholder="height"
                value={this.state.height}
                name="height"
              />
              <button type="submit">Add to the village</button>
            </form>
          </div>
        );
      }
    }

    const mapStateToProps = state => {
        return {
            error: state.error,
            addingSmurf: state.addingSmurf
        };
    };
    
    export default connect(mapStateToProps, { addSmurf })(SmurfForm);
    