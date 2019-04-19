import { ADD_SMURF, GET_SMURFS, FETCH_SMURF_FAILURE } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

function reducer(state = initialState, action) {

  switch(action.type) {

    case ADD_SMURF:
    return {
      ...state,
      error: '',
      isLoading: true
    };

    case GET_SMURFS:
    return {
      ...state,
      error: '',
      getSmurfs: action.payload
    };

    case FETCH_SMURF_FAILURE:
    return {
      ...state,
      error: action.payload,
      isLoading: false
    }

    default: 
      return state;
  }
}

export default reducer;
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
