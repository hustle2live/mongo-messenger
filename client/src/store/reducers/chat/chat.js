// import { getUser, postSignIn, postSignUp, deleteUser } from '../actions/actions';

import { actions } from './auth.slice';

const allActions = {
   ...actions,
//    getUser,
//    postSignIn,
//    postSignUp,
//    deleteUser
};

export { allActions as actions };
export { reducer } from './auth.slice';


