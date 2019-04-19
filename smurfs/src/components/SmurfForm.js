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

handleAddSmurf = e => {
    const {name, age, }
}