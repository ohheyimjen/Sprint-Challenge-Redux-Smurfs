import axios from "axios";

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";


export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";
// export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

const URL = "http://localhost:3333/smurfs";

export const getSmurfs = () => dispatch => {
  const smurfs = axios.get(`${URL}`);
  return dispatch => {
    dispatch({ type: GET_SMURFS_START });
    smurfs
      .then(res => {
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_SMURFS_FAILURE, payload: err });
      });
  };
};

export const addSmurf = smurf => {
  const newSmurf = axios.post(`${URL}`, smurf);
  return dispatch => {
    dispatch({ type: ADD_SMURF_START });
    newSmurf
      .then(({ data }) => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ADD_SMURF_FAILURE, payload: err });
      });
  };
};

// .then(res => dispatch({
//   type: ADD_SMURF,
//   payload: res.data
// }))
// .catch(err => dispatch({
//   type: FETCH_SMURF_FAILURE,
//   payload: err
// }));
// }
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
