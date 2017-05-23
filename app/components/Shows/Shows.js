import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Styles from './style';
import { connect } from 'react-redux';
import { fetchShowsWithRedux } from '../../actions/showsActions';

import ShowsList from '../ShowsList';

class Shows extends Component {
    componentWillMount() {
        console.info("componentWillMount");
    }

    componentDidMount() {
        console.info("componentDidMount");
        this.props.fetchShowsWithRedux();
    }

    render() {
        console.log("Shows render:", this.props);
        return (
			<ScrollView>
				<ShowsList {...this.props} />
			</ScrollView>
        );
    }
}

const mapStateToProps = state => {
  return { shows: state.allShows.list }
};

export default connect(mapStateToProps, { fetchShowsWithRedux })(Shows);