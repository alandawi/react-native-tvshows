import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';
import { shows } from '../config/data';

class Shows extends Component {
  // TODO: Read the data from the API and store with Redux

  onLearnMore = (show) => {
    this.props.navigation.navigate('Details', { ...show });
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
                    onPress={() => this.onLearnMore(show)}
                />
            ))}
        </List>
      </ScrollView>
    );
  }
}

export default Shows;
