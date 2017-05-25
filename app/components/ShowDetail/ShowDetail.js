import React, { Component } from 'react';
import HTMLView from 'react-native-htmlview';
import { ScrollView, ActivityIndicator } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import Styles from './style';
import { connect } from 'react-redux';
import { fetchShowDetail } from '../../actions/showDetailActions';

class ShowDetail extends Component {
	componentDidMount() {
		// TODO: Grab all the info of the show with different endpoints
        this.props.fetchShowDetail(this.props.navigation.state.params.id);
    }

	addToFavorite() {
		// TODO: Need to store the TVShow on the favorites state
		console.log('addToFavorite');
	}

    render() {
		console.log("ShowDetail render:", this.props);

		const show = this.props.show;

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
                <ScrollView style={Styles.container}>
					<Tile
						imageSrc={{ uri: show.image.original}}
						featured
					/>

					<HTMLView
						value={show.summary}
					/>

					<List>
						<ListItem
							title="Rating"
							rightTitle={show.rating.average}
							hideChevron
						/>
						<ListItem
							title="Language"
							rightTitle={show.language}
							hideChevron
						/>
						<ListItem
							title="Premiered"
							rightTitle={show.premiered}
							hideChevron
						/>
						<ListItem
							title="Status"
							rightTitle={show.status}
							hideChevron
						/>

						<ListItem
							title="Network"
							rightTitle={show.network.name}
							hideChevron
						/>
					</List>

					<Button
					icon={{name: 'star'}}
					buttonStyle={Styles.favorite}
					title='Add to favorite'
					onPress={ () => this.addToFavorite() } />
				</ScrollView>
            );
        }
    }
}

const mapStateToProps = state => {
  return { show: state.showDetail.data, isFetching: state.showDetail.isFetching }
};

export default connect(mapStateToProps, { fetchShowDetail })(ShowDetail);