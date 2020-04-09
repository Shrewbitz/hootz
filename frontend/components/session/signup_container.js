import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import {login} from '../../actions/session_actions';
import Signup from './signup';

const mdp = dispatch => ({
    signup: formUser => dispatch(signup(formUser)),
    login: formUser => dispatch(login(formUser))
});


export default connect(null, mdp)(Signup)