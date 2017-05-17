import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Styles from './style';
import { connect } from 'react-redux';

import ShowsList from '../ShowsList';

class Shows extends Component {
    render() {
        console.log("Shows", this.props);
        return (
			<ScrollView>
				<ShowsList {...this.props} />
			</ScrollView>
        );
    }
}

const mapStateToProps = state => {
  return { shows: state.allShows }
};

//export default Shows;
export default connect(mapStateToProps)(Shows);