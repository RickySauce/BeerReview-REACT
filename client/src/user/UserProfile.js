import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {

  render(){
    console.log(this.props.user)
    return(
      <div>
      suhhhhh my cheese fry
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return  {user: state.user}
}

  export default connect(mapStateToProps)(UserProfile);
