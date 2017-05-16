import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Styles from './style';

import { shows } from '../../config/data';

class Shows extends Component {
    // TODO: Read the data from the API and store with Redux

    viewShow = (show) => {
        this.props.navigation.navigate('ShowDetail', { ...show });
    };

    render() {
        return (
			<ScrollView>
				<List>
                    {shows.map((show) => (
						<ListItem
							key={show.id}
							avatar={{ uri: show.image.medium }}
							title={`${show.name.toUpperCase()}`}
							subtitle={`Raiting: ${show.rating.average}`}
							onPress={() => this.viewShow(show)}
						/>
                    ))}
				</List>
			</ScrollView>
        );
    }
}

export default Shows;
