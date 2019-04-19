
import React from "react";

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.smurf) {
            this.state = {
                id: this.props.smurf.id,
                name: this.props.smurf.name,
                age: this.props.smurf.age,
                height: this.props.smurf.height
            }
        } else {
            this.state = {
                id: null,
                name: '',
                age: '',
                height: ''
            }
        }
        
    }



    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.id) {
           const smurf ={
               id: this.state.id,
               name: this.state.name,
               age: this.state.age,
               height: this.state.height
           };
           this.props.submit(smurf);
           this.setState({
               id: null,
               name: '',
               age: '',
               height: ''
           });
        }
            const smurf = {
                name: this.state.name,
                age: this.state.age,
                height: this.state.height
            }
            this.props.submit(smurf);
            this.setState({
                id: null,
                name: '',
                age: '',
                height: ''
            });
        }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name='name'
                        type='text'
                        value={this.state.name}
                        placeholder='First name of smurf'
                        onChange={this.handleChanges}
                    />
                    <input
                        name='age'
                        type='number'
                        value={this.state.age}
                        placeholder='age in smurf years'
                        onChange={this.handleChanges}
                    />
                    <input
                        name='height'
                        type='text'
                        value={this.state.height}
                        placeholder='how many cm tall?'
                        onChange={this.handleChanges}
                    />
                    <button className='btn'>{this.props.smurf ? `save changes` : `add smurf`}</button>
                </form>
            </div>
        );
    }
}


export default SmurfForm;


// import React from 'react';
// import { connect } from 'react-redux';
// import { getSmurfs } from '../actions';


// class SmurfForm extends React.Component {
//     state = {
//         name: '',
//         age: '',
//         height: '',
//         id: ''
//     }

//     handleChanges = event => {
//         this.setState({ [event.target.name]: event.target.value });
//       };
    
//       handleAddSmurf = _ => {
//         const { name, age, height } = this.state;
//         this.props.createFriend({ name, age, height });
//         this.setState({ name: '', age: '', height: '' });
//       };
    

//     render() {
//         return (
//             <div>
//                 <form >
//                     <input
//                         name='name'
//                         type='text'
//                         value={this.state.name}
//                         placeholder='First name of smurf'
//                         onChange={this.handleChanges}
//                     />
//                     <input
//                         name='age'
//                         type='number'
//                         value={this.state.age}
//                         placeholder='age in smurf years'
//                         onChange={this.handleChanges}
//                     />
//                     <input
//                         name='height'
//                         type='text'
//                         value={this.state.height}
//                         placeholder='how many cm tall?'
//                         onChange={this.handleChanges}
//                     />
//                     <button onClick={() => this.handleAddSmurf()}>Add New Smurf</button>
//                 </form>
//             </div>
//         );
//     }
// }


// export default SmurfForm;

    // const mapStateToProps = state => {
    //     console.log(state)
    //     return {
    //         smurfs: state.smurfs
            
    //     };
    // };
    
    // export default connect(mapStateToProps, { getSmurfs })(SmurfForm);
    