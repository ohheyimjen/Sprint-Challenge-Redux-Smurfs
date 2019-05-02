import { ADD_SMURF_FAILURE, 
  ADD_SMURF_START, 
  ADD_SMURF_SUCCESS, 
  GET_SMURFS_FAILURE, 
  GET_SMURFS_START, 
  GET_SMURFS_SUCCESS} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  // addingSmurf: false,
  error: null,
  editing: false
}
const smurfsReducer = (state = initialState, action) => {

  switch(action.type) {

    case ADD_SMURF_START:
    return {
      ...state,
      fetchingSmurfs: true
    };
    case ADD_SMURF_SUCCESS:
    return {
      ...state,
      fetchingSmurfs: false,
      smurfs: action.payload
    };
    case ADD_SMURF_FAILURE:
    return {
      ...state,
      fetchingSmurfs: false,
      error: action.payload
    };

    case GET_SMURFS_START:
    return {
      ...state,
      fetchingSmurfs: true
    };
    case GET_SMURFS_SUCCESS:
    return {
      ...state,
      fetchingSmurfs: false,
      smurfs: action.payload
    };
    case GET_SMURFS_FAILURE:
    return {
      ...state,
      fetchingSmurfs: false,
      error: action.payload
    };

    default: 
      return state;
  }
}

export default smurfsReducer;
/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
