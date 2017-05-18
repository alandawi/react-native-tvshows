import React, { Component } from 'react';
import HTMLView from 'react-native-htmlview';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import Styles from './style';

class ShowDetail extends Component {
    render() {
        const { id, image, language, name, premiered, runtime, rating, summary } = this.props.navigation.state.params;

        //console.log(this.props.navigation.state.params);

        return (
			<ScrollView>
				<Tile
					imageSrc={{ uri: image.medium}}
					featured
				/>

				<HTMLView
					value={summary}
				/>

				<List>
					<ListItem
						title="Language"
						rightTitle={language}
						hideChevron
					/>
					<ListItem
						title="Premiered"
						rightTitle={premiered}
						hideChevron
					/>
					<ListItem
						title="Rating"
						rightTitle={rating.average}
						hideChevron
					/>
				</List>
			</ScrollView>
        );
    }
}

export default ShowDetail;
