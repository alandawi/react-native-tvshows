import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Styles from './style';
import { connect } from 'react-redux';
import showUsers from '../../actions';

import ShowsList from '../ShowsList';

class Shows extends Component {
    componentWillMount() {
        console.info("componentWillMount");
        this.props.showUsers();
    }

    componentDidMount() {
        console.info("componentDidMount");
    }

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
  return { shows: state.allShows, users: state.allUsers.list }
};

//export default Shows;
export default connect(mapStateToProps, { showUsers })(Shows);