import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Styles from './style';
import { connect } from 'react-redux';

import { shows } from '../../config/data';

class Shows extends Component {
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
        console.log(this.props);
        return (
			<ScrollView>
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
			</ScrollView>
        );
    }
}

const mapStateToProps = state => {
  return { shows: state.allShows }
};

//export default Shows;
export default connect(mapStateToProps)(Shows);