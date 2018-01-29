import { connect } from 'react-redux';

import Summary from '../components/Summary';

function mapStateToProps(state) {
    return {
        desires: state.desires
    }
}

const SummaryContainer = connect(mapStateToProps)(Summary);

export default SummaryContainer