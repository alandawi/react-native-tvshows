import React, { Component } from 'react';
import { Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Styles from './style';

class ShowsList extends Component {
    // TODO: Read the data from the API and store with Redux

    viewShow = (show) => {
        this.props.navigation.navigate('ShowDetail', { ...show });
    };

    render() {
        //console.log("ShowsList", this.props);
        const { shows } = this.props;

        return (
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
        );
    }
}

export default ShowsList;