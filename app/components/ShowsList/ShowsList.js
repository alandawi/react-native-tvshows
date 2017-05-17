import React, { Component } from 'react';
import { Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Styles from './style';

class ShowsList extends Component {
    // TODO: Read the data from the API and store with Redux

    viewShow = (show) => {
        this.props.navigation.navigate('ShowDetail', { ...show });
    };

    getShows() {
        const { shows } = this.props;
        return showsData = shows.map((show, key) => {
            console.log(show);
            return <ListItem
                key={show.id}
                avatar={{ uri: show.image.medium }}
                title={`${show.name.toUpperCase()}`}
                subtitle={`Raiting: ${show.rating.average}`}
                onPress={() => this.viewShow(show)}
            />
        })
    }

    render() {
        console.log("ShowsList", this.props);

        return (
            <List>
                {this.getShows()}
                {/*{shows.map((show) => (
                 <ListItem
                 key={show.id}
                 avatar={{ uri: show.image.medium }}
                 title={`${show.name.toUpperCase()}`}
                 subtitle={`Raiting: ${show.rating.average}`}
                 onPress={() => this.viewShow(show)}
                 />
                 ))}*/}
            </List>
        );
    }
}

export default ShowsList;