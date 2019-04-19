import React from 'react';
import { connect } from 'react-redux';

class Friends extends Component {
    constructor(props) {
      super(props);
      this.state = {
        smurfSelected: {},
        smurfId: null,
        showUpdate: false
      };
    }

  
    render() {
      return (
        <div className="Smurf-Container">
          <ul className="Smurf-List">
            {this.props.smurfs.map(smurf => {
              return [
                <li
                  onClick={() => this.setState({ smurfSelected: smurf })}
                  key={smurf.id}
                >
                  {smurf.name}
                </li>,
                <button
                  onClick={_ =>
                    this.setState({
                      smurfId: smurf.id,
                      showUpdate: !this.state.showUpdate
                    })
                  }
                >
                  {' '}
                  Update {smurf.name}
                </button>
              ];
            })}
          </ul>
          {Object.keys(this.state.smurfSelected).length > 0 ? (
            <SelectedFriend
              selected={this.state.friendSelected}
            />
          ) : null}

          {this.state.showUpdate ? <UpdateFriendForm /> : null}
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      error: state.friendsReducer.error
    };
  };
  
  export default connect(mapStateToProps, {})(Friends);