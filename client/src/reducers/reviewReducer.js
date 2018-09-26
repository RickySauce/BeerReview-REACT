export default function reviewReducer(state = {validUser: false, review: '', renderForm: false}, action) {
  switch (action.type) {

    case 'GET_REVIEW':
      let user = action.beer[0].user
      let review
      user != false ? review = user.reviews.find(el => el.beer_id === action.beer[1].id) : undefined
      return{
        ...state,
          validUser: user != false ? true : false,
          review: review !== undefined ? review : ''
        }

    case 'RENDER_FORM':
      return {
        ...state,
        renderForm: true
      }

    case 'RESET_FORM':
      return {
        ...state,
        renderForm: false
      }


    case 'ADD_REVIEW':
        return {
          validUser: true,
          review: action.review,
          renderForm: false
        }

    case 'DELETE_REVIEW':
      return {
        validUser: true,
        review: '',
        renderForm: false
      };

    default:
      return state;

  }
};
