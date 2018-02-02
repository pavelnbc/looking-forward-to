import { connect } from 'react-redux';

import Header from '../components/Header';
import {closeDesireActions} from "../actions";

function mapStateToProps(state) {
    return {
        desires: state.desires
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeDesires: () => dispatch(closeDesireActions())
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer