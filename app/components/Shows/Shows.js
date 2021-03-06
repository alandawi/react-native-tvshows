import React, { Component } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import Styles from './style';
import { connect } from 'react-redux';
import { fetchShows } from '../../actions/showsActions';

import ShowsList from '../ShowsList';

class Shows extends Component {
    componentDidMount() {
        this.props.fetchShows();
    }

    render() {
        console.log("Shows render:", this.props);

        if (this.props.isFetching) {
            return (
                <ActivityIndicator
                    animating={this.props.isFetching}
                    style={[Styles.centering, {height: 80}]}
                    size="large"
                />
            );
        } else {
            return (
                <ScrollView>
                    <ShowsList {...this.props} />
                </ScrollView>
            );
        }
    }
}

const mapStateToProps = state => {
  return { shows: state.allShows.list, isFetching: state.allShows.isFetching }
};

export default connect(mapStateToProps, { fetchShows })(Shows);