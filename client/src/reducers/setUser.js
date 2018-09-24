export default function setUser(state = {user: ''}, action){
  switch (action.type) {

    case 'SIGN_UP':
      return action.user;

    case 'LOG_IN':
      return action.user;

    case 'LOG_OUT':
      return action.user;


    default:
      return state;

  };
};
