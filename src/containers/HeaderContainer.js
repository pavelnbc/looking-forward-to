import { connect } from 'react-redux';

import Header from '../components/Header';

function mapStateToProps(state) {
    return {
        desires: state.desires
    }
}

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer