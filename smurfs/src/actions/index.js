import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
console.log(getSmurfs);

  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({
      type: GET_SMURFS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FETCH_SMURF_FAILURE,
      payload: 'Gargamel fetched the smurfs before you could!'
    }));
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });

  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({
      type: ADD_SMURF,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FETCH_SMURF_FAILURE,
      payload: err 
    }));
}


/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
