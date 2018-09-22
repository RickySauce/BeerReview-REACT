export default function setUser(state = {
  user: {},
}, action) {
  switch (action.type) {
    case 'LOG_IN':
      const user = action.user
      return user;

    case 'LOG_OUT'
      const user = {}
      return user;
    

    default:
      return state;
  }
};
