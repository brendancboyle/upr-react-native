import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import LoginPage from "../components/Login/LoginPage";
import * as TokenActions from "../actions/TokenActions";

function mapStateToProps(state) {
  return {
    Token: state.Token
  };
}

function mapDispatchToProps(dispatch) {
  return {
      TokenActions: bindActionCreators(TokenActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
